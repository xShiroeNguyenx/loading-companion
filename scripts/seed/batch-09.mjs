// Seed batch 09 — original SINGLE-ELEMENT loaders.
// Each is one DOM node (<div>), built entirely from the element + ::before/::after
// + conic/radial gradients, masks and @property. Original designs (MIT, this project).
import { runBatch } from '../seed-lib.mjs'

const RING = '-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 6px),#000 0);mask:radial-gradient(farthest-side,#0000 calc(100% - 6px),#000 0)'
const tag = (...t) => ['single-element', ...t]

const LOADERS = [
  // ===== conic / radial single div =====
  {
    id: 'se-pinwheel', name: 'Pinwheel', category: 'spinner', tags: tag('conic', 'rotate'),
    variables: { '--lc-size': '46px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-se-pinwheel"></div>`,
    css: `.l-se-pinwheel{width:var(--lc-size,46px);aspect-ratio:1;border-radius:50%;background:repeating-conic-gradient(var(--lc-color,#5b8def) 0 18deg,transparent 0 36deg);animation:l-se-pinwheel-r var(--lc-speed,1s) linear infinite}
@keyframes l-se-pinwheel-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'se-pie-grow', name: 'Growing Pie', category: 'spinner', tags: tag('conic', 'pie', 'property'),
    variables: { '--lc-size': '46px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-se-pie-grow"></div>`,
    css: `.l-se-pie-grow{width:var(--lc-size,46px);aspect-ratio:1;border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def) var(--g,0deg),color-mix(in srgb,var(--lc-color,#5b8def) 16%,transparent) 0);animation:l-se-pie-grow-g var(--lc-speed,1.4s) ease-in-out infinite}
@keyframes l-se-pie-grow-g{0%{--g:0deg}50%{--g:360deg}100%{--g:0deg}}
@property --g{syntax:'<angle>';inherits:false;initial-value:0deg}`,
  },
  {
    id: 'se-comet', name: 'Comet Ring', category: 'spinner', tags: tag('conic', 'mask', 'rotate'),
    variables: { '--lc-size': '46px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-se-comet"></div>`,
    css: `.l-se-comet{width:var(--lc-size,46px);aspect-ratio:1;border-radius:50%;background:conic-gradient(from 90deg,transparent,var(--lc-color,#5b8def));${RING};animation:l-se-comet-r var(--lc-speed,1s) linear infinite}
@keyframes l-se-comet-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'se-fan-fade', name: 'Fan Fade', category: 'spinner', tags: tag('conic', 'fade', 'rotate'),
    variables: { '--lc-size': '46px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-se-fan-fade"></div>`,
    css: `.l-se-fan-fade{width:var(--lc-size,46px);aspect-ratio:1;border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def),color-mix(in srgb,var(--lc-color,#5b8def) 0%,transparent));animation:l-se-fan-fade-r var(--lc-speed,1s) linear infinite}
@keyframes l-se-fan-fade-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'se-split-disc', name: 'Split Disc', category: 'spinner', tags: tag('conic', 'half', 'rotate'),
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-se-split-disc"></div>`,
    css: `.l-se-split-disc{width:var(--lc-size,44px);aspect-ratio:1;border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def) 0 50%,color-mix(in srgb,var(--lc-color,#5b8def) 20%,transparent) 0);animation:l-se-split-disc-r var(--lc-speed,1s) linear infinite}
@keyframes l-se-split-disc-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'se-two-tone-ring', name: 'Two-Tone Ring', category: 'ring', tags: tag('conic', 'mask', 'rotate'),
    variables: { '--lc-size': '46px', '--lc-color': '#5b8def', '--lc-speed': '1.1s' },
    html: `<div class="l-se-two-tone-ring"></div>`,
    css: `.l-se-two-tone-ring{width:var(--lc-size,46px);aspect-ratio:1;border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def),color-mix(in srgb,var(--lc-color,#5b8def) 30%,transparent),var(--lc-color,#5b8def));${RING};animation:l-se-two-tone-ring-r var(--lc-speed,1.1s) linear infinite}
@keyframes l-se-two-tone-ring-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'se-segment-orbit', name: 'Segment Orbit', category: 'ring', tags: tag('conic', 'mask', 'arc'),
    variables: { '--lc-size': '46px', '--lc-color': '#5b8def', '--lc-speed': '.9s' },
    html: `<div class="l-se-segment-orbit"></div>`,
    css: `.l-se-segment-orbit{width:var(--lc-size,46px);aspect-ratio:1;border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def) 0 60deg,color-mix(in srgb,var(--lc-color,#5b8def) 15%,transparent) 0);${RING};animation:l-se-segment-orbit-r var(--lc-speed,.9s) linear infinite}
@keyframes l-se-segment-orbit-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'se-radar-grow', name: 'Radar Grow', category: 'ripple', tags: tag('conic', 'radar', 'property'),
    variables: { '--lc-size': '52px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-se-radar-grow"></div>`,
    css: `.l-se-radar-grow{width:var(--lc-size,52px);aspect-ratio:1;border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def) var(--g,40deg),transparent 0);animation:l-se-radar-grow-r var(--lc-speed,1.4s) linear infinite,l-se-radar-grow-g calc(var(--lc-speed,1.4s)*2) ease-in-out infinite}
@keyframes l-se-radar-grow-r{to{transform:rotate(1turn)}}
@keyframes l-se-radar-grow-g{0%,100%{--g:30deg}50%{--g:200deg}}
@property --g{syntax:'<angle>';inherits:false;initial-value:40deg}`,
  },
  {
    id: 'se-disc-pulse', name: 'Disc Pulse', category: 'pulse', tags: tag('radial', 'property', 'fill'),
    variables: { '--lc-size': '46px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-se-disc-pulse"></div>`,
    css: `.l-se-disc-pulse{width:var(--lc-size,46px);aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,var(--lc-color,#5b8def) var(--r,10%),transparent 0);animation:l-se-disc-pulse-p var(--lc-speed,1.4s) ease-in-out infinite}
@keyframes l-se-disc-pulse-p{0%,100%{--r:10%}50%{--r:70%}}
@property --r{syntax:'<percentage>';inherits:false;initial-value:10%}`,
  },

  // ===== gradient bars (single div + ::before) =====
  {
    id: 'se-bar-sweep', name: 'Bar Sweep', category: 'progress', tags: tag('bar', 'sweep', 'pseudo'),
    variables: { '--lc-size': '200px', '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-speed': '1.4s' },
    html: `<div class="l-se-bar-sweep"></div>`,
    css: `.l-se-bar-sweep{position:relative;width:var(--lc-size,200px);height:8px;border-radius:4px;background:var(--lc-track,#e2e8f0);overflow:hidden}
.l-se-bar-sweep::before{content:'';position:absolute;top:0;left:-40%;height:100%;width:40%;border-radius:4px;background:var(--lc-color,#5b8def);animation:l-se-bar-sweep-s var(--lc-speed,1.4s) ease-in-out infinite}
@keyframes l-se-bar-sweep-s{0%{left:-40%}100%{left:100%}}`,
  },
  {
    id: 'se-bar-stripes-move', name: 'Moving Stripes', category: 'progress', tags: tag('bar', 'stripes', 'loop'),
    variables: { '--lc-size': '200px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-se-bar-stripes-move"></div>`,
    css: `.l-se-bar-stripes-move{width:var(--lc-size,200px);height:12px;border-radius:6px;background:repeating-linear-gradient(45deg,var(--lc-color,#5b8def) 0 14px,color-mix(in srgb,var(--lc-color,#5b8def) 70%,#fff) 14px 28px);background-size:40px 100%;animation:l-se-bar-stripes-move-s var(--lc-speed,1s) linear infinite}
@keyframes l-se-bar-stripes-move-s{to{background-position:40px 0}}`,
  },

  // ===== pseudo-element shapes =====
  {
    id: 'se-cross-spin', name: 'Cross Spin', category: 'spinner', tags: tag('cross', 'pseudo', 'rotate'),
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-se-cross-spin"></div>`,
    css: `.l-se-cross-spin{position:relative;width:var(--lc-size,40px);aspect-ratio:1;animation:l-se-cross-spin-r var(--lc-speed,1.2s) ease-in-out infinite}
.l-se-cross-spin::before,.l-se-cross-spin::after{content:'';position:absolute;inset:0;margin:auto;background:var(--lc-color,#5b8def);border-radius:3px}
.l-se-cross-spin::before{width:100%;height:20%}
.l-se-cross-spin::after{width:20%;height:100%}
@keyframes l-se-cross-spin-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'se-plus-pulse', name: 'Plus Pulse', category: 'pulse', tags: tag('cross', 'pseudo', 'scale'),
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-se-plus-pulse"></div>`,
    css: `.l-se-plus-pulse{position:relative;width:var(--lc-size,40px);aspect-ratio:1;animation:l-se-plus-pulse-p var(--lc-speed,1.2s) ease-in-out infinite}
.l-se-plus-pulse::before,.l-se-plus-pulse::after{content:'';position:absolute;inset:0;margin:auto;background:var(--lc-color,#5b8def);border-radius:3px}
.l-se-plus-pulse::before{width:100%;height:24%}
.l-se-plus-pulse::after{width:24%;height:100%}
@keyframes l-se-plus-pulse-p{0%,100%{transform:scale(.5) rotate(0)}50%{transform:scale(1) rotate(90deg)}}`,
  },
  {
    id: 'se-dual-orbit', name: 'Dual Orbit', category: 'orbit', tags: tag('orbit', 'pseudo', 'rotate'),
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-se-dual-orbit"></div>`,
    css: `.l-se-dual-orbit{position:relative;width:var(--lc-size,44px);aspect-ratio:1;animation:l-se-dual-orbit-r var(--lc-speed,1.2s) linear infinite}
.l-se-dual-orbit::before,.l-se-dual-orbit::after{content:'';position:absolute;left:calc(50% - 15%);width:30%;aspect-ratio:1;border-radius:50%;background:var(--lc-color,#5b8def)}
.l-se-dual-orbit::before{top:0}
.l-se-dual-orbit::after{bottom:0;opacity:.5}
@keyframes l-se-dual-orbit-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'se-dual-bounce', name: 'Dual Bounce Tube', category: 'bounce', tags: tag('bounce', 'pseudo', 'two'),
    variables: { '--lc-size': '16px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-se-dual-bounce"></div>`,
    css: `.l-se-dual-bounce{position:relative;width:var(--lc-size,16px);height:calc(var(--lc-size,16px)*3)}
.l-se-dual-bounce::before,.l-se-dual-bounce::after{content:'';position:absolute;top:0;left:0;width:var(--lc-size,16px);aspect-ratio:1;border-radius:50%;background:var(--lc-color,#5b8def);animation:l-se-dual-bounce-m var(--lc-speed,1s) ease-in-out infinite}
.l-se-dual-bounce::after{animation-delay:calc(var(--lc-speed,1s)/-2)}
@keyframes l-se-dual-bounce-m{0%,100%{transform:translateY(0)}50%{transform:translateY(calc(var(--lc-size,16px)*2))}}`,
  },
  {
    id: 'se-triple-pulse', name: 'Triple Pulse', category: 'dots', tags: tag('dots', 'pseudo', 'pulse'),
    variables: { '--lc-size': '12px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-se-triple-pulse"></div>`,
    css: `.l-se-triple-pulse{position:relative;width:var(--lc-size,12px);aspect-ratio:1;border-radius:50%;background:var(--lc-color,#5b8def);animation:l-se-triple-pulse-p var(--lc-speed,1s) ease-in-out .16s infinite}
.l-se-triple-pulse::before,.l-se-triple-pulse::after{content:'';position:absolute;top:0;width:100%;aspect-ratio:1;border-radius:50%;background:var(--lc-color,#5b8def);animation:l-se-triple-pulse-p var(--lc-speed,1s) ease-in-out infinite}
.l-se-triple-pulse::before{left:-160%;animation-delay:0s}
.l-se-triple-pulse::after{left:160%;animation-delay:.32s}
@keyframes l-se-triple-pulse-p{0%,80%,100%{transform:scale(.4);opacity:.4}40%{transform:scale(1);opacity:1}}`,
  },
  {
    id: 'se-triple-wave', name: 'Triple Wave', category: 'dots', tags: tag('dots', 'pseudo', 'wave'),
    variables: { '--lc-size': '12px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-se-triple-wave"></div>`,
    css: `.l-se-triple-wave{position:relative;width:var(--lc-size,12px);aspect-ratio:1;border-radius:50%;background:var(--lc-color,#5b8def);animation:l-se-triple-wave-w var(--lc-speed,1.2s) ease-in-out .15s infinite}
.l-se-triple-wave::before,.l-se-triple-wave::after{content:'';position:absolute;top:0;width:100%;aspect-ratio:1;border-radius:50%;background:var(--lc-color,#5b8def);animation:l-se-triple-wave-w var(--lc-speed,1.2s) ease-in-out infinite}
.l-se-triple-wave::before{left:-160%;animation-delay:0s}
.l-se-triple-wave::after{left:160%;animation-delay:.3s}
@keyframes l-se-triple-wave-w{0%,100%{transform:translateY(70%)}50%{transform:translateY(-70%)}}`,
  },
  {
    id: 'se-dna', name: 'Crossing Dots', category: 'wave', tags: tag('cross', 'pseudo', 'swap'),
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-se-dna"></div>`,
    css: `.l-se-dna{position:relative;width:var(--lc-size,40px);height:12px}
.l-se-dna::before,.l-se-dna::after{content:'';position:absolute;top:1px;width:10px;height:10px;border-radius:50%;background:var(--lc-color,#5b8def);animation:l-se-dna-a var(--lc-speed,1.4s) ease-in-out infinite}
.l-se-dna::after{animation-name:l-se-dna-b}
@keyframes l-se-dna-a{0%,100%{left:0;transform:scale(1);z-index:2}50%{left:calc(100% - 10px);transform:scale(.5);z-index:0}}
@keyframes l-se-dna-b{0%,100%{left:calc(100% - 10px);transform:scale(.5);z-index:0}50%{left:0;transform:scale(1);z-index:2}}`,
  },
  {
    id: 'se-clock', name: 'Clock', category: 'spinner', tags: tag('clock', 'pseudo', 'hands'),
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def', '--lc-speed': '2s' },
    html: `<div class="l-se-clock"></div>`,
    css: `.l-se-clock{position:relative;width:var(--lc-size,44px);aspect-ratio:1;border-radius:50%;border:2px solid color-mix(in srgb,var(--lc-color,#5b8def) 30%,transparent)}
.l-se-clock::before,.l-se-clock::after{content:'';position:absolute;left:50%;bottom:50%;margin-left:-1.5px;width:3px;background:var(--lc-color,#5b8def);border-radius:2px;transform-origin:bottom}
.l-se-clock::before{height:34%;animation:l-se-clock-r var(--lc-speed,2s) linear infinite}
.l-se-clock::after{height:24%;animation:l-se-clock-r calc(var(--lc-speed,2s)*4) linear infinite}
@keyframes l-se-clock-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'se-hourglass', name: 'Hourglass', category: 'flip', tags: tag('hourglass', 'pseudo', 'flip'),
    variables: { '--lc-size': '30px', '--lc-color': '#5b8def', '--lc-speed': '1.6s' },
    html: `<div class="l-se-hourglass"></div>`,
    css: `.l-se-hourglass{position:relative;width:var(--lc-size,30px);height:calc(var(--lc-size,30px)*1.5);animation:l-se-hourglass-f var(--lc-speed,1.6s) ease-in-out infinite}
.l-se-hourglass::before,.l-se-hourglass::after{content:'';position:absolute;left:0;width:0;height:0;border-left:calc(var(--lc-size,30px)/2) solid transparent;border-right:calc(var(--lc-size,30px)/2) solid transparent}
.l-se-hourglass::before{top:0;border-top:calc(var(--lc-size,30px)*.72) solid var(--lc-color,#5b8def)}
.l-se-hourglass::after{bottom:0;border-bottom:calc(var(--lc-size,30px)*.72) solid var(--lc-color,#5b8def)}
@keyframes l-se-hourglass-f{0%,100%{transform:rotate(0)}50%{transform:rotate(180deg)}}`,
  },
  {
    id: 'se-square-flip-pseudo', name: 'Twin Flip', category: 'flip', tags: tag('squares', 'pseudo', 'flip'),
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-se-square-flip-pseudo"></div>`,
    css: `.l-se-square-flip-pseudo{position:relative;width:var(--lc-size,40px);aspect-ratio:1}
.l-se-square-flip-pseudo::before,.l-se-square-flip-pseudo::after{content:'';position:absolute;width:44%;aspect-ratio:1;border-radius:4px;background:var(--lc-color,#5b8def);animation:l-se-square-flip-pseudo-f var(--lc-speed,1.4s) ease-in-out infinite}
.l-se-square-flip-pseudo::before{top:0;left:0}
.l-se-square-flip-pseudo::after{bottom:0;right:0;animation-delay:calc(var(--lc-speed,1.4s)/-2)}
@keyframes l-se-square-flip-pseudo-f{0%,100%{transform:rotate(0)}50%{transform:rotate(180deg)}}`,
  },
  {
    id: 'se-arc-dual-chase', name: 'Arc Chase', category: 'ring', tags: tag('arcs', 'pseudo', 'counter'),
    variables: { '--lc-size': '46px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-se-arc-dual-chase"></div>`,
    css: `.l-se-arc-dual-chase{position:relative;width:var(--lc-size,46px);aspect-ratio:1}
.l-se-arc-dual-chase::before,.l-se-arc-dual-chase::after{content:'';position:absolute;inset:0;border-radius:50%;border:3px solid transparent}
.l-se-arc-dual-chase::before{border-top-color:var(--lc-color,#5b8def);animation:l-se-arc-dual-chase-r var(--lc-speed,1s) linear infinite}
.l-se-arc-dual-chase::after{inset:7px;border-bottom-color:var(--lc-color,#5b8def);animation:l-se-arc-dual-chase-r var(--lc-speed,1s) linear infinite reverse}
@keyframes l-se-arc-dual-chase-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'se-ripple-pseudo', name: 'Pseudo Ripple', category: 'ripple', tags: tag('ripple', 'pseudo', 'expand'),
    variables: { '--lc-size': '52px', '--lc-color': '#5b8def', '--lc-speed': '1.6s' },
    html: `<div class="l-se-ripple-pseudo"></div>`,
    css: `.l-se-ripple-pseudo{position:relative;width:var(--lc-size,52px);aspect-ratio:1}
.l-se-ripple-pseudo::before,.l-se-ripple-pseudo::after{content:'';position:absolute;inset:0;border-radius:50%;border:3px solid var(--lc-color,#5b8def);animation:l-se-ripple-pseudo-r var(--lc-speed,1.6s) cubic-bezier(0,.2,.8,1) infinite}
.l-se-ripple-pseudo::after{animation-delay:calc(var(--lc-speed,1.6s)/-2)}
@keyframes l-se-ripple-pseudo-r{0%{transform:scale(.1);opacity:1}100%{transform:scale(1);opacity:0}}`,
  },
  {
    id: 'se-eclipse', name: 'Eclipse', category: 'morph', tags: tag('eclipse', 'pseudo', 'sweep'),
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def', '--lc-bg': '#f1f5f9', '--lc-speed': '1.6s' },
    html: `<div class="l-se-eclipse"></div>`,
    css: `.l-se-eclipse{position:relative;width:var(--lc-size,44px);aspect-ratio:1;border-radius:50%;background:var(--lc-color,#5b8def);overflow:hidden}
.l-se-eclipse::after{content:'';position:absolute;inset:0;border-radius:50%;background:var(--lc-bg,#f1f5f9);animation:l-se-eclipse-e var(--lc-speed,1.6s) ease-in-out infinite}
@keyframes l-se-eclipse-e{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}`,
  },
  {
    id: 'se-heart-beat', name: 'Heartbeat', category: 'pulse', tags: tag('heart', 'pseudo', 'beat'),
    variables: { '--lc-size': '34px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-se-heart-beat"></div>`,
    css: `.l-se-heart-beat{position:relative;width:var(--lc-size,34px);aspect-ratio:1;background:var(--lc-color,#5b8def);transform:rotate(-45deg);animation:l-se-heart-beat-b var(--lc-speed,1.2s) ease-in-out infinite}
.l-se-heart-beat::before,.l-se-heart-beat::after{content:'';position:absolute;width:100%;height:100%;border-radius:50%;background:var(--lc-color,#5b8def)}
.l-se-heart-beat::before{top:-50%;left:0}
.l-se-heart-beat::after{top:0;right:-50%}
@keyframes l-se-heart-beat-b{0%,100%{transform:rotate(-45deg) scale(.8)}15%{transform:rotate(-45deg) scale(1.05)}30%{transform:rotate(-45deg) scale(.9)}45%{transform:rotate(-45deg) scale(1)}}`,
  },
]

runBatch(LOADERS, 'batch-09')
