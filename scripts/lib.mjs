// Shared helpers for the registry tooling. Pure Node, no external deps.
import { readdir, readFile, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
export const LOADERS_DIR = join(ROOT, 'loaders')
export const DATA_DIR = join(ROOT, 'data')
export const SCHEMA_PATH = join(ROOT, 'schema', 'loader.schema.json')

export const CATEGORIES = [
  'spinner', 'dots', 'bars', 'ring', 'pulse', 'ripple', 'wave',
  'bounce', 'flip', 'morph', 'orbit', '3d', 'skeleton', 'progress',
  'svg', 'text', 'combo',
]

export const TECHS = ['css', 'css+js', 'svg', 'webcomponent']

/** Recursively find every meta.json under loaders/. Returns absolute file paths. */
export async function findMetaFiles(dir = LOADERS_DIR) {
  if (!existsSync(dir)) return []
  const out = []
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...(await findMetaFiles(full)))
    } else if (entry.name === 'meta.json') {
      out.push(full)
    }
  }
  return out
}

/** Read a loader folder into a full registry item (meta + inlined code). */
export async function readLoader(metaPath) {
  const folder = dirname(metaPath)
  const meta = JSON.parse(await readFile(metaPath, 'utf8'))
  const html = await readIfExists(join(folder, 'loader.html'))
  const css = await readIfExists(join(folder, 'loader.css'))
  const js = await readIfExists(join(folder, 'loader.js'))
  return {
    item: {
      id: meta.id,
      name: meta.name,
      category: meta.category,
      tags: meta.tags ?? [],
      tech: meta.tech,
      framework: meta.framework ?? 'none',
      dependencies: meta.dependencies ?? [],
      variables: meta.variables ?? {},
      source: meta.source ?? { name: 'Loading Companion' },
      license: meta.license,
      copyright: meta.copyright ?? null,
      generated: meta.generated ?? false,
      baseId: meta.baseId ?? null,
      html: html?.trim() ?? '',
      css: css?.trim() ?? '',
      js: js?.trim() ?? null,
    },
    folder,
    metaPath,
    hasHtml: html != null,
    hasCss: css != null,
  }
}

async function readIfExists(p) {
  if (!existsSync(p)) return null
  return readFile(p, 'utf8')
}

/** Normalize CSS for duplicate detection: drop comments, collapse whitespace. */
export function cssHash(css) {
  const norm = (css || '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
  return createHash('sha1').update(norm).digest('hex')
}

export function exists(p) {
  return existsSync(p)
}

export { stat }
