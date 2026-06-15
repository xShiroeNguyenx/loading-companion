// Seed batch 05 — original loaders: dots, orbit, wave, bars.
import { runBatch } from '../seed-lib.mjs'

const LOADERS = [
  // ---------- dots ----------
  {
    id: 'dots-snake', name: 'Snake Wave', category: 'dots', tags: ['wave', 'scale', 'five'],
    variables: { '--lc-size': '12px', '--lc-color': '#5b8def', '--lc-speed': '1.3s' },
    html: `<div class="l-dots-snake"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-dots-snake{display:flex;gap:calc(var(--lc-size,12px)/1.6);align-items:center}
.l-dots-snake span{width:var(--lc-size,12px);height:var(--lc-size,12px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-dots-snake-s var(--lc-speed,1.3s) ease-in-out infinite}
.l-dots-snake span:nth-child(2){animation-delay:.1s}
.l-dots-snake span:nth-child(3){animation-delay:.2s}
.l-dots-snake span:nth-child(4){animation-delay:.3s}
.l-dots-snake span:nth-child(5){animation-delay:.4s}
@keyframes l-dots-snake-s{0%,100%{transform:scale(.4);opacity:.4}40%{transform:scale(1);opacity:1}}`,
  },
  {
    id: 'dots-grid-4', name: 'Four Grid', category: 'dots', tags: ['grid', 'pulse', 'four'],
    variables: { '--lc-size': '14px', '--lc-color': '#5b8def', '--lc-speed': '1.3s' },
    html: `<div class="l-dots-grid-4"><span></span><span></span><span></span><span></span></div>`,
    css: `.l-dots-grid-4{display:grid;grid-template-columns:repeat(2,var(--lc-size,14px));gap:calc(var(--lc-size,14px)/2)}
.l-dots-grid-4 span{width:var(--lc-size,14px);height:var(--lc-size,14px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-dots-grid-4-p var(--lc-speed,1.3s) ease-in-out infinite}
.l-dots-grid-4 span:nth-child(2){animation-delay:.15s}
.l-dots-grid-4 span:nth-child(3){animation-delay:.15s}
.l-dots-grid-4 span:nth-child(4){animation-delay:.3s}
@keyframes l-dots-grid-4-p{0%,70%,100%{transform:scale(.5);opacity:.4}35%{transform:scale(1);opacity:1}}`,
  },
  {
    id: 'dots-collision', name: 'Collision', category: 'dots', tags: ['collision', 'two', 'translate'],
    variables: { '--lc-size': '14px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-dots-collision"><span></span><span></span></div>`,
    css: `.l-dots-collision{position:relative;width:48px;height:var(--lc-size,14px)}
.l-dots-collision span{position:absolute;top:0;width:var(--lc-size,14px);height:var(--lc-size,14px);border-radius:50%;background:var(--lc-color,#5b8def)}
.l-dots-collision span:first-child{left:0;animation:l-dots-collision-l var(--lc-speed,1s) ease-in-out infinite}
.l-dots-collision span:last-child{right:0;animation:l-dots-collision-r var(--lc-speed,1s) ease-in-out infinite}
@keyframes l-dots-collision-l{0%,100%{transform:translateX(0)}50%{transform:translateX(17px)}}
@keyframes l-dots-collision-r{0%,100%{transform:translateX(0)}50%{transform:translateX(-17px)}}`,
  },
  {
    id: 'dots-square-rotate', name: 'Rotating Quad', category: 'dots', tags: ['square', 'rotate', 'four'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-dots-square-rotate"><span></span><span></span><span></span><span></span></div>`,
    css: `.l-dots-square-rotate{position:relative;width:var(--lc-size,40px);height:var(--lc-size,40px);animation:l-dots-square-rotate-r var(--lc-speed,1.4s) cubic-bezier(.5,0,.5,1) infinite}
.l-dots-square-rotate span{position:absolute;width:28%;height:28%;border-radius:50%;background:var(--lc-color,#5b8def)}
.l-dots-square-rotate span:nth-child(1){top:0;left:0}
.l-dots-square-rotate span:nth-child(2){top:0;right:0}
.l-dots-square-rotate span:nth-child(3){bottom:0;right:0}
.l-dots-square-rotate span:nth-child(4){bottom:0;left:0}
@keyframes l-dots-square-rotate-r{to{transform:rotate(1turn)}}`,
  },

  // ---------- orbit ----------
  {
    id: 'orbit-center', name: 'Electron', category: 'orbit', tags: ['orbit', 'center', 'dot'],
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-orbit-center"><b></b><i></i></div>`,
    css: `.l-orbit-center{position:relative;width:var(--lc-size,44px);height:var(--lc-size,44px)}
.l-orbit-center b{position:absolute;top:50%;left:50%;width:22%;height:22%;margin:-11% 0 0 -11%;border-radius:50%;background:var(--lc-color,#5b8def)}
.l-orbit-center i{position:absolute;top:0;left:50%;width:16%;height:16%;margin-left:-8%;border-radius:50%;background:var(--lc-color,#5b8def);transform-origin:50% calc(var(--lc-size,44px)/2);animation:l-orbit-center-r var(--lc-speed,1.2s) linear infinite}
@keyframes l-orbit-center-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'orbit-triple', name: 'Triple Orbit', category: 'orbit', tags: ['orbit', 'three', 'rotate'],
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-orbit-triple"><span></span><span></span><span></span></div>`,
    css: `.l-orbit-triple{position:relative;width:var(--lc-size,44px);height:var(--lc-size,44px);animation:l-orbit-triple-r var(--lc-speed,1.4s) linear infinite}
.l-orbit-triple span{position:absolute;top:0;left:50%;width:20%;height:20%;margin-left:-10%;border-radius:50%;background:var(--lc-color,#5b8def);transform-origin:50% calc(var(--lc-size,44px)/2)}
.l-orbit-triple span:nth-child(1){transform:rotate(0deg)}
.l-orbit-triple span:nth-child(2){transform:rotate(120deg);opacity:.7}
.l-orbit-triple span:nth-child(3){transform:rotate(240deg);opacity:.45}
@keyframes l-orbit-triple-r{to{transform:rotate(1turn)}}`,
  },

  // ---------- wave ----------
  {
    id: 'wave-line', name: 'Sine Dots', category: 'wave', tags: ['sine', 'dots', 'translate'],
    variables: { '--lc-size': '10px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-wave-line"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-wave-line{display:flex;gap:calc(var(--lc-size,10px));align-items:center;height:calc(var(--lc-size,10px)*4)}
.l-wave-line span{width:var(--lc-size,10px);height:var(--lc-size,10px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-wave-line-w var(--lc-speed,1.2s) ease-in-out infinite}
.l-wave-line span:nth-child(2){animation-delay:.1s}
.l-wave-line span:nth-child(3){animation-delay:.2s}
.l-wave-line span:nth-child(4){animation-delay:.3s}
.l-wave-line span:nth-child(5){animation-delay:.4s}
@keyframes l-wave-line-w{0%,100%{transform:translateY(calc(var(--lc-size,10px)*-1))}50%{transform:translateY(var(--lc-size,10px))}}`,
  },

  // ---------- bars (fixed-palette, intentionally not themed) ----------
  {
    id: 'bars-rainbow', name: 'Rainbow Equalizer', category: 'bars', tags: ['equalizer', 'rainbow', 'multicolor'],
    variables: { '--lc-size': '8px', '--lc-height': '40px', '--lc-speed': '1s' },
    html: `<div class="l-bars-rainbow"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-bars-rainbow{display:flex;gap:calc(var(--lc-size,8px)/1.5);align-items:center;height:var(--lc-height,40px)}
.l-bars-rainbow span{width:var(--lc-size,8px);height:100%;border-radius:calc(var(--lc-size,8px)/2);animation:l-bars-rainbow-eq var(--lc-speed,1s) ease-in-out infinite}
.l-bars-rainbow span:nth-child(1){background:#f43f5e;animation-delay:0s}
.l-bars-rainbow span:nth-child(2){background:#f59e0b;animation-delay:.15s}
.l-bars-rainbow span:nth-child(3){background:#10b981;animation-delay:.3s}
.l-bars-rainbow span:nth-child(4){background:#06b6d4;animation-delay:.45s}
.l-bars-rainbow span:nth-child(5){background:#8b5cf6;animation-delay:.6s}
@keyframes l-bars-rainbow-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}`,
  },
]

runBatch(LOADERS, 'batch-05')
