import './styles/app.css'
import { injectStyles, renderGrid } from './gallery.js'
import { openCode } from './codeview.js'
import { filterItems, debounce } from './search.js'

const grid = document.getElementById('grid')
const searchInput = document.getElementById('search')
const techSelect = document.getElementById('tech')
const sourceSelect = document.getElementById('source')
const randomBtn = document.getElementById('random')
const chipsEl = document.getElementById('chips')
const countEl = document.getElementById('count')
const themeBtn = document.getElementById('theme')

// Theme toggle works before data loads.
themeBtn.addEventListener('click', () => {
  const root = document.documentElement
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark'
  root.dataset.theme = next
  themeBtn.textContent = next === 'dark' ? '☀️ Light' : '🌙 Dark'
})

const state = { query: '', category: 'all', tech: 'all', source: 'all' }
let registry = null
let items = []
let current = []

async function init() {
  grid.innerHTML = '<div class="empty">Loading the catalog…</div>'
  // Fetched at runtime (not bundled) so the JS stays small even at 1000+ loaders.
  registry = await (await fetch(`${import.meta.env.BASE_URL}registry.json`)).json()
  items = registry.items
  current = items
  injectStyles(items)

  // category chips
  for (const cat of ['all', ...Object.keys(registry.categories).sort()]) {
    const chip = document.createElement('button')
    chip.className = 'chip' + (cat === 'all' ? ' active' : '')
    chip.textContent = cat === 'all' ? `All (${registry.count})` : `${cat} (${registry.categories[cat]})`
    chip.addEventListener('click', () => {
      state.category = cat
      chipsEl.querySelectorAll('.chip').forEach((c) => c.classList.toggle('active', c === chip))
      apply()
    })
    chipsEl.appendChild(chip)
  }

  // tech select
  for (const t of ['all', ...new Set(items.map((i) => i.tech))]) {
    const opt = document.createElement('option')
    opt.value = t; opt.textContent = t === 'all' ? 'All tech' : t
    techSelect.appendChild(opt)
  }

  // wiring
  searchInput.addEventListener('input', debounce((e) => { state.query = e.target.value; apply() }))
  techSelect.addEventListener('change', (e) => { state.tech = e.target.value; apply() })
  sourceSelect.addEventListener('change', (e) => { state.source = e.target.value; apply() })
  randomBtn.addEventListener('click', () => {
    const pool = current.length ? current : items
    openCode(pool[Math.floor(Math.random() * pool.length)])
  })

  apply()
}

function apply() {
  const filtered = filterItems(items, state)
  current = filtered
  countEl.textContent = `${filtered.length} / ${registry.count} loaders`
  renderGrid(grid, filtered)
}

init().catch((e) => {
  grid.innerHTML = `<div class="empty">Failed to load registry.json — run <code>npm run build:registry</code>.<br>${e.message}</div>`
})
