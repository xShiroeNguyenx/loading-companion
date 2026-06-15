// Seed batch 07 — original loaders: skeleton, progress, svg, text.
import { runBatch } from '../seed-lib.mjs'

const G = 'linear-gradient(90deg,var(--lc-base,#e2e8f0) 25%,var(--lc-highlight,#f1f5f9) 37%,var(--lc-base,#e2e8f0) 63%)'

const LOADERS = [
  // ---------- skeleton ----------
  {
    id: 'skeleton-image', name: 'Image Block', category: 'skeleton', tags: ['image', 'shimmer', 'placeholder'],
    variables: { '--lc-size': '200px', '--lc-base': '#e2e8f0', '--lc-highlight': '#f1f5f9', '--lc-speed': '1.4s' },
    html: `<div class="l-skeleton-image"></div>`,
    css: `.l-skeleton-image{width:var(--lc-size,200px);height:130px;border-radius:10px;background:${G};background-size:400% 100%;animation:l-skeleton-image-sh var(--lc-speed,1.4s) ease infinite}
@keyframes l-skeleton-image-sh{0%{background-position:100% 0}100%{background-position:-100% 0}}`,
  },
  {
    id: 'skeleton-button', name: 'Button + Label', category: 'skeleton', tags: ['button', 'shimmer', 'placeholder'],
    variables: { '--lc-size': '200px', '--lc-base': '#e2e8f0', '--lc-highlight': '#f1f5f9', '--lc-speed': '1.4s' },
    html: `<div class="l-skeleton-button"><div class="l-skeleton-button-line"></div><div class="l-skeleton-button-btn"></div></div>`,
    css: `.l-skeleton-button{width:var(--lc-size,200px)}
.l-skeleton-button-line{height:10px;width:70%;border-radius:5px;margin-bottom:14px;background:${G};background-size:400% 100%;animation:l-skeleton-button-sh var(--lc-speed,1.4s) ease infinite}
.l-skeleton-button-btn{height:34px;width:120px;border-radius:8px;background:${G};background-size:400% 100%;animation:l-skeleton-button-sh var(--lc-speed,1.4s) ease infinite}
@keyframes l-skeleton-button-sh{0%{background-position:100% 0}100%{background-position:-100% 0}}`,
  },
  {
    id: 'skeleton-grid', name: 'Thumbnail Grid', category: 'skeleton', tags: ['grid', 'shimmer', 'placeholder'],
    variables: { '--lc-size': '200px', '--lc-base': '#e2e8f0', '--lc-highlight': '#f1f5f9', '--lc-speed': '1.4s' },
    html: `<div class="l-skeleton-grid"><div></div><div></div><div></div><div></div></div>`,
    css: `.l-skeleton-grid{width:var(--lc-size,200px);display:grid;grid-template-columns:1fr 1fr;gap:10px}
.l-skeleton-grid div{height:70px;border-radius:8px;background:${G};background-size:400% 100%;animation:l-skeleton-grid-sh var(--lc-speed,1.4s) ease infinite}
@keyframes l-skeleton-grid-sh{0%{background-position:100% 0}100%{background-position:-100% 0}}`,
  },
  {
    id: 'skeleton-comment', name: 'Comment', category: 'skeleton', tags: ['comment', 'shimmer', 'placeholder'],
    variables: { '--lc-size': '240px', '--lc-base': '#e2e8f0', '--lc-highlight': '#f1f5f9', '--lc-speed': '1.4s' },
    html: `<div class="l-skeleton-comment"><div class="l-skeleton-comment-av"></div><div class="l-skeleton-comment-body"><div></div><div></div><div></div></div></div>`,
    css: `.l-skeleton-comment{width:var(--lc-size,240px);display:flex;gap:12px}
.l-skeleton-comment-av{flex:0 0 auto;width:40px;height:40px;border-radius:50%;background:${G};background-size:400% 100%;animation:l-skeleton-comment-sh var(--lc-speed,1.4s) ease infinite}
.l-skeleton-comment-body{flex:1;display:flex;flex-direction:column;gap:8px;padding-top:4px}
.l-skeleton-comment-body div{height:9px;border-radius:5px;background:${G};background-size:400% 100%;animation:l-skeleton-comment-sh var(--lc-speed,1.4s) ease infinite}
.l-skeleton-comment-body div:last-child{width:50%}
@keyframes l-skeleton-comment-sh{0%{background-position:100% 0}100%{background-position:-100% 0}}`,
  },

  // ---------- progress ----------
  {
    id: 'progress-bar-fill-loop', name: 'Filling Bar', category: 'progress', tags: ['bar', 'fill', 'loop'],
    variables: { '--lc-size': '220px', '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-speed': '2s' },
    html: `<div class="l-progress-bar-fill-loop"><span></span></div>`,
    css: `.l-progress-bar-fill-loop{width:var(--lc-size,220px);height:8px;border-radius:4px;background:var(--lc-track,#e2e8f0);overflow:hidden}
.l-progress-bar-fill-loop span{display:block;height:100%;width:0;border-radius:4px;background:var(--lc-color,#5b8def);animation:l-progress-bar-fill-loop-f var(--lc-speed,2s) ease-in-out infinite}
@keyframes l-progress-bar-fill-loop-f{0%{width:0}70%,100%{width:100%}}`,
  },
  {
    id: 'progress-blocks', name: 'Block Steps', category: 'progress', tags: ['blocks', 'segment', 'fill'],
    variables: { '--lc-size': '18px', '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-speed': '1.8s' },
    html: `<div class="l-progress-blocks"><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-progress-blocks{display:flex;gap:4px}
.l-progress-blocks span{width:var(--lc-size,18px);height:10px;border-radius:2px;background:var(--lc-track,#e2e8f0);animation:l-progress-blocks-f var(--lc-speed,1.8s) infinite}
.l-progress-blocks span:nth-child(2){animation-delay:.12s}
.l-progress-blocks span:nth-child(3){animation-delay:.24s}
.l-progress-blocks span:nth-child(4){animation-delay:.36s}
.l-progress-blocks span:nth-child(5){animation-delay:.48s}
.l-progress-blocks span:nth-child(6){animation-delay:.6s}
@keyframes l-progress-blocks-f{0%,100%{background:var(--lc-track,#e2e8f0)}40%{background:var(--lc-color,#5b8def)}}`,
  },
  {
    id: 'progress-bar-double', name: 'Material Bar', category: 'progress', tags: ['bar', 'indeterminate', 'material'],
    variables: { '--lc-size': '220px', '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-speed': '2.1s' },
    html: `<div class="l-progress-bar-double"><span></span><span></span></div>`,
    css: `.l-progress-bar-double{position:relative;width:var(--lc-size,220px);height:5px;border-radius:3px;background:var(--lc-track,#e2e8f0);overflow:hidden}
.l-progress-bar-double span{position:absolute;height:100%;border-radius:3px;background:var(--lc-color,#5b8def)}
.l-progress-bar-double span:nth-child(1){animation:l-progress-bar-double-a var(--lc-speed,2.1s) cubic-bezier(.65,.81,.74,.41) infinite}
.l-progress-bar-double span:nth-child(2){animation:l-progress-bar-double-b var(--lc-speed,2.1s) cubic-bezier(.16,.84,.44,1) infinite}
@keyframes l-progress-bar-double-a{0%{left:-35%;width:35%}60%,100%{left:100%;width:90%}}
@keyframes l-progress-bar-double-b{0%{left:-90%;width:90%}60%,100%{left:107%;width:10%}}`,
  },

  // ---------- svg ----------
  {
    id: 'svg-square-draw', name: 'SVG Square Trace', category: 'svg', tech: 'svg', tags: ['square', 'dash', 'trace'],
    variables: { '--lc-size': '46px', '--lc-color': '#5b8def', '--lc-speed': '1.6s' },
    html: `<svg class="l-svg-square-draw" viewBox="0 0 50 50"><rect x="5" y="5" width="40" height="40" rx="6" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="40 130" stroke-linecap="round"/></svg>`,
    css: `.l-svg-square-draw{width:var(--lc-size,46px);height:var(--lc-size,46px);color:var(--lc-color,#5b8def)}
.l-svg-square-draw rect{animation:l-svg-square-draw-d var(--lc-speed,1.6s) linear infinite}
@keyframes l-svg-square-draw-d{to{stroke-dashoffset:-170}}`,
  },
  {
    id: 'svg-bars-wave', name: 'SVG Wave Bars', category: 'svg', tech: 'svg', tags: ['bars', 'wave', 'translate'],
    variables: { '--lc-size': '60px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<svg class="l-svg-bars-wave" viewBox="0 0 60 30"><rect x="2" y="6" width="6" height="18" rx="3"/><rect x="14" y="6" width="6" height="18" rx="3"/><rect x="26" y="6" width="6" height="18" rx="3"/><rect x="38" y="6" width="6" height="18" rx="3"/><rect x="50" y="6" width="6" height="18" rx="3"/></svg>`,
    css: `.l-svg-bars-wave{width:var(--lc-size,60px);height:calc(var(--lc-size,60px)/2);fill:var(--lc-color,#5b8def)}
.l-svg-bars-wave rect{animation:l-svg-bars-wave-w var(--lc-speed,1s) ease-in-out infinite}
.l-svg-bars-wave rect:nth-child(2){animation-delay:.1s}
.l-svg-bars-wave rect:nth-child(3){animation-delay:.2s}
.l-svg-bars-wave rect:nth-child(4){animation-delay:.3s}
.l-svg-bars-wave rect:nth-child(5){animation-delay:.4s}
@keyframes l-svg-bars-wave-w{0%,100%{transform:translateY(-4px)}50%{transform:translateY(4px)}}`,
  },

  // ---------- text ----------
  {
    id: 'text-blink', name: 'Blinking Text', category: 'text', tags: ['text', 'blink', 'opacity'],
    variables: { '--lc-size': '18px', '--lc-color': '#334155', '--lc-speed': '1s' },
    html: `<div class="l-text-blink">Loading…</div>`,
    css: `.l-text-blink{font:600 var(--lc-size,18px)/1 system-ui,sans-serif;color:var(--lc-color,#334155);animation:l-text-blink-b var(--lc-speed,1s) step-start infinite}
@keyframes l-text-blink-b{0%,49%{opacity:1}50%,100%{opacity:.25}}`,
  },
  {
    id: 'text-typewriter', name: 'Typewriter', category: 'text', tags: ['text', 'typewriter', 'steps'],
    variables: { '--lc-size': '18px', '--lc-color': '#334155', '--lc-speed': '3s' },
    html: `<div class="l-text-typewriter">Loading</div>`,
    css: `.l-text-typewriter{font:600 var(--lc-size,18px)/1.2 ui-monospace,monospace;color:var(--lc-color,#334155);white-space:nowrap;overflow:hidden;border-right:2px solid var(--lc-color,#334155);width:7ch;animation:l-text-typewriter-t var(--lc-speed,3s) steps(7) infinite,l-text-typewriter-c .7s step-end infinite}
@keyframes l-text-typewriter-t{0%,100%{width:0}45%,90%{width:7ch}}
@keyframes l-text-typewriter-c{0%,100%{border-color:transparent}50%{border-color:var(--lc-color,#334155)}}`,
  },
]

runBatch(LOADERS, 'batch-07')
