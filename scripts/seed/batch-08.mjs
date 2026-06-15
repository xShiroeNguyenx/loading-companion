// Seed batch 08 — original loaders across categories (new distinct designs).
import { runBatch } from '../seed-lib.mjs'

const T = 'calc(var(--lc-size,46px)/8)'

const LOADERS = [
  {
    id: 'dots-typing-bubble', name: 'Typing Bubble', category: 'dots', tags: ['typing', 'chat', 'bubble'],
    variables: { '--lc-size': '9px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-dots-typing-bubble"><span></span><span></span><span></span></div>`,
    css: `.l-dots-typing-bubble{display:inline-flex;gap:5px;align-items:center;padding:10px 14px;background:color-mix(in srgb,var(--lc-color,#5b8def) 14%,#fff);border-radius:14px}
.l-dots-typing-bubble span{width:var(--lc-size,9px);height:var(--lc-size,9px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-dots-typing-bubble-b var(--lc-speed,1.4s) infinite}
.l-dots-typing-bubble span:nth-child(2){animation-delay:.2s}
.l-dots-typing-bubble span:nth-child(3){animation-delay:.4s}
@keyframes l-dots-typing-bubble-b{0%,60%,100%{opacity:.3;transform:translateY(0)}30%{opacity:1;transform:translateY(-3px)}}`,
  },
  {
    id: 'dots-stretch', name: 'Stretching Dots', category: 'dots', tags: ['stretch', 'scale-x', 'three'],
    variables: { '--lc-size': '12px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-dots-stretch"><span></span><span></span><span></span></div>`,
    css: `.l-dots-stretch{display:flex;gap:8px;align-items:center}
.l-dots-stretch span{width:var(--lc-size,12px);height:var(--lc-size,12px);border-radius:6px;background:var(--lc-color,#5b8def);animation:l-dots-stretch-s var(--lc-speed,1s) ease-in-out infinite}
.l-dots-stretch span:nth-child(2){animation-delay:.15s}
.l-dots-stretch span:nth-child(3){animation-delay:.3s}
@keyframes l-dots-stretch-s{0%,100%{transform:scaleX(1)}50%{transform:scaleX(2.2)}}`,
  },
  {
    id: 'pulse-concentric', name: 'Concentric Pulse', category: 'pulse', tags: ['discs', 'expand', 'fade'],
    variables: { '--lc-size': '46px', '--lc-color': '#5b8def', '--lc-speed': '1.8s' },
    html: `<div class="l-pulse-concentric"><span></span><span></span><span></span></div>`,
    css: `.l-pulse-concentric{position:relative;width:var(--lc-size,46px);height:var(--lc-size,46px)}
.l-pulse-concentric span{position:absolute;inset:0;border-radius:50%;background:var(--lc-color,#5b8def);animation:l-pulse-concentric-p var(--lc-speed,1.8s) ease-out infinite}
.l-pulse-concentric span:nth-child(2){animation-delay:calc(var(--lc-speed,1.8s)/-3)}
.l-pulse-concentric span:nth-child(3){animation-delay:calc(var(--lc-speed,1.8s)/-1.5)}
@keyframes l-pulse-concentric-p{0%{transform:scale(0);opacity:.6}100%{transform:scale(1);opacity:0}}`,
  },
  {
    id: 'bounce-bar', name: 'Bouncing Bar', category: 'bounce', tags: ['bar', 'squash', 'single'],
    variables: { '--lc-size': '12px', '--lc-color': '#5b8def', '--lc-speed': '.6s' },
    html: `<div class="l-bounce-bar"></div>`,
    css: `.l-bounce-bar{width:var(--lc-size,12px);height:36px;border-radius:6px;background:var(--lc-color,#5b8def);animation:l-bounce-bar-b var(--lc-speed,.6s) cubic-bezier(.5,.05,.5,.95) infinite alternate}
@keyframes l-bounce-bar-b{0%{transform:translateY(-40%) scaleY(1.1)}100%{transform:translateY(40%) scaleY(.85)}}`,
  },
  {
    id: 'bars-build', name: 'Building Bars', category: 'bars', tags: ['build', 'scale', 'sequence'],
    variables: { '--lc-size': '7px', '--lc-height': '36px', '--lc-color': '#5b8def', '--lc-speed': '1.6s' },
    html: `<div class="l-bars-build"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-bars-build{display:flex;gap:5px;align-items:flex-end;height:var(--lc-height,36px)}
.l-bars-build span{width:var(--lc-size,7px);height:100%;border-radius:2px;background:var(--lc-color,#5b8def);transform-origin:bottom;animation:l-bars-build-b var(--lc-speed,1.6s) ease-in-out infinite}
.l-bars-build span:nth-child(2){animation-delay:.12s}
.l-bars-build span:nth-child(3){animation-delay:.24s}
.l-bars-build span:nth-child(4){animation-delay:.36s}
.l-bars-build span:nth-child(5){animation-delay:.48s}
@keyframes l-bars-build-b{0%,15%{transform:scaleY(.15)}45%,70%{transform:scaleY(1)}100%{transform:scaleY(.15)}}`,
  },
  {
    id: 'spinner-dual-counter', name: 'Counter Arcs', category: 'spinner', tags: ['arcs', 'counter', 'rotate'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-spinner-dual-counter"><span></span><span></span></div>`,
    css: `.l-spinner-dual-counter{position:relative;width:var(--lc-size,48px);height:var(--lc-size,48px)}
.l-spinner-dual-counter span{position:absolute;border-radius:50%;border:4px solid transparent}
.l-spinner-dual-counter span:first-child{inset:0;border-top-color:var(--lc-color,#5b8def);animation:l-spinner-dual-counter-r var(--lc-speed,1s) linear infinite}
.l-spinner-dual-counter span:last-child{inset:9px;border-bottom-color:var(--lc-color,#5b8def);animation:l-spinner-dual-counter-r var(--lc-speed,1s) linear infinite reverse}
@keyframes l-spinner-dual-counter-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'ring-quad-segment', name: 'Quad Segment Ring', category: 'ring', tags: ['segments', 'conic', 'rotate'],
    variables: { '--lc-size': '46px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-ring-quad-segment"></div>`,
    css: `.l-ring-quad-segment{width:var(--lc-size,46px);height:var(--lc-size,46px);border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def) 0 25%,transparent 0 50%,var(--lc-color,#5b8def) 0 75%,transparent 0);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - ${T}),#000 0);mask:radial-gradient(farthest-side,transparent calc(100% - ${T}),#000 0);animation:l-ring-quad-segment-r var(--lc-speed,1s) linear infinite}
@keyframes l-ring-quad-segment-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'flip-coin-row', name: 'Flipping Coins', category: 'flip', tags: ['coins', 'rotate-y', 'three'],
    variables: { '--lc-size': '20px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-flip-coin-row"><span></span><span></span><span></span></div>`,
    css: `.l-flip-coin-row{display:flex;gap:8px;perspective:240px}
.l-flip-coin-row span{width:var(--lc-size,20px);height:var(--lc-size,20px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-flip-coin-row-f var(--lc-speed,1.4s) ease-in-out infinite}
.l-flip-coin-row span:nth-child(2){animation-delay:.15s}
.l-flip-coin-row span:nth-child(3){animation-delay:.3s}
@keyframes l-flip-coin-row-f{0%,100%{transform:rotateY(0)}50%{transform:rotateY(180deg)}}`,
  },
  {
    id: 'svg-dash-dual', name: 'SVG Dual Dash', category: 'svg', tech: 'svg', tags: ['dash', 'rotate', 'two-arc'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<svg class="l-svg-dash-dual" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="60 65" stroke-linecap="round"/></svg>`,
    css: `.l-svg-dash-dual{width:var(--lc-size,48px);height:var(--lc-size,48px);color:var(--lc-color,#5b8def);animation:l-svg-dash-dual-r var(--lc-speed,1s) linear infinite}
@keyframes l-svg-dash-dual-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'text-underline', name: 'Underline Sweep', category: 'text', tags: ['text', 'underline', 'sweep'],
    variables: { '--lc-size': '18px', '--lc-color': '#5b8def', '--lc-speed': '1.6s' },
    html: `<div class="l-text-underline">Loading</div>`,
    css: `.l-text-underline{position:relative;display:inline-block;font:600 var(--lc-size,18px)/1.5 system-ui,sans-serif;color:var(--lc-color,#5b8def)}
.l-text-underline::after{content:'';position:absolute;left:0;bottom:0;width:100%;height:2px;background:var(--lc-color,#5b8def);transform:scaleX(0);transform-origin:left;animation:l-text-underline-u var(--lc-speed,1.6s) ease-in-out infinite}
@keyframes l-text-underline-u{0%{transform:scaleX(0);transform-origin:left}50%{transform:scaleX(1);transform-origin:left}50.1%{transform-origin:right}100%{transform:scaleX(0);transform-origin:right}}`,
  },
]

runBatch(LOADERS, 'batch-08')
