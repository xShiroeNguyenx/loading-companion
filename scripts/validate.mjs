// Validate every loaders/**/meta.json against the schema rules + check that
// referenced code files exist. Pure Node (no ajv) so it always runs.
import { readFile } from 'node:fs/promises'
import { join, dirname, relative } from 'node:path'
import {
  ROOT, SCHEMA_PATH, CATEGORIES, TECHS, findMetaFiles, exists,
} from './lib.mjs'

const ID_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/

async function main() {
  const schema = JSON.parse(await readFile(SCHEMA_PATH, 'utf8')) // sanity-load
  const required = schema.required
  const metaFiles = await findMetaFiles()
  const errors = []
  const ids = new Set()
  const baseRefs = []

  for (const mp of metaFiles) {
    const rel = relative(ROOT, mp)
    let meta
    try {
      meta = JSON.parse(await readFile(mp, 'utf8'))
    } catch (e) {
      errors.push(`${rel}: invalid JSON — ${e.message}`)
      continue
    }
    const err = (m) => errors.push(`${rel}: ${m}`)

    for (const k of required) if (meta[k] === undefined) err(`missing required field "${k}"`)

    if (meta.id !== undefined) {
      if (!ID_RE.test(meta.id)) err(`id "${meta.id}" is not kebab-case`)
      if (ids.has(meta.id)) err(`duplicate id "${meta.id}"`)
      ids.add(meta.id)
    }
    if (meta.category !== undefined && !CATEGORIES.includes(meta.category))
      err(`category "${meta.category}" not in taxonomy`)
    if (meta.tech !== undefined && !TECHS.includes(meta.tech))
      err(`tech "${meta.tech}" invalid`)
    if (meta.tags !== undefined) {
      if (!Array.isArray(meta.tags)) err('tags must be an array')
      else for (const t of meta.tags) if (!ID_RE.test(t)) err(`tag "${t}" not kebab-case`)
    }
    if (meta.license !== undefined && (typeof meta.license !== 'string' || !meta.license))
      err('license must be a non-empty string')
    if (meta.generated && !meta.baseId) err('generated loader must set baseId')
    if (meta.baseId) baseRefs.push({ rel, baseId: meta.baseId })

    // Code files: every loader needs at least html + css (or js for js-driven).
    const folder = dirname(mp)
    const hasHtml = exists(join(folder, 'loader.html'))
    const hasCss = exists(join(folder, 'loader.css'))
    const hasJs = exists(join(folder, 'loader.js'))
    if (!hasHtml) err('missing loader.html')
    if (!hasCss && !hasJs) err('missing loader.css (or loader.js for js-driven)')
  }

  // baseId references must resolve to a real loader.
  for (const { rel, baseId } of baseRefs) {
    if (!ids.has(baseId)) errors.push(`${rel}: baseId "${baseId}" does not exist`)
  }

  console.log(`\nValidated ${metaFiles.length} loader(s).`)
  if (errors.length) {
    console.error(`\n❌ ${errors.length} error(s):`)
    for (const e of errors) console.error('  - ' + e)
    process.exit(1)
  }
  console.log('✅ All loaders valid.\n')
}

main().catch((e) => { console.error(e); process.exit(1) })
