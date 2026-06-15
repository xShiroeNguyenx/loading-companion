// Shared writer for hand-authored ORIGINAL loaders, used by every seed batch.
// Materializes one folder per loader under loaders/<category>/<id>/ and SKIPS
// existing folders (unless force) so hand edits are never clobbered.
import { writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { existsSync } from 'node:fs'
import { LOADERS_DIR } from './lib.mjs'

const DEFAULT_SRC = {
  name: 'Loading Companion',
  url: 'https://github.com/loading-companion',
  author: 'Loading Companion',
}

export async function writeLoaders(loaders, { force = false } = {}) {
  let created = 0, skipped = 0
  for (const ld of loaders) {
    const dir = join(LOADERS_DIR, ld.category, ld.id)
    const metaPath = join(dir, 'meta.json')
    if (existsSync(metaPath) && !force) { skipped++; continue }
    await mkdir(dir, { recursive: true })
    const meta = {
      id: ld.id,
      name: ld.name,
      category: ld.category,
      tags: ld.tags ?? [],
      tech: ld.tech ?? 'css',
      framework: 'none',
      dependencies: ld.dependencies ?? [],
      variables: ld.variables ?? {},
      source: ld.source ?? DEFAULT_SRC,
      license: ld.license ?? 'MIT',
      copyright: ld.copyright ?? null,
      generated: false,
      baseId: null,
    }
    await writeFile(metaPath, JSON.stringify(meta, null, 2) + '\n')
    await writeFile(join(dir, 'loader.html'), ld.html.trim() + '\n')
    if (ld.css) await writeFile(join(dir, 'loader.css'), ld.css.trim() + '\n')
    if (ld.js) await writeFile(join(dir, 'loader.js'), ld.js.trim() + '\n')
    created++
  }
  return { created, skipped }
}

export function runBatch(loaders, name = 'batch') {
  const force = process.argv.includes('--force')
  return writeLoaders(loaders, { force }).then(({ created, skipped }) => {
    console.log(`Seed ${name}: ${created} created, ${skipped} skipped (already existed).`)
  })
}
