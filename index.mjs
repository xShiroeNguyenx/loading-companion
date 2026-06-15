// loading-companion — programmatic access to the loader registry.
//
//   import { searchLoaders, getLoader, snippet, registry } from 'loading-companion'
//   import registry from 'loading-companion/registry.json'   // raw data
//
// The MCP server ships as a bin: `npx loading-companion-mcp`.
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))

/** The full registry: { count, categories, tags, items: [...] }. */
export const registry = JSON.parse(readFileSync(join(here, 'data', 'registry.json'), 'utf8'))
export const items = registry.items
export const categories = registry.categories
export const tags = registry.tags
export default registry

/** Get one loader's full record (metadata + html/css/js) by id, or undefined. */
export function getLoader(id) {
  return items.find((it) => it.id === id)
}

/** Filter loaders by free text and/or category, tags (all must match), tech. */
export function searchLoaders({ query = '', category, tags: wantTags, tech, originalOnly } = {}) {
  const q = String(query).trim().toLowerCase()
  return items.filter((it) => {
    if (category && it.category !== category) return false
    if (tech && it.tech !== tech) return false
    if (originalOnly && it.generated) return false
    if (wantTags?.length && !wantTags.every((t) => it.tags.includes(t))) return false
    if (!q) return true
    return it.id.includes(q) || it.name.toLowerCase().includes(q) ||
      it.category.includes(q) || it.tags.some((t) => t.includes(q))
  })
}

/** A single paste-ready HTML snippet (inline <style> + markup, plus <script> if needed). */
export function snippet(id) {
  const it = getLoader(id)
  if (!it) return null
  let credit = ''
  if (it.copyright || (it.source?.name && it.source.name !== 'Loading Companion')) {
    credit = `<!-- ${it.name}${it.source?.name ? ` — ${it.source.name}` : ''} · ${it.license}${it.copyright ? ` · ${it.copyright}` : ''} -->\n`
  }
  let out = `${credit}<style>\n${it.css}\n</style>\n${it.html}`
  if (it.js) out += `\n<script>\n(function(){var root=document.currentScript.previousElementSibling;${it.js}})();\n<\/script>`
  return out
}
