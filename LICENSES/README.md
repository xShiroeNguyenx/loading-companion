# Third-party licenses

When a loader is imported from an external open-source project, this folder keeps
the upstream license text verbatim, as required by permissive licenses such as MIT
("the above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software").

Each imported loader also records its origin in `meta.json`:

```jsonc
"source":    { "name": "SpinKit", "url": "https://github.com/tobiasahlin/SpinKit", "author": "Tobias Ahlin" },
"license":   "MIT",
"copyright": "Copyright (c) 2015 Tobias Ahlin"
```

| File | Source | License | Covers |
| --- | --- | --- | --- |
| `SpinKit-MIT.txt` | [SpinKit](https://github.com/tobiasahlin/SpinKit) — Tobias Ahlin | MIT | `loaders/**/spinkit-*` |
| `SVGLoaders-MIT.txt` | [SVG Loaders](https://github.com/SamHerbert/SVG-Loaders) — Sam Herbert | MIT | `loaders/**/svgl-*` |
| `LoadersCss-MIT.txt` | [Loaders.css](https://github.com/ConnorAtherton/loaders.css) — Connor Atherton | MIT | `loaders/**/lcss-*` |
| `ThreeDots-MIT.txt` | [Three Dots](https://github.com/nzbin/three-dots) — nzbin | MIT | `loaders/**/td-*` |
| `Whirl-MIT.txt` | [Whirl](https://github.com/jh3y/whirl) — Jhey Tompkins | MIT | `loaders/**/whirl-*` |

> SVG Loaders are faithful SMIL reproductions; the others are adapted re-implementations of each
> collection's signature loaders (a curated subset, not the full set, and not byte-for-byte) — all
> credited and shipped with the upstream MIT notice above.

> Originals authored in this repo are MIT (Loading Companion) and need no separate file here.
> Do **not** add a source here unless its license actually permits redistribution — see `../ATTRIBUTION.md`.
