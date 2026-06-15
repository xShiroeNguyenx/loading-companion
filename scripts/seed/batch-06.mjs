// Seed batch 06 — original loaders: pulse, flip, bounce, morph, ripple, 3d.
import { runBatch } from '../seed-lib.mjs'

const LOADERS = [
  // ---------- pulse ----------
  {
    id: 'pulse-heart', name: 'Heartbeat', category: 'pulse', tags: ['heart', 'beat', 'scale'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-pulse-heart"></div>`,
    css: `.l-pulse-heart{width:var(--lc-size,40px);height:var(--lc-size,40px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-pulse-heart-b var(--lc-speed,1.2s) ease-in-out infinite}
@keyframes l-pulse-heart-b{0%,100%{transform:scale(.85)}15%{transform:scale(1.05)}30%{transform:scale(.9)}45%{transform:scale(1)}}`,
  },
  {
    id: 'pulse-rings-static', name: 'Nested Rings', category: 'pulse', tags: ['rings', 'nested', 'fade'],
    variables: { '--lc-size': '46px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-pulse-rings-static"><span></span><span></span><span></span></div>`,
    css: `.l-pulse-rings-static{position:relative;width:var(--lc-size,46px);height:var(--lc-size,46px)}
.l-pulse-rings-static span{position:absolute;border:2px solid var(--lc-color,#5b8def);border-radius:50%;animation:l-pulse-rings-static-p var(--lc-speed,1.4s) ease-in-out infinite}
.l-pulse-rings-static span:nth-child(1){inset:0}
.l-pulse-rings-static span:nth-child(2){inset:7px;animation-delay:.2s}
.l-pulse-rings-static span:nth-child(3){inset:14px;animation-delay:.4s}
@keyframes l-pulse-rings-static-p{0%,100%{opacity:.2}50%{opacity:1}}`,
  },

  // ---------- flip ----------
  {
    id: 'flip-card', name: 'Flipping Card', category: 'flip', tags: ['card', 'rotate-y', '3d'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-flip-card"></div>`,
    css: `.l-flip-card{width:var(--lc-size,40px);height:var(--lc-size,40px);background:var(--lc-color,#5b8def);border-radius:6px;animation:l-flip-card-f var(--lc-speed,1.4s) linear infinite}
@keyframes l-flip-card-f{0%{transform:perspective(220px) rotateY(0)}100%{transform:perspective(220px) rotateY(360deg)}}`,
  },
  {
    id: 'flip-alternate', name: 'Alternating Tiles', category: 'flip', tags: ['tiles', 'rotate-y', 'two'],
    variables: { '--lc-size': '24px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-flip-alternate"><span></span><span></span></div>`,
    css: `.l-flip-alternate{display:flex;gap:8px;perspective:220px}
.l-flip-alternate span{width:var(--lc-size,24px);height:var(--lc-size,24px);background:var(--lc-color,#5b8def);border-radius:4px;animation:l-flip-alternate-f var(--lc-speed,1.4s) ease-in-out infinite}
.l-flip-alternate span:last-child{animation-delay:calc(var(--lc-speed,1.4s)/-2)}
@keyframes l-flip-alternate-f{0%,100%{transform:rotateY(0)}50%{transform:rotateY(180deg)}}`,
  },

  // ---------- bounce ----------
  {
    id: 'bounce-three', name: 'Three Balls', category: 'bounce', tags: ['balls', 'squash', 'three'],
    variables: { '--lc-size': '16px', '--lc-color': '#5b8def', '--lc-speed': '.7s' },
    html: `<div class="l-bounce-three"><span></span><span></span><span></span></div>`,
    css: `.l-bounce-three{display:flex;gap:calc(var(--lc-size,16px)/1.4);align-items:flex-end;height:calc(var(--lc-size,16px)*2.6)}
.l-bounce-three span{width:var(--lc-size,16px);height:var(--lc-size,16px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-bounce-three-b var(--lc-speed,.7s) cubic-bezier(.5,.05,.5,.95) infinite}
.l-bounce-three span:nth-child(2){animation-delay:.12s}
.l-bounce-three span:nth-child(3){animation-delay:.24s}
@keyframes l-bounce-three-b{0%,100%{transform:translateY(calc(var(--lc-size,16px)*-1.4)) scaleY(1)}55%{transform:translateY(0) scaleY(.9)}}`,
  },

  // ---------- morph ----------
  {
    id: 'morph-wobble', name: 'Wobbling Blob', category: 'morph', tags: ['wobble', 'border-radius', 'organic'],
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def', '--lc-speed': '2s' },
    html: `<div class="l-morph-wobble"></div>`,
    css: `.l-morph-wobble{width:var(--lc-size,44px);height:var(--lc-size,44px);background:var(--lc-color,#5b8def);border-radius:50%;animation:l-morph-wobble-m var(--lc-speed,2s) ease-in-out infinite}
@keyframes l-morph-wobble-m{0%,100%{border-radius:50% 50% 50% 50%}25%{border-radius:62% 38% 52% 48%}50%{border-radius:40% 60% 58% 42%}75%{border-radius:52% 48% 40% 60%}}`,
  },

  // ---------- ripple ----------
  {
    id: 'ripple-square', name: 'Square Ripple', category: 'ripple', tags: ['square', 'expand', 'rings'],
    variables: { '--lc-size': '56px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-ripple-square"><span></span><span></span></div>`,
    css: `.l-ripple-square{position:relative;width:var(--lc-size,56px);height:var(--lc-size,56px)}
.l-ripple-square span{position:absolute;top:50%;left:50%;border:2px solid var(--lc-color,#5b8def);border-radius:6px;transform:translate(-50%,-50%);animation:l-ripple-square-r var(--lc-speed,1.4s) cubic-bezier(0,.2,.8,1) infinite}
.l-ripple-square span:last-child{animation-delay:calc(var(--lc-speed,1.4s)/-2)}
@keyframes l-ripple-square-r{0%{width:0;height:0;opacity:1}100%{width:var(--lc-size,56px);height:var(--lc-size,56px);opacity:0}}`,
  },

  // ---------- 3d ----------
  {
    id: '3d-flip-tiles', name: '3D Flip Tiles', category: '3d', tags: ['tiles', 'flip', 'perspective'],
    variables: { '--lc-size': '18px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-3d-flip-tiles"><span></span><span></span><span></span></div>`,
    css: `.l-3d-flip-tiles{display:flex;gap:6px;perspective:260px}
.l-3d-flip-tiles span{width:var(--lc-size,18px);height:calc(var(--lc-size,18px)*1.4);background:var(--lc-color,#5b8def);border-radius:3px;animation:l-3d-flip-tiles-f var(--lc-speed,1.4s) ease-in-out infinite}
.l-3d-flip-tiles span:nth-child(2){animation-delay:.15s}
.l-3d-flip-tiles span:nth-child(3){animation-delay:.3s}
@keyframes l-3d-flip-tiles-f{0%,100%{transform:rotateX(0)}50%{transform:rotateX(180deg)}}`,
  },
  {
    id: '3d-tumble', name: '3D Tumbling Square', category: '3d', tags: ['tumble', 'rotate', 'perspective'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.8s' },
    html: `<div class="l-3d-tumble"></div>`,
    css: `.l-3d-tumble{width:var(--lc-size,40px);height:var(--lc-size,40px);background:var(--lc-color,#5b8def);border-radius:6px;animation:l-3d-tumble-r var(--lc-speed,1.8s) linear infinite}
@keyframes l-3d-tumble-r{0%{transform:perspective(220px) rotateX(0) rotateY(0)}100%{transform:perspective(220px) rotateX(360deg) rotateY(360deg)}}`,
  },
]

runBatch(LOADERS, 'batch-06')
