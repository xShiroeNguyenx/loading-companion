// Importer — Three Dots (https://github.com/nzbin/three-dots), MIT, © nzbin.
// Adapted re-implementations of signature dot loaders, normalized to l-td-* + --lc-*.
// License kept at LICENSES/ThreeDots-MIT.txt; copyright recorded per meta.json.
import { runBatch } from '../seed-lib.mjs'

const base = {
  source: { name: 'Three Dots', url: 'https://github.com/nzbin/three-dots', author: 'nzbin' },
  license: 'MIT', copyright: 'Copyright (c) 2018 nzbin', category: 'dots',
}

const LOADERS = [
  {
    ...base, id: 'td-dot-fire', name: 'Dot Fire', tags: ['fire', 'rise', 'fade'],
    variables: { '--lc-size': '10px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-td-dot-fire"><span></span><span></span><span></span></div>`,
    css: `.l-td-dot-fire{display:flex;gap:4px;align-items:flex-end;height:30px}
.l-td-dot-fire span{width:var(--lc-size,10px);height:var(--lc-size,10px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-td-dot-fire-f var(--lc-speed,1s) ease-in-out infinite}
.l-td-dot-fire span:nth-child(2){animation-delay:.15s}
.l-td-dot-fire span:nth-child(3){animation-delay:.3s}
@keyframes l-td-dot-fire-f{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-18px) scale(.3);opacity:0}}`,
  },
  {
    ...base, id: 'td-dot-floating', name: 'Dot Floating', tags: ['float', 'drift', 'fade'],
    variables: { '--lc-size': '9px', '--lc-color': '#5b8def', '--lc-speed': '2s' },
    html: `<div class="l-td-dot-floating"><span></span><span></span><span></span></div>`,
    css: `.l-td-dot-floating{position:relative;width:50px;height:20px}
.l-td-dot-floating span{position:absolute;bottom:0;left:0;width:var(--lc-size,9px);height:var(--lc-size,9px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-td-dot-floating-f var(--lc-speed,2s) ease-in infinite}
.l-td-dot-floating span:nth-child(2){animation-delay:.5s}
.l-td-dot-floating span:nth-child(3){animation-delay:1s}
@keyframes l-td-dot-floating-f{0%{transform:translate(0,0);opacity:0}30%{opacity:1}100%{transform:translate(42px,-12px);opacity:0}}`,
  },
  {
    ...base, id: 'td-dot-stretching', name: 'Dot Stretching', tags: ['stretch', 'scale-x', 'single'],
    variables: { '--lc-size': '14px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-td-dot-stretching"></div>`,
    css: `.l-td-dot-stretching{width:var(--lc-size,14px);height:var(--lc-size,14px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-td-dot-stretching-s var(--lc-speed,1.2s) ease infinite}
@keyframes l-td-dot-stretching-s{0%,100%{transform:scaleX(1)}50%{transform:scaleX(2.6);border-radius:40%}}`,
  },
]

runBatch(LOADERS, 'import-three-dots')
