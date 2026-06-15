// Seed batch 02 — original loaders: 3d (new category), more spinners & dots.
import { runBatch } from '../seed-lib.mjs'

const LOADERS = [
  // ---------- 3d ----------
  {
    id: '3d-cube', name: '3D Spinning Cube', category: '3d', tags: ['cube', 'rotate', 'perspective'],
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def', '--lc-speed': '3s' },
    html: `<div class="l-3d-cube"><div><span></span><span></span><span></span><span></span><span></span><span></span></div></div>`,
    css: `.l-3d-cube{width:var(--lc-size,44px);height:var(--lc-size,44px);perspective:240px}
.l-3d-cube>div{position:relative;width:100%;height:100%;transform-style:preserve-3d;animation:l-3d-cube-rot var(--lc-speed,3s) linear infinite}
.l-3d-cube span{position:absolute;inset:0;background:color-mix(in srgb,var(--lc-color,#5b8def) 80%,transparent);border:1px solid var(--lc-color,#5b8def)}
.l-3d-cube span:nth-child(1){transform:rotateY(0) translateZ(calc(var(--lc-size,44px)/2))}
.l-3d-cube span:nth-child(2){transform:rotateY(90deg) translateZ(calc(var(--lc-size,44px)/2))}
.l-3d-cube span:nth-child(3){transform:rotateY(180deg) translateZ(calc(var(--lc-size,44px)/2))}
.l-3d-cube span:nth-child(4){transform:rotateY(270deg) translateZ(calc(var(--lc-size,44px)/2))}
.l-3d-cube span:nth-child(5){transform:rotateX(90deg) translateZ(calc(var(--lc-size,44px)/2))}
.l-3d-cube span:nth-child(6){transform:rotateX(-90deg) translateZ(calc(var(--lc-size,44px)/2))}
@keyframes l-3d-cube-rot{from{transform:rotateX(-22deg) rotateY(0)}to{transform:rotateX(-22deg) rotateY(360deg)}}`,
  },
  {
    id: '3d-coin', name: '3D Flipping Coin', category: '3d', tags: ['coin', 'flip', 'rotate'],
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def', '--lc-speed': '1.6s' },
    html: `<div class="l-3d-coin"><div></div></div>`,
    css: `.l-3d-coin{width:var(--lc-size,44px);height:var(--lc-size,44px);perspective:300px}
.l-3d-coin>div{width:100%;height:100%;border-radius:50%;background:var(--lc-color,#5b8def);transform-style:preserve-3d;animation:l-3d-coin-flip var(--lc-speed,1.6s) linear infinite}
@keyframes l-3d-coin-flip{to{transform:rotateY(360deg)}}`,
  },
  {
    id: '3d-rotating-plane', name: '3D Rotating Plane', category: '3d', tags: ['plane', 'flip', 'perspective'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.6s' },
    html: `<div class="l-3d-rotating-plane"></div>`,
    css: `.l-3d-rotating-plane{width:var(--lc-size,40px);height:var(--lc-size,40px);background:var(--lc-color,#5b8def);animation:l-3d-rotating-plane-r var(--lc-speed,1.6s) ease-in-out infinite}
@keyframes l-3d-rotating-plane-r{0%{transform:perspective(160px) rotateX(0) rotateY(0)}50%{transform:perspective(160px) rotateX(-180deg) rotateY(0)}100%{transform:perspective(160px) rotateX(-180deg) rotateY(-180deg)}}`,
  },

  // ---------- spinner ----------
  {
    id: 'spinner-half-circle', name: 'Half Circle', category: 'spinner', tags: ['arc', 'rotate'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '.9s' },
    html: `<div class="l-spinner-half-circle"></div>`,
    css: `.l-spinner-half-circle{width:var(--lc-size,48px);height:var(--lc-size,48px);border-radius:50%;border:calc(var(--lc-size,48px)/8) solid transparent;border-top-color:var(--lc-color,#5b8def);border-left-color:var(--lc-color,#5b8def);animation:l-spinner-half-circle-r var(--lc-speed,.9s) linear infinite}
@keyframes l-spinner-half-circle-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'spinner-pie', name: 'Pie Sweep', category: 'spinner', tags: ['conic', 'pie', 'rotate'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-spinner-pie"></div>`,
    css: `.l-spinner-pie{width:var(--lc-size,48px);height:var(--lc-size,48px);border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def) var(--a,90deg),transparent 0);animation:l-spinner-pie-r var(--lc-speed,1s) linear infinite,l-spinner-pie-g calc(var(--lc-speed,1s)*2) ease-in-out infinite}
@keyframes l-spinner-pie-r{to{transform:rotate(1turn)}}
@keyframes l-spinner-pie-g{0%,100%{--a:40deg}50%{--a:300deg}}
@property --a{syntax:'<angle>';inherits:false;initial-value:90deg}`,
  },
  {
    id: 'spinner-dots-circle', name: 'Circling Dots', category: 'spinner', tags: ['dots', 'circle', 'fade', 'ios'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-spinner-dots-circle"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-spinner-dots-circle{position:relative;width:var(--lc-size,48px);height:var(--lc-size,48px)}
.l-spinner-dots-circle span{position:absolute;top:0;left:50%;width:calc(var(--lc-size,48px)/8);height:calc(var(--lc-size,48px)/8);margin-left:calc(var(--lc-size,48px)/-16);border-radius:50%;background:var(--lc-color,#5b8def);transform-origin:50% calc(var(--lc-size,48px)/2);animation:l-spinner-dots-circle-f var(--lc-speed,1s) linear infinite}
.l-spinner-dots-circle span:nth-child(1){transform:rotate(0deg);animation-delay:calc(var(--lc-speed,1s)*0)}
.l-spinner-dots-circle span:nth-child(2){transform:rotate(45deg);animation-delay:calc(var(--lc-speed,1s)*-0.125)}
.l-spinner-dots-circle span:nth-child(3){transform:rotate(90deg);animation-delay:calc(var(--lc-speed,1s)*-0.25)}
.l-spinner-dots-circle span:nth-child(4){transform:rotate(135deg);animation-delay:calc(var(--lc-speed,1s)*-0.375)}
.l-spinner-dots-circle span:nth-child(5){transform:rotate(180deg);animation-delay:calc(var(--lc-speed,1s)*-0.5)}
.l-spinner-dots-circle span:nth-child(6){transform:rotate(225deg);animation-delay:calc(var(--lc-speed,1s)*-0.625)}
.l-spinner-dots-circle span:nth-child(7){transform:rotate(270deg);animation-delay:calc(var(--lc-speed,1s)*-0.75)}
.l-spinner-dots-circle span:nth-child(8){transform:rotate(315deg);animation-delay:calc(var(--lc-speed,1s)*-0.875)}
@keyframes l-spinner-dots-circle-f{0%,100%{opacity:.15}10%{opacity:1}}`,
  },
  {
    id: 'spinner-spiral', name: 'Triple Spiral', category: 'spinner', tags: ['rings', 'rotate', 'nested'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-spinner-spiral"><span></span><span></span><span></span></div>`,
    css: `.l-spinner-spiral{position:relative;width:var(--lc-size,48px);height:var(--lc-size,48px)}
.l-spinner-spiral span{position:absolute;border-radius:50%;border:3px solid transparent;border-top-color:var(--lc-color,#5b8def)}
.l-spinner-spiral span:nth-child(1){inset:0;animation:l-spinner-spiral-r var(--lc-speed,1.2s) linear infinite}
.l-spinner-spiral span:nth-child(2){inset:7px;animation:l-spinner-spiral-r calc(var(--lc-speed,1.2s)*1.5) linear infinite reverse}
.l-spinner-spiral span:nth-child(3){inset:14px;animation:l-spinner-spiral-r calc(var(--lc-speed,1.2s)*.8) linear infinite}
@keyframes l-spinner-spiral-r{to{transform:rotate(1turn)}}`,
  },

  // ---------- dots ----------
  {
    id: 'dots-color-cycle', name: 'Color Cycling Dots', category: 'dots', tags: ['color', 'hue', 'three'],
    variables: { '--lc-size': '14px', '--lc-color': '#5b8def', '--lc-speed': '1.8s' },
    html: `<div class="l-dots-color-cycle"><span></span><span></span><span></span></div>`,
    css: `.l-dots-color-cycle{display:flex;gap:calc(var(--lc-size,14px)/1.5)}
.l-dots-color-cycle span{width:var(--lc-size,14px);height:var(--lc-size,14px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-dots-color-cycle-c var(--lc-speed,1.8s) linear infinite}
.l-dots-color-cycle span:nth-child(2){animation-delay:calc(var(--lc-speed,1.8s)/-6)}
.l-dots-color-cycle span:nth-child(3){animation-delay:calc(var(--lc-speed,1.8s)/-3)}
@keyframes l-dots-color-cycle-c{0%{filter:hue-rotate(0)}100%{filter:hue-rotate(360deg)}}`,
  },
  {
    id: 'dots-three-spin', name: 'Spinning Triangle', category: 'dots', tags: ['triangle', 'rotate', 'three'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-dots-three-spin"><span></span><span></span><span></span></div>`,
    css: `.l-dots-three-spin{position:relative;width:var(--lc-size,40px);height:var(--lc-size,40px);animation:l-dots-three-spin-r var(--lc-speed,1.2s) linear infinite}
.l-dots-three-spin span{position:absolute;width:32%;height:32%;border-radius:50%;background:var(--lc-color,#5b8def)}
.l-dots-three-spin span:nth-child(1){top:0;left:34%}
.l-dots-three-spin span:nth-child(2){bottom:0;left:0;opacity:.7}
.l-dots-three-spin span:nth-child(3){bottom:0;right:0;opacity:.4}
@keyframes l-dots-three-spin-r{to{transform:rotate(1turn)}}`,
  },
]

runBatch(LOADERS, 'batch-02')
