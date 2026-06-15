// Seed batch 03 — original loaders: pulse, ripple, bars, skeleton, progress, svg, text.
import { runBatch } from '../seed-lib.mjs'

const LOADERS = [
  // ---------- pulse ----------
  {
    id: 'pulse-square', name: 'Pulsing Square', category: 'pulse', tags: ['square', 'scale', 'rotate'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-pulse-square"></div>`,
    css: `.l-pulse-square{width:var(--lc-size,40px);height:var(--lc-size,40px);background:var(--lc-color,#5b8def);border-radius:6px;animation:l-pulse-square-p var(--lc-speed,1.2s) ease-in-out infinite}
@keyframes l-pulse-square-p{0%,100%{transform:scale(.5) rotate(0);opacity:.6}50%{transform:scale(1) rotate(45deg);opacity:1}}`,
  },

  // ---------- ripple ----------
  {
    id: 'ripple-triple', name: 'Triple Ripple', category: 'ripple', tags: ['ripple', 'rings', 'expand'],
    variables: { '--lc-size': '60px', '--lc-color': '#5b8def', '--lc-speed': '2s' },
    html: `<div class="l-ripple-triple"><span></span><span></span><span></span></div>`,
    css: `.l-ripple-triple{position:relative;width:var(--lc-size,60px);height:var(--lc-size,60px)}
.l-ripple-triple span{position:absolute;top:50%;left:50%;border:2px solid var(--lc-color,#5b8def);border-radius:50%;transform:translate(-50%,-50%);animation:l-ripple-triple-r var(--lc-speed,2s) cubic-bezier(0,.2,.8,1) infinite}
.l-ripple-triple span:nth-child(2){animation-delay:calc(var(--lc-speed,2s)/-3)}
.l-ripple-triple span:nth-child(3){animation-delay:calc(var(--lc-speed,2s)/-1.5)}
@keyframes l-ripple-triple-r{0%{width:0;height:0;opacity:1}100%{width:var(--lc-size,60px);height:var(--lc-size,60px);opacity:0}}`,
  },

  // ---------- bars ----------
  {
    id: 'bars-flip', name: 'Flipping Bars', category: 'bars', tags: ['flip', 'scale', 'origin'],
    variables: { '--lc-size': '8px', '--lc-height': '36px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-bars-flip"><span></span><span></span><span></span><span></span></div>`,
    css: `.l-bars-flip{display:flex;gap:calc(var(--lc-size,8px));align-items:flex-end;height:var(--lc-height,36px)}
.l-bars-flip span{width:var(--lc-size,8px);height:100%;background:var(--lc-color,#5b8def);border-radius:2px;transform-origin:bottom;animation:l-bars-flip-f var(--lc-speed,1s) ease-in-out infinite}
.l-bars-flip span:nth-child(2){animation-delay:.12s}
.l-bars-flip span:nth-child(3){animation-delay:.24s}
.l-bars-flip span:nth-child(4){animation-delay:.36s}
@keyframes l-bars-flip-f{0%,100%{transform:scaleY(.25)}50%{transform:scaleY(1)}}`,
  },

  // ---------- skeleton ----------
  {
    id: 'skeleton-list', name: 'List Rows', category: 'skeleton', tags: ['list', 'shimmer', 'placeholder'],
    variables: { '--lc-size': '240px', '--lc-base': '#e2e8f0', '--lc-highlight': '#f1f5f9', '--lc-speed': '1.4s' },
    html: `<div class="l-skeleton-list"><div class="l-skeleton-list-row"><i></i><b></b></div><div class="l-skeleton-list-row"><i></i><b></b></div><div class="l-skeleton-list-row"><i></i><b></b></div></div>`,
    css: `.l-skeleton-list{width:var(--lc-size,240px);display:flex;flex-direction:column;gap:12px;--g:linear-gradient(90deg,var(--lc-base,#e2e8f0) 25%,var(--lc-highlight,#f1f5f9) 37%,var(--lc-base,#e2e8f0) 63%)}
.l-skeleton-list-row{display:flex;align-items:center;gap:10px}
.l-skeleton-list-row i{flex:0 0 auto;width:32px;height:32px;border-radius:8px;background:var(--g);background-size:400% 100%;animation:l-skeleton-list-sh var(--lc-speed,1.4s) ease infinite}
.l-skeleton-list-row b{flex:1;height:10px;border-radius:5px;background:var(--g);background-size:400% 100%;animation:l-skeleton-list-sh var(--lc-speed,1.4s) ease infinite}
@keyframes l-skeleton-list-sh{0%{background-position:100% 0}100%{background-position:-100% 0}}`,
  },
  {
    id: 'skeleton-profile', name: 'Profile Header', category: 'skeleton', tags: ['profile', 'shimmer', 'placeholder'],
    variables: { '--lc-size': '240px', '--lc-base': '#e2e8f0', '--lc-highlight': '#f1f5f9', '--lc-speed': '1.4s' },
    html: `<div class="l-skeleton-profile"><div class="l-skeleton-profile-banner"></div><div class="l-skeleton-profile-av"></div><div class="l-skeleton-profile-line"></div><div class="l-skeleton-profile-line"></div></div>`,
    css: `.l-skeleton-profile{width:var(--lc-size,240px);padding-bottom:8px;border-radius:12px;overflow:hidden;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.08);--g:linear-gradient(90deg,var(--lc-base,#e2e8f0) 25%,var(--lc-highlight,#f1f5f9) 37%,var(--lc-base,#e2e8f0) 63%)}
.l-skeleton-profile-banner{height:56px;background:var(--g);background-size:400% 100%;animation:l-skeleton-profile-sh var(--lc-speed,1.4s) ease infinite}
.l-skeleton-profile-av{width:48px;height:48px;border-radius:50%;margin:-24px 0 8px 16px;border:3px solid #fff;background:var(--g);background-size:400% 100%;animation:l-skeleton-profile-sh var(--lc-speed,1.4s) ease infinite}
.l-skeleton-profile-line{height:10px;border-radius:5px;margin:8px 16px;background:var(--g);background-size:400% 100%;animation:l-skeleton-profile-sh var(--lc-speed,1.4s) ease infinite}
.l-skeleton-profile-line:last-child{width:55%}
@keyframes l-skeleton-profile-sh{0%{background-position:100% 0}100%{background-position:-100% 0}}`,
  },

  // ---------- progress ----------
  {
    id: 'progress-dots', name: 'Segmented Dots', category: 'progress', tags: ['dots', 'segment', 'fill'],
    variables: { '--lc-size': '12px', '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-speed': '1.5s' },
    html: `<div class="l-progress-dots"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-progress-dots{display:flex;gap:7px}
.l-progress-dots span{width:var(--lc-size,12px);height:var(--lc-size,12px);border-radius:50%;background:var(--lc-track,#e2e8f0);animation:l-progress-dots-f var(--lc-speed,1.5s) infinite}
.l-progress-dots span:nth-child(2){animation-delay:.2s}
.l-progress-dots span:nth-child(3){animation-delay:.4s}
.l-progress-dots span:nth-child(4){animation-delay:.6s}
.l-progress-dots span:nth-child(5){animation-delay:.8s}
@keyframes l-progress-dots-f{0%,100%{background:var(--lc-track,#e2e8f0)}40%{background:var(--lc-color,#5b8def)}}`,
  },
  {
    id: 'progress-bar-gradient', name: 'Gradient Bar', category: 'progress', tags: ['bar', 'gradient', 'flow'],
    variables: { '--lc-size': '220px', '--lc-color': '#5b8def', '--lc-color-2': '#a855f7', '--lc-speed': '2s' },
    html: `<div class="l-progress-bar-gradient"></div>`,
    css: `.l-progress-bar-gradient{width:var(--lc-size,220px);height:8px;border-radius:4px;background:linear-gradient(90deg,var(--lc-color,#5b8def),var(--lc-color-2,#a855f7),var(--lc-color,#5b8def));background-size:200% 100%;animation:l-progress-bar-gradient-s var(--lc-speed,2s) linear infinite}
@keyframes l-progress-bar-gradient-s{to{background-position:-200% 0}}`,
  },

  // ---------- svg ----------
  {
    id: 'svg-circle-dash', name: 'SVG Dash Circle', category: 'svg', tech: 'svg', tags: ['dash', 'rotate', 'circle'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<svg class="l-svg-circle-dash" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-dasharray="100 26" stroke-linecap="round"/></svg>`,
    css: `.l-svg-circle-dash{width:var(--lc-size,48px);height:var(--lc-size,48px);color:var(--lc-color,#5b8def);animation:l-svg-circle-dash-r var(--lc-speed,1s) linear infinite}
@keyframes l-svg-circle-dash-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'svg-pulse-dots', name: 'SVG Pulse Dots', category: 'svg', tech: 'svg', tags: ['dots', 'pulse', 'scale'],
    variables: { '--lc-size': '60px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<svg class="l-svg-pulse-dots" viewBox="0 0 120 40"><circle cx="20" cy="20" r="12"/><circle cx="60" cy="20" r="12"/><circle cx="100" cy="20" r="12"/></svg>`,
    css: `.l-svg-pulse-dots{width:var(--lc-size,60px);height:calc(var(--lc-size,60px)/3);fill:var(--lc-color,#5b8def)}
.l-svg-pulse-dots circle{transform-box:fill-box;transform-origin:center;animation:l-svg-pulse-dots-p var(--lc-speed,1s) ease-in-out infinite}
.l-svg-pulse-dots circle:nth-child(2){animation-delay:.15s}
.l-svg-pulse-dots circle:nth-child(3){animation-delay:.3s}
@keyframes l-svg-pulse-dots-p{0%,100%{opacity:.3;transform:scale(.7)}50%{opacity:1;transform:scale(1)}}`,
  },

  // ---------- text ----------
  {
    id: 'text-wave', name: 'Waving Letters', category: 'text', tags: ['text', 'wave', 'letters'],
    variables: { '--lc-size': '20px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-text-wave"><span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span></div>`,
    css: `.l-text-wave{font:700 var(--lc-size,20px)/1 system-ui,sans-serif;color:var(--lc-color,#5b8def);display:inline-flex}
.l-text-wave span{animation:l-text-wave-w var(--lc-speed,1.2s) ease-in-out infinite}
.l-text-wave span:nth-child(2){animation-delay:.08s}
.l-text-wave span:nth-child(3){animation-delay:.16s}
.l-text-wave span:nth-child(4){animation-delay:.24s}
.l-text-wave span:nth-child(5){animation-delay:.32s}
.l-text-wave span:nth-child(6){animation-delay:.4s}
.l-text-wave span:nth-child(7){animation-delay:.48s}
@keyframes l-text-wave-w{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-45%)}}`,
  },
  {
    id: 'text-shimmer', name: 'Shimmer Text', category: 'text', tags: ['text', 'shimmer', 'gradient'],
    variables: { '--lc-size': '20px', '--lc-color': '#5b8def', '--lc-base': '#94a3b8', '--lc-speed': '1.6s' },
    html: `<div class="l-text-shimmer">Loading…</div>`,
    css: `.l-text-shimmer{font:700 var(--lc-size,20px)/1 system-ui,sans-serif;background:linear-gradient(90deg,var(--lc-base,#94a3b8) 25%,var(--lc-color,#5b8def) 50%,var(--lc-base,#94a3b8) 75%);background-size:200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:l-text-shimmer-s var(--lc-speed,1.6s) linear infinite}
@keyframes l-text-shimmer-s{to{background-position:-200% 0}}`,
  },
]

runBatch(LOADERS, 'batch-03')
