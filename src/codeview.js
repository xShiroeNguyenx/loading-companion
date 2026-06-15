// Code modal: shows a loader's live preview + HTML/CSS/JS with copy buttons.
let modalEl = null

function ensureModal() {
  if (modalEl) return modalEl
  modalEl = document.createElement('div')
  modalEl.className = 'modal'
  modalEl.innerHTML = `
    <div class="modal-backdrop" data-close></div>
    <div class="modal-body" role="dialog" aria-modal="true">
      <div class="modal-head">
        <h3></h3>
        <button class="close" data-close aria-label="Close">×</button>
      </div>
      <div class="modal-preview"><div class="modal-preview-inner"></div></div>
      <div class="modal-code"></div>
      <div class="modal-info"></div>
    </div>`
  document.body.appendChild(modalEl)
  modalEl.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-close')) closeModal()
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal()
  })
  return modalEl
}

function closeModal() {
  if (modalEl) modalEl.classList.remove('open')
}

export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = text; document.body.appendChild(ta); ta.select()
    document.execCommand('copy'); ta.remove()
  }
}

/** A single self-contained, paste-ready snippet for a loader. */
export function combinedSnippet(item) {
  // Keep attribution with the code when it comes from an upstream source (MIT
  // requires the copyright notice to travel with redistributed code).
  let credit = ''
  if (item.copyright || (item.source && item.source.name && item.source.name !== 'Loading Companion')) {
    const src = item.source?.name ? ` — ${item.source.name}` : ''
    credit = `<!-- ${item.name}${src} · ${item.license}${item.copyright ? ` · ${item.copyright}` : ''} -->\n`
  }
  let snippet = `${credit}<style>\n${item.css}\n</style>\n${item.html}`
  if (item.js) {
    snippet += `\n<script>\n(function(){\n  var root = document.currentScript.previousElementSibling;\n  ${item.js}\n})();\n<\/script>`
  }
  return snippet
}

async function copy(text, btn) {
  await copyToClipboard(text)
  btn.textContent = 'Copied!'; btn.classList.add('copied')
  setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied') }, 1200)
}

function codeBlock(label, lang, code) {
  if (!code) return ''
  const wrap = document.createElement('div')
  wrap.className = 'code-block'
  const h = document.createElement('h4'); h.textContent = label
  const btn = document.createElement('button'); btn.className = 'code-copy'; btn.textContent = 'Copy'
  const pre = document.createElement('pre'); const codeEl = document.createElement('code')
  codeEl.textContent = code; pre.appendChild(codeEl)
  btn.addEventListener('click', () => copy(code, btn))
  wrap.append(h, btn, pre)
  return wrap
}

export function openCode(item) {
  const m = ensureModal()
  m.querySelector('h3').textContent = `${item.name}  ·  ${item.id}`

  // Live preview (re-uses the globally injected loader styles).
  const inner = m.querySelector('.modal-preview-inner')
  inner.innerHTML = item.html
  if (item.js) {
    try { new Function('root', item.js)(inner.firstElementChild || inner) } catch (e) { /* noop */ }
  }

  const codeWrap = m.querySelector('.modal-code')
  codeWrap.innerHTML = ''
  const html = codeBlock('HTML', 'html', item.html)
  const css = codeBlock('CSS', 'css', item.css)
  const jsLabel = item.tech === 'css+js' ? 'JS (run with root = loader element)' : 'JS'
  const js = codeBlock(jsLabel, 'js', item.js)
  for (const b of [html, css, js]) if (b) codeWrap.appendChild(b)

  const info = m.querySelector('.modal-info')
  const deps = item.dependencies?.length ? ` · deps: ${item.dependencies.join(', ')}` : ''
  const src = item.source?.name ? ` · source: ${item.source.name}` : ''
  info.innerHTML = `tech: <code>${item.tech}</code> · license: <code>${item.license}</code>` +
    (item.generated ? ` · generated from <code>${item.baseId}</code>` : '') + src + deps

  m.classList.add('open')
}
