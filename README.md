# ⏳ Loading Companion

**🔗 Live demo: https://xshiroenguyenx.github.io/loading-companion/**

A **library + demo gallery of loading animations**, designed to be **read by AI agents**.
**2443 loaders** across **17 categories** (197 distinct designs × 12 theme colors) — and growing.

It is two things at once:

- **A human demo gallery** — browse, search, filter, preview, and copy loaders (vanilla HTML/CSS/JS + Vite). Dark mode, "originals only" filter, one-click copy, random pick.
- **A machine-readable registry** — `data/registry.json` (+ an MCP server) so an AI agent can search loaders by category/tag and pull ready-to-paste code.

**Highlights**

- Pure-CSS first — most loaders are a copy-paste HTML+CSS snippet with no dependencies.
- Themeable via CSS variables (`--lc-size`, `--lc-color`, `--lc-speed`, …).
- Categories: spinner, dots, bars, ring, pulse, ripple, wave, bounce, flip, morph, orbit, 3d, skeleton, progress, svg, text, **combo** (incl. single-element `se-*`, brand/favicon splashes, and the `combo-mega` showcase).
- Honest counts — the build reports `original` vs `generated`; nothing is silently padded.
- Clean licensing — originals are MIT (this project); the 22 imported loaders keep their upstream MIT notice (`LICENSES/`, `ATTRIBUTION.md`).

## Quick start

```bash
npm install          # installs Vite + the MCP server deps (npm workspaces)
npm run build:registry   # scan loaders/ -> data/registry.json + registry.md
npm run dev          # open the gallery (predev rebuilds the registry)
```

Other scripts:

| Script | What it does |
| --- | --- |
| `npm run build:registry` | Scan `loaders/**` → regenerate `data/registry.json` + `data/registry.md` (canonical, committed) and a minified `public/registry.json` (fetched by the gallery). Prints a category breakdown (original vs generated) and warns on duplicate ids/CSS. |
| `npm run validate` | Validate every `meta.json` against the schema + check code files exist. |
| `npm run generate:variants` | Generate parametric variants from `scripts/variants.config.json`. |
| `node scripts/seed-loaders.mjs` | (Re)create the hand-authored seed loaders (skips existing). |
| `npm run dev` / `npm run build` | Vite dev server / static build to `dist/`. |
| `npm run mcp` | Run the MCP server over stdio. |

## How it is organized

**Single source of truth = one folder per loader** under `loaders/<category>/<id>/`:

```
loaders/spinner/spinner-classic/
  meta.json      # metadata only (see schema/loader.schema.json)
  loader.html    # the markup
  loader.css     # the styles (uses --lc-* custom properties)
  loader.js      # optional, for css+js loaders
```

`data/registry.json` and `data/registry.md` are **always generated** from these folders — never edit them by hand.

### Convention (required)

Every CSS class and `@keyframes` name in a loader is prefixed with `l-<id>` (e.g. `.l-spinner-classic`, `@keyframes l-spinner-classic-spin`). This guarantees no collisions when hundreds of loaders share one page, and lets the variant generator re-scope a loader with a single string replace.

Loaders expose theming via CSS custom properties: `--lc-size`, `--lc-color`, `--lc-speed`, etc.

## Adding a loader

1. Create `loaders/<category>/<your-id>/` with `meta.json` + `loader.html` + `loader.css` (and `loader.js` if needed). Prefix classes/keyframes with `l-<your-id>`.
2. `npm run validate` then `npm run build:registry`.

Categories: `spinner, dots, bars, ring, pulse, ripple, wave, bounce, flip, morph, orbit, 3d, skeleton, progress, svg, text, combo`.

## For AI agents

The whole catalog lives in **`data/registry.json`**:

Current catalog: **2443 entries = 197 distinct designs × 12 theme colors** (plus a couple hand-tuned variants). Of the 197 designs, **22 are imported from 5 MIT collections** (SpinKit, SVG Loaders, Loaders.css, Three Dots, Whirl — all attributed, see `ATTRIBUTION.md`/`LICENSES/`) and the rest are original — including 25 single-element loaders (`se-*`) and 43 **combo** loaders (`combo-*`): two-loader pairs (spinner+text, ring+percent), multi-loader panels (loading screen, app boot, installer, terminal), 10 brand/favicon splashes (a logo slot centered in a spinner with a label — swap `.logo` for your own `<img>`), and `combo-mega`, a showcase panel combining nine loader types at once. The build reports `original` vs `generated` so the headline count stays honest — use the gallery's "Originals only" filter or `search_loaders` to browse just the distinct designs.

```jsonc
{
  "count": 2443,           // illustrative — run build:registry for live numbers
  "categories": { "spinner": "...", "dots": "...", "...": "..." },
  "tags": [ ... ],
  "items": [
    {
      "id": "spinner-classic", "name": "Classic Ring", "category": "spinner",
      "tags": ["ring","rotate","minimal"], "tech": "css",
      "variables": { "--lc-size": "48px", "--lc-color": "#5b8def", "--lc-speed": "1s" },
      "html": "<div class=\"l-spinner-classic\"></div>",
      "css": ".l-spinner-classic{ ... }", "js": null,
      "source": { "name": "Loading Companion" }, "license": "MIT",
      "generated": false, "baseId": null
    }
  ]
}
```

`data/registry.md` is the same catalog as a readable Markdown document with code blocks.

### MCP server

For agents that prefer tool calls over reading a big file, the MCP server exposes:

- `list_categories()` — categories + counts
- `search_loaders({ query?, category?, tags?, tech?, limit? })` — summaries
- `get_loader({ id })` — full record incl. code
- `get_loader_code({ id, format })` — `combined` snippet or `parts`

Add it to Claude Code:

```bash
claude mcp add loading-companion -- node /abs/path/to/loading-companion/mcp/server.mjs
```

(Run `npm run build:registry` first so the registry exists.)

## Performance

The gallery renders many animated elements at once. It stays smooth via:

- `content-visibility: auto` + `contain-intrinsic-size` on every card (native CSS virtualization),
- an `IntersectionObserver` that pauses (`animation-play-state: paused`) animations for off-screen cards,
- chunked rendering so the main thread never blocks,
- fetching `registry.json` at runtime (not bundling it), so the JS stays ~8 kB even at 1000+ loaders.

## Reaching 1000 (hybrid strategy)

1. Hand-authored originals (the seed set, MIT).
2. Imported open-source MIT collections — normalized into `loaders/`, fully attributed in `ATTRIBUTION.md`.
3. Parametric variants generated from base loaders (`generated: true`, inherit base license).

The build always reports **original vs generated** per category so the count stays honest.

## Deploy

The gallery is a static site (Vite, `base: './'`), so it works on any static host:

```bash
npm run build          # outputs to dist/ (prebuild regenerates the registry)
npx serve dist         # or serve dist/ anywhere
```

### GitHub Pages (CI/CD — automatic)

A workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and
deploys the gallery on every push to `main`. One-time setup:

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main` (or run the workflow manually from the Actions tab).

The site publishes to `https://<user>.github.io/<repo>/`. Because `base` is relative, it
works from that project sub-path with no config changes.

## License

Project code: MIT. Imported/derived loaders keep their upstream license — see `ATTRIBUTION.md`.
