// Parametric variant generator.
//
// Reads scripts/variants.config.json and produces variant loader folders derived
// from base (generated:false) loaders. Variants are written under
// loaders/<category>/<baseId>-<suffix>/ and marked { generated:true, baseId }.
//
// Two ways to declare variants:
//   1. families[]  — explicit, hand-tuned variants (can use cssReplace, etc.)
//   2. auto         — programmatic THEME (color) and SPEED variants applied to
//                     every base loader matching a category filter. These are
//                     theming variants of an existing design (not new "kinds"),
//                     which is why the build reports original vs generated.
//
// Convention that makes this safe: EVERY class and @keyframes name in a loader
// is prefixed `l-<id>`, so renaming `l-<baseId>` -> `l-<variantId>` re-scopes the
// whole loader with one global replace.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { existsSync } from 'node:fs'
import { ROOT, LOADERS_DIR, findMetaFiles, readLoader } from './lib.mjs'

const CONFIG_PATH = join(ROOT, 'scripts', 'variants.config.json')

function reScope(code, baseId, variantId) {
  if (!code) return code
  return code.split(`l-${baseId}`).join(`l-${variantId}`)
}
const uniq = (a) => [...new Set(a)]

function usesVar(base, name) {
  return base.variables?.[name] !== undefined || (base.css || '').includes(name)
}

function matchesFilter(base, filter = {}) {
  if (base.generated) return false
  if (filter.includeIds?.length) return filter.includeIds.includes(base.id)
  if (filter.excludeIds?.includes(base.id)) return false
  if (filter.categories?.length && !filter.categories.includes(base.category)) return false
  return true
}

async function writeVariant(base, { suffix, label, varsCss, cssReplace, variables, tagsAdd }) {
  const variantId = `${base.id}-${suffix}`
  const outDir = join(LOADERS_DIR, base.category, variantId)
  if (existsSync(outDir)) await rm(outDir, { recursive: true, force: true })
  await mkdir(outDir, { recursive: true })

  let css = reScope(base.css, base.id, variantId)
  const html = reScope(base.html, base.id, variantId)
  const js = base.js ? reScope(base.js, base.id, variantId) : null
  for (const [find, repl] of cssReplace ?? []) css = css.split(find).join(repl)
  if (varsCss) css = `.l-${variantId}{${varsCss}}\n` + css

  const meta = {
    id: variantId,
    name: label ? `${base.name} — ${label}` : base.name,
    category: base.category,
    tags: uniq([...(base.tags ?? []), ...(tagsAdd ?? [])]),
    tech: base.tech,
    framework: base.framework,
    dependencies: base.dependencies,
    variables: { ...base.variables, ...(variables ?? {}) },
    source: base.source,
    license: base.license, // variants inherit the base license
    copyright: base.copyright ?? null,
    generated: true,
    baseId: base.id,
  }
  await writeFile(join(outDir, 'meta.json'), JSON.stringify(meta, null, 2) + '\n')
  if (html) await writeFile(join(outDir, 'loader.html'), html + '\n')
  if (css) await writeFile(join(outDir, 'loader.css'), css + '\n')
  if (js) await writeFile(join(outDir, 'loader.js'), js + '\n')
}

async function main() {
  if (!existsSync(CONFIG_PATH)) { console.log('No variants.config.json — nothing to generate.'); return }
  const config = JSON.parse(await readFile(CONFIG_PATH, 'utf8'))

  // Purge previously generated variants so generation is idempotent and a
  // changed config never leaves orphaned variant folders behind.
  let purged = 0
  for (const mp of await findMetaFiles()) {
    const { item, folder } = await readLoader(mp)
    if (item.generated) { await rm(folder, { recursive: true, force: true }); purged++ }
  }
  if (purged) console.log(`Purged ${purged} previously generated variant(s).`)

  const bases = []
  const byId = new Map()
  for (const mp of await findMetaFiles()) {
    const { item } = await readLoader(mp)
    byId.set(item.id, item)
    if (!item.generated) bases.push(item)
  }

  let written = 0
  const taken = new Set() // variant ids already produced (avoid collisions)

  // 1) explicit families
  for (const fam of config.families ?? []) {
    const base = byId.get(fam.baseId)
    if (!base) { console.warn(`  skip family: base "${fam.baseId}" not found`); continue }
    for (const v of fam.variants ?? []) {
      const id = `${fam.baseId}-${v.suffix}`
      if (taken.has(id)) continue
      taken.add(id); await writeVariant(base, v); written++
    }
  }

  // 2) auto themes (color)
  const themes = config.auto?.themes
  if (themes?.palettes?.length) {
    for (const base of bases) {
      if (!matchesFilter(base, themes.applyTo)) continue
      if (!usesVar(base, '--lc-color')) continue
      for (const p of themes.palettes) {
        const id = `${base.id}-${p.suffix}`
        if (taken.has(id)) continue
        taken.add(id)
        await writeVariant(base, {
          suffix: p.suffix, label: p.label,
          varsCss: `--lc-color:${p.color}`, variables: { '--lc-color': p.color },
          tagsAdd: ['theme', p.suffix],
        })
        written++
      }
    }
  }

  // 3) auto speeds
  const speeds = config.auto?.speeds
  if (speeds?.options?.length) {
    for (const base of bases) {
      if (!matchesFilter(base, speeds.applyTo)) continue
      if (!usesVar(base, '--lc-speed')) continue
      for (const s of speeds.options) {
        const id = `${base.id}-${s.suffix}`
        if (taken.has(id)) continue
        taken.add(id)
        await writeVariant(base, {
          suffix: s.suffix, label: s.label,
          varsCss: `--lc-speed:${s.speed}`, variables: { '--lc-speed': s.speed },
          tagsAdd: ['speed', s.suffix],
        })
        written++
      }
    }
  }

  console.log(`Generated ${written} variant loader(s) from ${bases.length} base loaders.`)
  console.log('Run "npm run build:registry" to refresh data/registry.json.')
}

main().catch((e) => { console.error(e); process.exit(1) })
