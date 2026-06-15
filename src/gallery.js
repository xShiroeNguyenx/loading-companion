// Renders loader cards and manages performance for large lists.
import { openCode, combinedSnippet, copyToClipboard } from './codeview.js'

// One IntersectionObserver toggles `is-visible` so off-screen cards pause their
// animations; combined with `content-visibility:auto` in CSS this keeps the
// page smooth even with hundreds/thousands of animated cards.
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    const card = e.target
    if (e.isIntersecting) {
      card.classList.add('is-visible')
      runJsOnce(card)
    } else {
      card.classList.remove('is-visible')
    }
  }
}, { rootMargin: '300px 0px' })

function runJsOnce(card) {
  if (card._lcRan || !card._lcItem?.js) return
  const inner = card.querySelector('.card-preview-inner')
  const root = inner?.firstElementChild || inner
  try { new Function('root', card._lcItem.js)(root); card._lcRan = true } catch { /* noop */ }
}

/** Inject every loader's CSS once into a single <style>. Classes are unique per id. */
export function injectStyles(items) {
  let style = document.getElementById('lc-loader-styles')
  if (!style) {
    style = document.createElement('style')
    style.id = 'lc-loader-styles'
    document.head.appendChild(style)
  }
  style.textContent = items.map((it) => it.css || '').join('\n')
}

function makeCard(item) {
  const card = document.createElement('div')
  card.className = 'card'
  card._lcItem = item

  const preview = document.createElement('div')
  preview.className = 'card-preview'
  const inner = document.createElement('div')
  inner.className = 'card-preview-inner'
  inner.innerHTML = item.html
  preview.appendChild(inner)

  const meta = document.createElement('div')
  meta.className = 'card-meta'

  const name = document.createElement('div')
  name.className = 'card-name'
  name.textContent = item.name

  const tags = document.createElement('div')
  tags.className = 'card-tags'
  const cat = document.createElement('span'); cat.className = 'badge cat'; cat.textContent = item.category
  tags.appendChild(cat)
  const tech = document.createElement('span'); tech.className = 'badge'; tech.textContent = item.tech
  tags.appendChild(tech)
  if (item.generated) { const g = document.createElement('span'); g.className = 'badge gen'; g.textContent = 'variant'; tags.appendChild(g) }

  const actions = document.createElement('div')
  actions.className = 'card-actions'
  const codeBtn = document.createElement('button'); codeBtn.className = 'btn'; codeBtn.textContent = 'View code'
  codeBtn.addEventListener('click', () => openCode(item))
  const copyBtn = document.createElement('button'); copyBtn.className = 'btn'; copyBtn.textContent = 'Copy'
  copyBtn.addEventListener('click', async () => {
    await copyToClipboard(combinedSnippet(item))
    copyBtn.textContent = 'Copied!'; copyBtn.classList.add('copied')
    setTimeout(() => { copyBtn.textContent = 'Copy'; copyBtn.classList.remove('copied') }, 1200)
  })
  actions.append(codeBtn, copyBtn)

  meta.append(name, tags, actions)
  card.append(preview, meta)
  io.observe(card)
  return card
}

/**
 * Render items into the grid, in chunks so the main thread stays responsive
 * even for a large registry.
 */
export function renderGrid(gridEl, items) {
  io.disconnect?.() // (kept simple) re-observe fresh nodes below
  gridEl.innerHTML = ''
  if (!items.length) {
    gridEl.innerHTML = '<div class="empty">No loaders match your filters.</div>'
    return
  }
  const CHUNK = 60
  let i = 0
  const pump = () => {
    const frag = document.createDocumentFragment()
    for (let n = 0; n < CHUNK && i < items.length; n++, i++) frag.appendChild(makeCard(items[i]))
    gridEl.appendChild(frag)
    if (i < items.length) requestAnimationFrame(pump)
  }
  pump()
}
