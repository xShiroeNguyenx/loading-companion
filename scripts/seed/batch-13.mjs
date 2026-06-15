// Seed batch 13 — original BRAND / favicon loaders: a big ring around a centered
// logo/favicon slot with a label below. Originals (MIT, this project).
//
// The centered ".logo" is a placeholder app-icon. Swap it for your own favicon:
//   <img class="logo" src="/favicon.svg" alt="">   (the .logo rules size & round it)
import { runBatch } from '../seed-lib.mjs'

const tag = (...t) => ['combo', 'brand', 'favicon', ...t]
const LOGO = `width:46%;height:46%;border-radius:12px;background:linear-gradient(135deg,var(--lc-color,#5b8def),color-mix(in srgb,var(--lc-color,#5b8def) 60%,#1e293b));display:grid;place-items:center;object-fit:cover;box-shadow:0 3px 8px color-mix(in srgb,var(--lc-color,#5b8def) 30%,transparent)`

const LOADERS = [
  {
    id: 'combo-favicon-loading', name: 'Favicon + Loading', category: 'combo', tags: tag('spinner', 'logo', 'text'),
    variables: { '--lc-size': '74px', '--lc-color': '#5b8def', '--lc-text': '#64748b', '--lc-speed': '1s' },
    html: `<div class="l-combo-favicon-loading"><div class="ring"><span class="logo"></span></div><small>loading</small></div>`,
    css: `.l-combo-favicon-loading{display:flex;flex-direction:column;align-items:center;gap:14px;font:600 13px/1 system-ui,sans-serif;color:var(--lc-text,#64748b);letter-spacing:.08em;text-transform:lowercase}
.l-combo-favicon-loading .ring{position:relative;width:var(--lc-size,74px);height:var(--lc-size,74px);display:grid;place-items:center}
.l-combo-favicon-loading .ring::before{content:'';position:absolute;inset:0;border:4px solid color-mix(in srgb,var(--lc-color,#5b8def) 18%,transparent);border-top-color:var(--lc-color,#5b8def);border-radius:50%;animation:l-combo-favicon-loading-r var(--lc-speed,1s) linear infinite}
.l-combo-favicon-loading .logo{${LOGO}}
.l-combo-favicon-loading .logo::after{content:'';width:42%;height:42%;background:#fff;border-radius:5px}
@keyframes l-combo-favicon-loading-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'combo-favicon-dots', name: 'Favicon + Loading Dots', category: 'combo', tags: tag('spinner', 'logo', 'dots'),
    variables: { '--lc-size': '74px', '--lc-color': '#5b8def', '--lc-text': '#64748b', '--lc-speed': '1s' },
    html: `<div class="l-combo-favicon-dots"><div class="ring"><span class="logo"></span></div><small>loading<i>.</i><i>.</i><i>.</i></small></div>`,
    css: `.l-combo-favicon-dots{display:flex;flex-direction:column;align-items:center;gap:14px;font:600 13px/1 system-ui,sans-serif;color:var(--lc-text,#64748b);letter-spacing:.06em}
.l-combo-favicon-dots .ring{position:relative;width:var(--lc-size,74px);height:var(--lc-size,74px);display:grid;place-items:center}
.l-combo-favicon-dots .ring::before{content:'';position:absolute;inset:0;border:4px solid transparent;border-top-color:var(--lc-color,#5b8def);border-bottom-color:var(--lc-color,#5b8def);border-radius:50%;animation:l-combo-favicon-dots-r var(--lc-speed,1s) cubic-bezier(.5,0,.5,1) infinite}
.l-combo-favicon-dots .logo{${LOGO}}
.l-combo-favicon-dots .logo::after{content:'';width:42%;height:42%;background:#fff;border-radius:5px}
.l-combo-favicon-dots small i{opacity:0;animation:l-combo-favicon-dots-d 1.4s infinite}
.l-combo-favicon-dots small i:nth-child(2){animation-delay:.2s}
.l-combo-favicon-dots small i:nth-child(3){animation-delay:.4s}
@keyframes l-combo-favicon-dots-r{to{transform:rotate(1turn)}}
@keyframes l-combo-favicon-dots-d{0%,100%{opacity:0}40%,60%{opacity:1}}`,
  },
  {
    id: 'combo-favicon-pulse', name: 'Favicon + Pulse', category: 'combo', tags: tag('pulse', 'logo', 'text'),
    variables: { '--lc-size': '64px', '--lc-color': '#5b8def', '--lc-text': '#64748b', '--lc-speed': '1.8s' },
    html: `<div class="l-combo-favicon-pulse"><div class="ring"><span class="logo"></span></div><small>connecting…</small></div>`,
    css: `.l-combo-favicon-pulse{display:flex;flex-direction:column;align-items:center;gap:16px;font:600 13px/1 system-ui,sans-serif;color:var(--lc-text,#64748b)}
.l-combo-favicon-pulse .ring{position:relative;width:var(--lc-size,64px);height:var(--lc-size,64px);display:grid;place-items:center}
.l-combo-favicon-pulse .ring::before,.l-combo-favicon-pulse .ring::after{content:'';position:absolute;inset:0;border:2px solid var(--lc-color,#5b8def);border-radius:50%;animation:l-combo-favicon-pulse-p var(--lc-speed,1.8s) ease-out infinite}
.l-combo-favicon-pulse .ring::after{animation-delay:calc(var(--lc-speed,1.8s)/-2)}
.l-combo-favicon-pulse .logo{position:relative;z-index:1;${LOGO}}
.l-combo-favicon-pulse .logo::after{content:'';width:42%;height:42%;background:#fff;border-radius:5px}
@keyframes l-combo-favicon-pulse-p{0%{transform:scale(.7);opacity:.8}100%{transform:scale(1.5);opacity:0}}`,
  },
  {
    id: 'combo-favicon-bar', name: 'Favicon Splash + Bar', category: 'combo', tags: tag('spinner', 'logo', 'bar'),
    variables: { '--lc-size': '70px', '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-text': '#64748b', '--lc-speed': '1s' },
    html: `<div class="l-combo-favicon-bar"><div class="ring"><span class="logo"></span></div><small>loading</small><span class="bar"><b></b></span></div>`,
    css: `.l-combo-favicon-bar{display:flex;flex-direction:column;align-items:center;gap:12px;font:600 12px/1 system-ui,sans-serif;color:var(--lc-text,#64748b);letter-spacing:.08em;text-transform:lowercase}
.l-combo-favicon-bar .ring{position:relative;width:var(--lc-size,70px);height:var(--lc-size,70px);display:grid;place-items:center}
.l-combo-favicon-bar .ring::before{content:'';position:absolute;inset:0;border:4px solid color-mix(in srgb,var(--lc-color,#5b8def) 18%,transparent);border-top-color:var(--lc-color,#5b8def);border-radius:50%;animation:l-combo-favicon-bar-r var(--lc-speed,1s) linear infinite}
.l-combo-favicon-bar .logo{${LOGO}}
.l-combo-favicon-bar .logo::after{content:'';width:42%;height:42%;background:#fff;border-radius:5px}
.l-combo-favicon-bar .bar{position:relative;width:120px;height:4px;border-radius:3px;background:var(--lc-track,#e2e8f0);overflow:hidden}
.l-combo-favicon-bar .bar b{position:absolute;top:0;left:-40%;height:100%;width:40%;border-radius:3px;background:var(--lc-color,#5b8def);animation:l-combo-favicon-bar-s 1.4s cubic-bezier(.4,0,.2,1) infinite}
@keyframes l-combo-favicon-bar-r{to{transform:rotate(1turn)}}
@keyframes l-combo-favicon-bar-s{0%{left:-40%}100%{left:100%}}`,
  },
]

runBatch(LOADERS, 'batch-13')
