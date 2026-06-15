// Importer — Loaders.css (https://github.com/ConnorAtherton/loaders.css), MIT, © Connor Atherton.
// Faithful re-implementations of signature loaders, normalized to l-lcss-* + --lc-*.
// License kept at LICENSES/LoadersCss-MIT.txt; copyright recorded per meta.json.
import { runBatch } from '../seed-lib.mjs'

const base = {
  source: { name: 'Loaders.css', url: 'https://github.com/ConnorAtherton/loaders.css', author: 'Connor Atherton' },
  license: 'MIT', copyright: 'Copyright (c) 2014 Connor Atherton',
}

const LOADERS = [
  {
    ...base, id: 'lcss-ball-clip-rotate', name: 'Ball Clip Rotate', category: 'ring', tags: ['ring', 'clip', 'rotate'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '.75s' },
    html: `<div class="l-lcss-ball-clip-rotate"></div>`,
    css: `.l-lcss-ball-clip-rotate{width:var(--lc-size,40px);height:var(--lc-size,40px);border-radius:50%;border:2px solid var(--lc-color,#5b8def);border-bottom-color:transparent;animation:l-lcss-ball-clip-rotate-r var(--lc-speed,.75s) linear infinite}
@keyframes l-lcss-ball-clip-rotate-r{to{transform:rotate(1turn)}}`,
  },
  {
    ...base, id: 'lcss-ball-grid-pulse', name: 'Ball Grid Pulse', category: 'dots', tags: ['grid', 'balls', 'pulse'],
    variables: { '--lc-size': '12px', '--lc-color': '#5b8def' },
    html: `<div class="l-lcss-ball-grid-pulse"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-lcss-ball-grid-pulse{display:grid;grid-template-columns:repeat(3,var(--lc-size,12px));gap:6px}
.l-lcss-ball-grid-pulse span{width:var(--lc-size,12px);height:var(--lc-size,12px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-lcss-ball-grid-pulse-p 1.4s ease infinite}
.l-lcss-ball-grid-pulse span:nth-child(1){animation-delay:.05s}
.l-lcss-ball-grid-pulse span:nth-child(2){animation-delay:.3s}
.l-lcss-ball-grid-pulse span:nth-child(3){animation-delay:.6s}
.l-lcss-ball-grid-pulse span:nth-child(4){animation-delay:.4s}
.l-lcss-ball-grid-pulse span:nth-child(5){animation-delay:.1s}
.l-lcss-ball-grid-pulse span:nth-child(6){animation-delay:.5s}
.l-lcss-ball-grid-pulse span:nth-child(7){animation-delay:.2s}
.l-lcss-ball-grid-pulse span:nth-child(8){animation-delay:.55s}
.l-lcss-ball-grid-pulse span:nth-child(9){animation-delay:.35s}
@keyframes l-lcss-ball-grid-pulse-p{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(.5);opacity:.6}}`,
  },
  {
    ...base, id: 'lcss-line-scale-pulse-out', name: 'Line Scale Pulse Out', category: 'bars', tags: ['lines', 'scale', 'pulse-out'],
    variables: { '--lc-size': '4px', '--lc-height': '40px', '--lc-color': '#5b8def', '--lc-speed': '.9s' },
    html: `<div class="l-lcss-line-scale-pulse-out"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-lcss-line-scale-pulse-out{display:flex;gap:4px;align-items:center;height:var(--lc-height,40px)}
.l-lcss-line-scale-pulse-out span{width:var(--lc-size,4px);height:100%;border-radius:2px;background:var(--lc-color,#5b8def);animation:l-lcss-line-scale-pulse-out-s var(--lc-speed,.9s) cubic-bezier(.85,.25,.37,.85) infinite}
.l-lcss-line-scale-pulse-out span:nth-child(1){animation-delay:.3s}
.l-lcss-line-scale-pulse-out span:nth-child(2){animation-delay:.15s}
.l-lcss-line-scale-pulse-out span:nth-child(3){animation-delay:0s}
.l-lcss-line-scale-pulse-out span:nth-child(4){animation-delay:.15s}
.l-lcss-line-scale-pulse-out span:nth-child(5){animation-delay:.3s}
@keyframes l-lcss-line-scale-pulse-out-s{0%,80%,100%{transform:scaleY(.4)}40%{transform:scaleY(1)}}`,
  },
  {
    ...base, id: 'lcss-pacman', name: 'Pacman', category: 'spinner', tags: ['pacman', 'chomp', 'dots'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def' },
    html: `<div class="l-lcss-pacman"><span></span><i></i><i></i><i></i></div>`,
    css: `.l-lcss-pacman{position:relative;width:var(--lc-size,40px);height:var(--lc-size,40px)}
.l-lcss-pacman span{position:absolute;inset:0;background:var(--lc-color,#5b8def);border-radius:50%;clip-path:polygon(100% 25%,44% 50%,100% 75%,100% 100%,0 100%,0 0,100% 0);animation:l-lcss-pacman-c .5s ease-in-out infinite alternate}
.l-lcss-pacman i{position:absolute;top:calc(50% - 3px);right:-2px;width:6px;height:6px;border-radius:50%;background:var(--lc-color,#5b8def);animation:l-lcss-pacman-d 1.5s linear infinite}
.l-lcss-pacman i:nth-child(3){animation-delay:.5s}
.l-lcss-pacman i:nth-child(4){animation-delay:1s}
@keyframes l-lcss-pacman-c{0%{clip-path:polygon(100% 50%,44% 50%,100% 50%,100% 100%,0 100%,0 0,100% 0)}100%{clip-path:polygon(100% 25%,44% 50%,100% 75%,100% 100%,0 100%,0 0,100% 0)}}
@keyframes l-lcss-pacman-d{0%{transform:translateX(18px);opacity:1}100%{transform:translateX(-14px);opacity:0}}`,
  },
  {
    ...base, id: 'lcss-triangle-skew-spin', name: 'Triangle Skew Spin', category: 'flip', tags: ['triangle', 'skew', '3d'],
    variables: { '--lc-size': '24px', '--lc-color': '#5b8def', '--lc-speed': '3s' },
    html: `<div class="l-lcss-triangle-skew-spin"></div>`,
    css: `.l-lcss-triangle-skew-spin{width:0;height:0;border-left:calc(var(--lc-size,24px)/2) solid transparent;border-right:calc(var(--lc-size,24px)/2) solid transparent;border-bottom:var(--lc-size,24px) solid var(--lc-color,#5b8def);animation:l-lcss-triangle-skew-spin-s var(--lc-speed,3s) cubic-bezier(.09,.57,.49,.9) infinite}
@keyframes l-lcss-triangle-skew-spin-s{25%{transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{transform:perspective(100px) rotateX(0) rotateY(0)}}`,
  },
]

runBatch(LOADERS, 'import-loaders-css')
