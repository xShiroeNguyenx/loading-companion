#!/usr/bin/env node
// Loading Companion — MCP server.
// Exposes the generated registry (data/registry.json) to AI agents so they can
// search for a loading animation and pull its ready-to-paste code.
//
//   node mcp/server.mjs            # run over stdio
//
// Add to Claude Code:
//   claude mcp add loading-companion -- node /abs/path/to/loading-companion/mcp/server.mjs
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import { z } from 'zod'

const HERE = dirname(fileURLToPath(import.meta.url))
const REGISTRY_PATH = join(HERE, '..', 'data', 'registry.json')

function loadRegistry() {
  try {
    return JSON.parse(readFileSync(REGISTRY_PATH, 'utf8'))
  } catch (e) {
    throw new Error(`Cannot read registry at ${REGISTRY_PATH}. Run "npm run build:registry" first. (${e.message})`)
  }
}

const registry = loadRegistry()
const items = registry.items

function summary(it) {
  return {
    id: it.id, name: it.name, category: it.category,
    tags: it.tags, tech: it.tech, generated: it.generated,
  }
}

function text(obj) {
  return { content: [{ type: 'text', text: JSON.stringify(obj, null, 2) }] }
}

const server = new McpServer({ name: 'loading-companion', version: registry.version || '0.1.0' })

server.tool(
  'list_categories',
  'List all loader categories with how many loaders each contains, plus the total count.',
  {},
  async () => text({ total: registry.count, categories: registry.categories }),
)

server.tool(
  'search_loaders',
  'Search loaders by free-text query (matches id/name/tags/category), and/or filter by category, tags (all must match), or tech. Returns lightweight summaries; call get_loader for full code.',
  {
    query: z.string().optional().describe('free text matched against id, name, tags, category'),
    category: z.string().optional().describe('exact category, e.g. "spinner", "dots", "skeleton"'),
    tags: z.array(z.string()).optional().describe('every tag must be present on the loader'),
    tech: z.enum(['css', 'css+js', 'svg', 'webcomponent']).optional(),
    limit: z.number().int().positive().max(200).optional().describe('max results (default 50)'),
  },
  async ({ query, category, tags, tech, limit = 50 }) => {
    const q = (query || '').trim().toLowerCase()
    let out = items.filter((it) => {
      if (category && it.category !== category) return false
      if (tech && it.tech !== tech) return false
      if (tags?.length && !tags.every((t) => it.tags.includes(t))) return false
      if (!q) return true
      return it.id.includes(q) || it.name.toLowerCase().includes(q) ||
        it.category.includes(q) || it.tags.some((t) => t.includes(q))
    })
    const matched = out.length
    out = out.slice(0, limit)
    return text({ matched, returned: out.length, results: out.map(summary) })
  },
)

server.tool(
  'get_loader',
  'Get the full record for one loader by id: metadata + html + css + js, ready to paste.',
  { id: z.string().describe('loader id, e.g. "spinner-classic"') },
  async ({ id }) => {
    const it = items.find((x) => x.id === id)
    if (!it) return { content: [{ type: 'text', text: `No loader with id "${id}".` }], isError: true }
    return text(it)
  },
)

server.tool(
  'get_loader_code',
  'Get just the code for one loader. format "combined" returns a single HTML snippet with an inline <style> (and <script> if needed); "parts" returns html/css/js separately.',
  {
    id: z.string(),
    format: z.enum(['combined', 'parts']).optional().describe('default "combined"'),
  },
  async ({ id, format = 'combined' }) => {
    const it = items.find((x) => x.id === id)
    if (!it) return { content: [{ type: 'text', text: `No loader with id "${id}".` }], isError: true }
    if (format === 'parts') return text({ html: it.html, css: it.css, js: it.js, license: it.license, copyright: it.copyright, source: it.source })
    let credit = ''
    if (it.copyright || (it.source?.name && it.source.name !== 'Loading Companion')) {
      const src = it.source?.name ? ` — ${it.source.name}` : ''
      credit = `<!-- ${it.name}${src} · ${it.license}${it.copyright ? ` · ${it.copyright}` : ''} -->\n`
    }
    let snippet = `${credit}<style>\n${it.css}\n</style>\n${it.html}`
    if (it.js) snippet += `\n<script>\n(function(){\n  var root = document.currentScript.previousElementSibling;\n  ${it.js}\n})();\n</script>`
    return { content: [{ type: 'text', text: snippet }] }
  },
)

server.tool(
  'list_tags',
  'List every tag used across the catalog (useful for discovering what to search for).',
  {},
  async () => text({ count: registry.tags.length, tags: registry.tags }),
)

server.tool(
  'get_random',
  'Return one random loader (full record), optionally constrained by category or tech. Handy for inspiration.',
  {
    category: z.string().optional(),
    tech: z.enum(['css', 'css+js', 'svg', 'webcomponent']).optional(),
    originalOnly: z.boolean().optional().describe('exclude generated theme variants'),
  },
  async ({ category, tech, originalOnly }) => {
    const pool = items.filter((it) =>
      (!category || it.category === category) &&
      (!tech || it.tech === tech) &&
      (!originalOnly || !it.generated))
    if (!pool.length) return { content: [{ type: 'text', text: 'No loader matches those constraints.' }], isError: true }
    return text(pool[Math.floor(Math.random() * pool.length)])
  },
)

const transport = new StdioServerTransport()
await server.connect(transport)
// stderr is fine for logs; stdout is reserved for the JSON-RPC protocol.
console.error(`loading-companion MCP ready — ${registry.count} loaders from ${REGISTRY_PATH}`)
