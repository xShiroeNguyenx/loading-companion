// Filtering logic for the gallery. Pure functions, no DOM.

/**
 * Filter loader items by free text, category, and tech.
 * @param {Array} items
 * @param {{query?:string, category?:string, tech?:string}} f
 */
export function filterItems(items, { query = '', category = 'all', tech = 'all', source = 'all' } = {}) {
  const q = query.trim().toLowerCase()
  return items.filter((it) => {
    if (category !== 'all' && it.category !== category) return false
    if (tech !== 'all' && it.tech !== tech) return false
    if (source === 'original' && it.generated) return false
    if (source === 'variant' && !it.generated) return false
    if (!q) return true
    if (it.id.includes(q) || it.name.toLowerCase().includes(q)) return true
    if (it.category.includes(q)) return true
    return it.tags.some((t) => t.includes(q))
  })
}

export function debounce(fn, ms = 120) {
  let t
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms) }
}
