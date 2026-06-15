// Seed batch 14 — more original BRAND / favicon loaders (centered logo + label).
// Swap the .logo span for your own <img class="logo" src="/favicon.svg" alt="">.
import { runBatch } from '../seed-lib.mjs'

const tag = (...t) => ['combo', 'brand', 'favicon', ...t]
const LOGO = `width:46%;height:46%;border-radius:12px;background:linear-gradient(135deg,var(--lc-color,#5b8def),color-mix(in srgb,var(--lc-color,#5b8def) 60%,#1e293b));display:grid;place-items:center;object-fit:cover;box-shadow:0 3px 8px color-mix(in srgb,var(--lc-color,#5b8def) 30%,transparent)`
const MARK = `content:'';width:42%;height:42%;background:#fff;border-radius:5px`

const LOADERS = [
  {
    id: 'combo-favicon-orbit', name: 'Favicon + Orbit Dots', category: 'combo', tags: tag('orbit', 'logo', 'dots'),
    variables: { '--lc-size': '74px', '--lc-color': '#5b8def', '--lc-text': '#64748b', '--lc-speed': '1.4s' },
    html: `<div class="l-combo-favicon-orbit"><div class="ring"><span class="spin"><i></i><i></i><i></i></span><span class="logo"></span></div><small>loading</small></div>`,
    css: `.l-combo-favicon-orbit{display:flex;flex-direction:column;align-items:center;gap:14px;font:600 13px/1 system-ui,sans-serif;color:var(--lc-text,#64748b);letter-spacing:.08em;text-transform:lowercase}
.l-combo-favicon-orbit .ring{position:relative;width:var(--lc-size,74px);height:var(--lc-size,74px);display:grid;place-items:center}
.l-combo-favicon-orbit .spin{position:absolute;inset:0;animation:l-combo-favicon-orbit-r var(--lc-speed,1.4s) linear infinite}
.l-combo-favicon-orbit .spin i{position:absolute;top:0;left:50%;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:var(--lc-color,#5b8def);transform-origin:50% calc(var(--lc-size,74px)/2)}
.l-combo-favicon-orbit .spin i:nth-child(1){transform:rotate(0deg)}
.l-combo-favicon-orbit .spin i:nth-child(2){transform:rotate(120deg);opacity:.7}
.l-combo-favicon-orbit .spin i:nth-child(3){transform:rotate(240deg);opacity:.4}
.l-combo-favicon-orbit .logo{position:relative;${LOGO}}
.l-combo-favicon-orbit .logo::after{${MARK}}
@keyframes l-combo-favicon-orbit-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'combo-favicon-conic', name: 'Favicon + Conic Ring', category: 'combo', tags: tag('conic', 'logo', 'text'),
    variables: { '--lc-size': '74px', '--lc-color': '#5b8def', '--lc-text': '#64748b', '--lc-speed': '1s' },
    html: `<div class="l-combo-favicon-conic"><div class="ring"><span class="arc"></span><span class="logo"></span></div><small>loading</small></div>`,
    css: `.l-combo-favicon-conic{display:flex;flex-direction:column;align-items:center;gap:14px;font:600 13px/1 system-ui,sans-serif;color:var(--lc-text,#64748b);letter-spacing:.08em;text-transform:lowercase}
.l-combo-favicon-conic .ring{position:relative;width:var(--lc-size,74px);height:var(--lc-size,74px);display:grid;place-items:center}
.l-combo-favicon-conic .arc{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 90deg,transparent,var(--lc-color,#5b8def));-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0);mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0);animation:l-combo-favicon-conic-r var(--lc-speed,1s) linear infinite}
.l-combo-favicon-conic .logo{position:relative;${LOGO}}
.l-combo-favicon-conic .logo::after{${MARK}}
@keyframes l-combo-favicon-conic-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'combo-favicon-dual-ring', name: 'Favicon + Dual Ring', category: 'combo', tags: tag('spinner', 'logo', 'dual'),
    variables: { '--lc-size': '76px', '--lc-color': '#5b8def', '--lc-text': '#64748b', '--lc-speed': '1.1s' },
    html: `<div class="l-combo-favicon-dual-ring"><div class="ring"><span class="logo"></span></div><small>loading</small></div>`,
    css: `.l-combo-favicon-dual-ring{display:flex;flex-direction:column;align-items:center;gap:14px;font:600 13px/1 system-ui,sans-serif;color:var(--lc-text,#64748b);letter-spacing:.08em;text-transform:lowercase}
.l-combo-favicon-dual-ring .ring{position:relative;width:var(--lc-size,76px);height:var(--lc-size,76px);display:grid;place-items:center}
.l-combo-favicon-dual-ring .ring::before,.l-combo-favicon-dual-ring .ring::after{content:'';position:absolute;border-radius:50%;border:3px solid transparent}
.l-combo-favicon-dual-ring .ring::before{inset:0;border-top-color:var(--lc-color,#5b8def);animation:l-combo-favicon-dual-ring-r var(--lc-speed,1.1s) linear infinite}
.l-combo-favicon-dual-ring .ring::after{inset:7px;border-bottom-color:var(--lc-color,#5b8def);animation:l-combo-favicon-dual-ring-r var(--lc-speed,1.1s) linear infinite reverse}
.l-combo-favicon-dual-ring .logo{position:relative;${LOGO}}
.l-combo-favicon-dual-ring .logo::after{${MARK}}
@keyframes l-combo-favicon-dual-ring-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'combo-favicon-progress', name: 'Favicon + Progress %', category: 'combo', tech: 'css+js', tags: tag('ring', 'logo', 'percent'),
    variables: { '--lc-size': '74px', '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-text': '#64748b' },
    html: `<div class="l-combo-favicon-progress"><div class="ring"><span class="prog"></span><span class="logo"></span></div><small>loading <b class="pct">0%</b></small></div>`,
    css: `.l-combo-favicon-progress{display:flex;flex-direction:column;align-items:center;gap:13px;font:600 12px/1 system-ui,sans-serif;color:var(--lc-text,#64748b);letter-spacing:.04em}
.l-combo-favicon-progress .ring{position:relative;width:var(--lc-size,74px);height:var(--lc-size,74px);display:grid;place-items:center}
.l-combo-favicon-progress .prog{position:absolute;inset:0;border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def) var(--p,0%),var(--lc-track,#e2e8f0) 0);-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 5px),#000 0);mask:radial-gradient(farthest-side,#0000 calc(100% - 5px),#000 0)}
.l-combo-favicon-progress .logo{position:relative;${LOGO}}
.l-combo-favicon-progress .logo::after{${MARK}}
.l-combo-favicon-progress .pct{color:var(--lc-color,#5b8def);font-family:ui-monospace,monospace}
@property --p{syntax:'<percentage>';inherits:false;initial-value:0%}`,
    js: `var r=root.querySelector('.prog');var n=root.querySelector('.pct');var v=0;root._lcTimer=setInterval(function(){v=(v+1)%101;r.style.setProperty('--p',v+'%');n.textContent=v+'%';},28);`,
  },
  {
    id: 'combo-favicon-name', name: 'App Splash (Favicon + Name)', category: 'combo', tags: tag('logo', 'text', 'skeleton'),
    variables: { '--lc-color': '#5b8def', '--lc-base': '#e2e8f0', '--lc-highlight': '#f1f5f9', '--lc-text': '#334155', '--lc-speed': '1.6s' },
    html: `<div class="l-combo-favicon-name"><span class="logo"></span><strong>MyApp</strong><span class="sub"></span></div>`,
    css: `.l-combo-favicon-name{display:flex;flex-direction:column;align-items:center;gap:12px;font-family:system-ui,sans-serif}
.l-combo-favicon-name .logo{width:56px;height:56px;border-radius:15px;background:linear-gradient(135deg,var(--lc-color,#5b8def),color-mix(in srgb,var(--lc-color,#5b8def) 60%,#1e293b));display:grid;place-items:center;object-fit:cover;box-shadow:0 4px 12px color-mix(in srgb,var(--lc-color,#5b8def) 35%,transparent);animation:l-combo-favicon-name-p var(--lc-speed,1.6s) ease-in-out infinite}
.l-combo-favicon-name .logo::after{${MARK};border-radius:6px}
.l-combo-favicon-name strong{font-size:15px;color:var(--lc-text,#334155)}
.l-combo-favicon-name .sub{width:96px;height:8px;border-radius:4px;background:linear-gradient(90deg,var(--lc-base,#e2e8f0) 25%,var(--lc-highlight,#f1f5f9) 37%,var(--lc-base,#e2e8f0) 63%);background-size:400% 100%;animation:l-combo-favicon-name-sh 1.4s ease infinite}
@keyframes l-combo-favicon-name-p{0%,100%{transform:scale(.94)}50%{transform:scale(1)}}
@keyframes l-combo-favicon-name-sh{0%{background-position:100% 0}100%{background-position:-100% 0}}`,
  },
  {
    id: 'combo-favicon-bounce', name: 'Favicon Bounce + Dots', category: 'combo', tags: tag('bounce', 'logo', 'dots'),
    variables: { '--lc-color': '#5b8def', '--lc-text': '#64748b', '--lc-speed': '.9s' },
    html: `<div class="l-combo-favicon-bounce"><span class="logo"></span><span class="dots"><i></i><i></i><i></i></span><small>loading</small></div>`,
    css: `.l-combo-favicon-bounce{display:flex;flex-direction:column;align-items:center;gap:11px;font:600 12px/1 system-ui,sans-serif;color:var(--lc-text,#64748b);letter-spacing:.06em;text-transform:lowercase}
.l-combo-favicon-bounce .logo{width:48px;height:48px;border-radius:13px;background:linear-gradient(135deg,var(--lc-color,#5b8def),color-mix(in srgb,var(--lc-color,#5b8def) 60%,#1e293b));display:grid;place-items:center;object-fit:cover;box-shadow:0 6px 10px -4px color-mix(in srgb,var(--lc-color,#5b8def) 45%,transparent);animation:l-combo-favicon-bounce-b var(--lc-speed,.9s) cubic-bezier(.5,.05,.5,.95) infinite alternate}
.l-combo-favicon-bounce .logo::after{${MARK};border-radius:5px}
.l-combo-favicon-bounce .dots{display:flex;gap:5px}
.l-combo-favicon-bounce .dots i{width:6px;height:6px;border-radius:50%;background:var(--lc-color,#5b8def);animation:l-combo-favicon-bounce-d 1s ease-in-out infinite}
.l-combo-favicon-bounce .dots i:nth-child(2){animation-delay:.16s}
.l-combo-favicon-bounce .dots i:nth-child(3){animation-delay:.32s}
@keyframes l-combo-favicon-bounce-b{0%{transform:translateY(-5px)}100%{transform:translateY(5px)}}
@keyframes l-combo-favicon-bounce-d{0%,80%,100%{transform:scale(.5);opacity:.5}40%{transform:scale(1);opacity:1}}`,
  },
]

runBatch(LOADERS, 'batch-14')
