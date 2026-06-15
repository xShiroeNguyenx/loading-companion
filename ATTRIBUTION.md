# Attribution & Licenses

Every loader records its `source` and `license` in `meta.json` (and therefore in `data/registry.json`). This file is the human-readable summary of where loaders come from and under what terms they are redistributed.

## Sources

| Source | Loaders | License | Notes |
| --- | --- | --- | --- |
| **Loading Companion** (this project) | hand-authored originals + all parametric variants | MIT | Original implementations. Variants inherit the base loader's license. |
| **SpinKit** — Tobias Ahlin | `spinkit-*` (4) + theme variants | MIT | © 2015. Normalized to `l-spinkit-*` + `--lc-*`. [`LICENSES/SpinKit-MIT.txt`](LICENSES/SpinKit-MIT.txt). |
| **SVG Loaders** — Sam Herbert | `svgl-*` (5) + theme variants | MIT | © 2014. Faithful SMIL SVG reproductions. [`LICENSES/SVGLoaders-MIT.txt`](LICENSES/SVGLoaders-MIT.txt). |
| **Loaders.css** — Connor Atherton | `lcss-*` (5) + theme variants | MIT | © 2014. Adapted signature loaders (pacman, ball-grid-pulse, …). [`LICENSES/LoadersCss-MIT.txt`](LICENSES/LoadersCss-MIT.txt). |
| **Three Dots** — nzbin | `td-*` (3) + theme variants | MIT | © 2018. Adapted dot loaders. [`LICENSES/ThreeDots-MIT.txt`](LICENSES/ThreeDots-MIT.txt). |
| **Whirl** — Jhey Tompkins | `whirl-*` (5) + theme variants | MIT | © 2019. Adapted from verified Whirl loaders (battery, fidget, eclipse, box-spin, dominoes). [`LICENSES/Whirl-MIT.txt`](LICENSES/Whirl-MIT.txt). |

> **Fidelity note:** SVG Loaders are faithful SMIL reproductions. SpinKit, Loaders.css, Three Dots and
> Whirl entries are **adapted re-implementations** of each collection's signature loaders (a curated
> subset, normalized to this project's conventions — not byte-for-byte mirrors and not the full
> collections). Each is credited and ships with the upstream MIT notice in `LICENSES/`.

## Candidate imports — license status (verified 2026-06-13)

> 5 MIT collections imported so far (22 base loaders). The remaining originals are
> this project's own work (MIT); every catalog entry records its `source`/`license`/`copyright`.

### ✅ Confirmed MIT — safe to redistribute (commercial OK)

MIT condition: keep each project's **copyright line + the MIT license text** with the distribution
(e.g. a `LICENSES/<source>.txt` file) and record `source`/`license`/author in each `meta.json`.

- **SpinKit** — Tobias Ahlin — https://github.com/tobiasahlin/SpinKit — MIT ✔ — **IMPORTED** (4)
- **Loaders.css** — Connor Atherton — https://github.com/ConnorAtherton/loaders.css — MIT ✔ — **IMPORTED** (5)
- **Three Dots** — nzbin — https://github.com/nzbin/three-dots — MIT ✔ — **IMPORTED** (3)
- **SVG Loaders** — Sam Herbert — https://github.com/SamHerbert/SVG-Loaders — MIT ✔ — **IMPORTED** (5)
- **Whirl** — Jhey Tompkins — https://github.com/jh3y/whirl — MIT ✔ — **IMPORTED** (5)

### ❓ Listed as MIT — re-check the LICENSE file before importing

- **Epic Spinners** — epicmax — https://github.com/epicmaxco/epic-spinners — MIT (not re-verified this pass)
- **ldrs** — Griffin Johnston — https://github.com/GriffinJohnston/ldrs — MIT (not re-verified this pass)

### ⛔ css-loaders.com (Temani Afif, 600+) — NO license found → do NOT redistribute

Checked the site (https://css-loaders.com/), the author's DEV article, his GitHub profile
(https://github.com/Afif13) and `CSS-Collection` repo: **no LICENSE file and no usage terms** anywhere
(only Ko-fi/Patreon donation links). An earlier "CC0" claim was a **misattribution** — that comment
referred to a *different commenter's own* loader, not Temani's collection.

**No license = default "all rights reserved" = redistribution is NOT permitted.** The site being
"copy-paste" means the author lets you drop *a* loader into *your* project; bundling the whole
collection into a redistributable library is a different act and is not granted. Options:
1. **Re-implement the technique** (ideas/techniques are not copyrightable — only the specific code is). This is the approach used for the originals here.
2. **Ask the author** for explicit permission / a license.
Do **not** bulk-import the verbatim code.
