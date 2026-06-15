// Seed batch 04 — original loaders: more spinners & rings.
import { runBatch } from '../seed-lib.mjs'

const T = 'calc(var(--lc-size,44px)/8)' // ring thickness helper text

const LOADERS = [
  {
    id: 'spinner-quarter', name: 'Quarter Arc', category: 'spinner', tags: ['arc', 'thin', 'rotate'],
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def', '--lc-speed': '.8s' },
    html: `<div class="l-spinner-quarter"></div>`,
    css: `.l-spinner-quarter{width:var(--lc-size,44px);height:var(--lc-size,44px);border:${T} solid transparent;border-top-color:var(--lc-color,#5b8def);border-radius:50%;animation:l-spinner-quarter-r var(--lc-speed,.8s) linear infinite}
@keyframes l-spinner-quarter-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'spinner-dual-arc', name: 'Dual Arc', category: 'spinner', tags: ['arc', 'two', 'rotate'],
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-spinner-dual-arc"></div>`,
    css: `.l-spinner-dual-arc{width:var(--lc-size,44px);height:var(--lc-size,44px);border:${T} solid transparent;border-top-color:var(--lc-color,#5b8def);border-bottom-color:color-mix(in srgb,var(--lc-color,#5b8def) 40%,transparent);border-radius:50%;animation:l-spinner-dual-arc-r var(--lc-speed,1s) linear infinite}
@keyframes l-spinner-dual-arc-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'spinner-segment-gap', name: 'Segment Gap', category: 'spinner', tags: ['conic', 'gap', 'rotate'],
    variables: { '--lc-size': '46px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-spinner-segment-gap"></div>`,
    css: `.l-spinner-segment-gap{width:var(--lc-size,46px);height:var(--lc-size,46px);border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def) 0 280deg,transparent 280deg);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - ${T}),#000 0);mask:radial-gradient(farthest-side,transparent calc(100% - ${T}),#000 0);animation:l-spinner-segment-gap-r var(--lc-speed,1s) linear infinite}
@keyframes l-spinner-segment-gap-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'spinner-triangle', name: 'Rotating Triangle', category: 'spinner', tags: ['triangle', 'shape', 'rotate'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-spinner-triangle"></div>`,
    css: `.l-spinner-triangle{width:0;height:0;border-left:calc(var(--lc-size,40px)/2) solid transparent;border-right:calc(var(--lc-size,40px)/2) solid transparent;border-bottom:var(--lc-size,40px) solid var(--lc-color,#5b8def);animation:l-spinner-triangle-r var(--lc-speed,1.2s) ease-in-out infinite}
@keyframes l-spinner-triangle-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'spinner-square-outline', name: 'Square Outline', category: 'spinner', tags: ['square', 'rotate', 'scale'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-spinner-square-outline"></div>`,
    css: `.l-spinner-square-outline{width:var(--lc-size,40px);height:var(--lc-size,40px);border:calc(var(--lc-size,40px)/8) solid var(--lc-color,#5b8def);animation:l-spinner-square-outline-r var(--lc-speed,1.4s) ease-in-out infinite}
@keyframes l-spinner-square-outline-r{0%{transform:rotate(0) scale(1)}50%{transform:rotate(180deg) scale(.6)}100%{transform:rotate(360deg) scale(1)}}`,
  },
  {
    id: 'spinner-propeller', name: 'Propeller', category: 'spinner', tags: ['blades', 'rotate', 'three'],
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def', '--lc-speed': '.9s' },
    html: `<div class="l-spinner-propeller"><span></span><span></span><span></span></div>`,
    css: `.l-spinner-propeller{position:relative;width:var(--lc-size,44px);height:var(--lc-size,44px);animation:l-spinner-propeller-r var(--lc-speed,.9s) linear infinite}
.l-spinner-propeller span{position:absolute;left:44%;bottom:50%;width:12%;height:46%;border-radius:6px;background:var(--lc-color,#5b8def);transform-origin:bottom center}
.l-spinner-propeller span:nth-child(1){transform:rotate(0deg)}
.l-spinner-propeller span:nth-child(2){transform:rotate(120deg)}
.l-spinner-propeller span:nth-child(3){transform:rotate(240deg)}
@keyframes l-spinner-propeller-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'spinner-blades', name: 'Fading Blades', category: 'spinner', tags: ['blades', 'fade', 'ios', 'twelve'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-spinner-blades"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-spinner-blades{position:relative;width:var(--lc-size,40px);height:var(--lc-size,40px)}
.l-spinner-blades span{position:absolute;top:0;left:calc(50% - 1.5px);width:3px;height:26%;border-radius:3px;background:var(--lc-color,#5b8def);transform-origin:50% calc(var(--lc-size,40px)/2);animation:l-spinner-blades-f var(--lc-speed,1s) linear infinite}
.l-spinner-blades span:nth-child(1){transform:rotate(0deg);animation-delay:calc(var(--lc-speed,1s)*0)}
.l-spinner-blades span:nth-child(2){transform:rotate(30deg);animation-delay:calc(var(--lc-speed,1s)*-0.083)}
.l-spinner-blades span:nth-child(3){transform:rotate(60deg);animation-delay:calc(var(--lc-speed,1s)*-0.166)}
.l-spinner-blades span:nth-child(4){transform:rotate(90deg);animation-delay:calc(var(--lc-speed,1s)*-0.25)}
.l-spinner-blades span:nth-child(5){transform:rotate(120deg);animation-delay:calc(var(--lc-speed,1s)*-0.333)}
.l-spinner-blades span:nth-child(6){transform:rotate(150deg);animation-delay:calc(var(--lc-speed,1s)*-0.416)}
.l-spinner-blades span:nth-child(7){transform:rotate(180deg);animation-delay:calc(var(--lc-speed,1s)*-0.5)}
.l-spinner-blades span:nth-child(8){transform:rotate(210deg);animation-delay:calc(var(--lc-speed,1s)*-0.583)}
.l-spinner-blades span:nth-child(9){transform:rotate(240deg);animation-delay:calc(var(--lc-speed,1s)*-0.666)}
.l-spinner-blades span:nth-child(10){transform:rotate(270deg);animation-delay:calc(var(--lc-speed,1s)*-0.75)}
.l-spinner-blades span:nth-child(11){transform:rotate(300deg);animation-delay:calc(var(--lc-speed,1s)*-0.833)}
.l-spinner-blades span:nth-child(12){transform:rotate(330deg);animation-delay:calc(var(--lc-speed,1s)*-0.916)}
@keyframes l-spinner-blades-f{0%,100%{opacity:.15}10%{opacity:1}}`,
  },
  {
    id: 'spinner-dotted-ring', name: 'Dotted Ring', category: 'spinner', tags: ['dots', 'ring', 'rotate', 'trail'],
    variables: { '--lc-size': '46px', '--lc-color': '#5b8def', '--lc-speed': '1.1s' },
    html: `<div class="l-spinner-dotted-ring"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-spinner-dotted-ring{position:relative;width:var(--lc-size,46px);height:var(--lc-size,46px);animation:l-spinner-dotted-ring-r var(--lc-speed,1.1s) linear infinite}
.l-spinner-dotted-ring span{position:absolute;top:0;left:50%;width:calc(var(--lc-size,46px)/8);height:calc(var(--lc-size,46px)/8);margin-left:calc(var(--lc-size,46px)/-16);border-radius:50%;background:var(--lc-color,#5b8def);transform-origin:50% calc(var(--lc-size,46px)/2)}
.l-spinner-dotted-ring span:nth-child(1){transform:rotate(0deg);opacity:1}
.l-spinner-dotted-ring span:nth-child(2){transform:rotate(45deg);opacity:.85}
.l-spinner-dotted-ring span:nth-child(3){transform:rotate(90deg);opacity:.7}
.l-spinner-dotted-ring span:nth-child(4){transform:rotate(135deg);opacity:.55}
.l-spinner-dotted-ring span:nth-child(5){transform:rotate(180deg);opacity:.4}
.l-spinner-dotted-ring span:nth-child(6){transform:rotate(225deg);opacity:.3}
.l-spinner-dotted-ring span:nth-child(7){transform:rotate(270deg);opacity:.2}
.l-spinner-dotted-ring span:nth-child(8){transform:rotate(315deg);opacity:.12}
@keyframes l-spinner-dotted-ring-r{to{transform:rotate(1turn)}}`,
  },

  // ---------- ring ----------
  {
    id: 'ring-pulse', name: 'Pulsing Ring', category: 'ring', tags: ['pulse', 'scale', 'fade'],
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-ring-pulse"></div>`,
    css: `.l-ring-pulse{width:var(--lc-size,44px);height:var(--lc-size,44px);border:3px solid var(--lc-color,#5b8def);border-radius:50%;animation:l-ring-pulse-p var(--lc-speed,1.2s) ease-in-out infinite}
@keyframes l-ring-pulse-p{0%,100%{transform:scale(.6);opacity:1}50%{transform:scale(1);opacity:.25}}`,
  },
  {
    id: 'ring-color-wheel', name: 'Color Wheel', category: 'ring', tags: ['conic', 'gradient', 'rotate'],
    variables: { '--lc-size': '46px', '--lc-color': '#5b8def', '--lc-color-2': '#a855f7', '--lc-speed': '1.2s' },
    html: `<div class="l-ring-color-wheel"></div>`,
    css: `.l-ring-color-wheel{width:var(--lc-size,46px);height:var(--lc-size,46px);border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def),var(--lc-color-2,#a855f7),var(--lc-color,#5b8def));-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - ${T}),#000 0);mask:radial-gradient(farthest-side,transparent calc(100% - ${T}),#000 0);animation:l-ring-color-wheel-r var(--lc-speed,1.2s) linear infinite}
@keyframes l-ring-color-wheel-r{to{transform:rotate(1turn)}}`,
  },
]

runBatch(LOADERS, 'batch-04')
