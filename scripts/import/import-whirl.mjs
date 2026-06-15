// Importer — Whirl (https://github.com/jh3y/whirl), MIT, © Jhey Tompkins (@jh3y).
// Adapted re-implementations of loaders that exist in the Whirl collection
// (battery, fidget, eclipse, box-spin, dominoes — names verified against the repo),
// normalized to l-whirl-* + --lc-*. License kept at LICENSES/Whirl-MIT.txt.
import { runBatch } from '../seed-lib.mjs'

const base = {
  source: { name: 'Whirl', url: 'https://github.com/jh3y/whirl', author: 'Jhey Tompkins' },
  license: 'MIT', copyright: 'Copyright (c) 2019 Jhey Tompkins',
}

const LOADERS = [
  {
    ...base, id: 'whirl-battery', name: 'Battery', category: 'progress', tags: ['battery', 'charge', 'fill'],
    variables: { '--lc-color': '#5b8def', '--lc-speed': '2s' },
    html: `<div class="l-whirl-battery"><span></span></div>`,
    css: `.l-whirl-battery{position:relative;width:44px;height:22px;border:2px solid var(--lc-color,#5b8def);border-radius:4px}
.l-whirl-battery::after{content:'';position:absolute;right:-6px;top:6px;width:3px;height:8px;background:var(--lc-color,#5b8def);border-radius:0 2px 2px 0}
.l-whirl-battery span{position:absolute;left:2px;top:2px;bottom:2px;width:4px;background:var(--lc-color,#5b8def);border-radius:1px;animation:l-whirl-battery-c var(--lc-speed,2s) ease-in-out infinite}
@keyframes l-whirl-battery-c{0%{width:0}90%,100%{width:34px}}`,
  },
  {
    ...base, id: 'whirl-fidget', name: 'Fidget Spinner', category: 'orbit', tags: ['fidget', 'lobes', 'rotate'],
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-whirl-fidget"><span></span><span></span><span></span></div>`,
    css: `.l-whirl-fidget{position:relative;width:var(--lc-size,44px);height:var(--lc-size,44px);animation:l-whirl-fidget-r var(--lc-speed,1s) linear infinite}
.l-whirl-fidget span{position:absolute;width:32%;height:32%;border-radius:50%;background:var(--lc-color,#5b8def)}
.l-whirl-fidget span:nth-child(1){top:0;left:34%}
.l-whirl-fidget span:nth-child(2){bottom:4%;left:4%}
.l-whirl-fidget span:nth-child(3){bottom:4%;right:4%}
.l-whirl-fidget::after{content:'';position:absolute;top:34%;left:34%;width:32%;height:32%;border-radius:50%;background:var(--lc-color,#5b8def);opacity:.55}
@keyframes l-whirl-fidget-r{to{transform:rotate(1turn)}}`,
  },
  {
    ...base, id: 'whirl-eclipse', name: 'Eclipse', category: 'spinner', tags: ['eclipse', 'sweep', 'shadow'],
    variables: { '--lc-color': '#5b8def', '--lc-bg': '#f1f5f9', '--lc-speed': '1.6s' },
    html: `<div class="l-whirl-eclipse"><span></span></div>`,
    css: `.l-whirl-eclipse{position:relative;width:40px;height:40px;border-radius:50%;background:var(--lc-color,#5b8def);overflow:hidden}
.l-whirl-eclipse span{position:absolute;top:0;left:0;width:40px;height:40px;border-radius:50%;background:var(--lc-bg,#f1f5f9);animation:l-whirl-eclipse-e var(--lc-speed,1.6s) ease-in-out infinite}
@keyframes l-whirl-eclipse-e{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}`,
  },
  {
    ...base, id: 'whirl-box-spin', name: 'Box Spin', category: '3d', tags: ['box', 'rotate', 'perspective'],
    variables: { '--lc-size': '34px', '--lc-color': '#5b8def', '--lc-speed': '2s' },
    html: `<div class="l-whirl-box-spin"></div>`,
    css: `.l-whirl-box-spin{width:var(--lc-size,34px);height:var(--lc-size,34px);background:var(--lc-color,#5b8def);animation:l-whirl-box-spin-r var(--lc-speed,2s) cubic-bezier(.6,.01,.4,1) infinite}
@keyframes l-whirl-box-spin-r{0%{transform:perspective(160px) rotateX(0) rotateY(0)}50%{transform:perspective(160px) rotateX(180deg) rotateY(0)}100%{transform:perspective(160px) rotateX(180deg) rotateY(180deg)}}`,
  },
  {
    ...base, id: 'whirl-dominoes', name: 'Dominoes', category: 'bars', tags: ['dominoes', 'fall', 'rotate'],
    variables: { '--lc-color': '#5b8def', '--lc-speed': '1.6s' },
    html: `<div class="l-whirl-dominoes"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-whirl-dominoes{display:flex;gap:5px;align-items:flex-end;height:30px}
.l-whirl-dominoes span{width:5px;height:24px;border-radius:1px;background:var(--lc-color,#5b8def);transform-origin:bottom left;animation:l-whirl-dominoes-d var(--lc-speed,1.6s) ease-in-out infinite}
.l-whirl-dominoes span:nth-child(2){animation-delay:.1s}
.l-whirl-dominoes span:nth-child(3){animation-delay:.2s}
.l-whirl-dominoes span:nth-child(4){animation-delay:.3s}
.l-whirl-dominoes span:nth-child(5){animation-delay:.4s}
@keyframes l-whirl-dominoes-d{0%,40%{transform:rotate(0)}60%,90%{transform:rotate(-55deg)}100%{transform:rotate(0)}}`,
  },
]

runBatch(LOADERS, 'import-whirl')
