// Smoke test for the MCP server: spawns it over stdio, lists tools, and calls
// each one. Run:  node mcp/smoke-test.mjs
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Client } from '@modelcontextprotocol/sdk/client/index.js'
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js'

const HERE = dirname(fileURLToPath(import.meta.url))
const serverPath = join(HERE, 'server.mjs')

const transport = new StdioClientTransport({ command: process.execPath, args: [serverPath] })
const client = new Client({ name: 'smoke-test', version: '1.0.0' })
await client.connect(transport)

const log = (label, r) => {
  const txt = r.content?.map((c) => c.text).join('\n') ?? JSON.stringify(r)
  console.log(`\n### ${label}\n${txt.slice(0, 900)}${txt.length > 900 ? '\n…(truncated)' : ''}`)
}

const tools = await client.listTools()
console.log('Tools:', tools.tools.map((t) => t.name).join(', '))

log('list_categories', await client.callTool({ name: 'list_categories', arguments: {} }))
log('search_loaders {category:"spinner"}', await client.callTool({ name: 'search_loaders', arguments: { category: 'spinner', limit: 5 } }))
log('search_loaders {query:"dots"}', await client.callTool({ name: 'search_loaders', arguments: { query: 'dots', limit: 3 } }))
log('get_loader_code {id:"spinner-classic", combined}', await client.callTool({ name: 'get_loader_code', arguments: { id: 'spinner-classic' } }))

await client.close()
console.log('\n✅ MCP smoke test passed.')
process.exit(0)
