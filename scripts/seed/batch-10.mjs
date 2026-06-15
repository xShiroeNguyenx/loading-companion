// Seed batch 10 — original COMBO loaders (two loaders combined into one).
// e.g. spinner + text, ring + percent, skeleton + spinner. Originals (MIT, this project).
import { runBatch } from '../seed-lib.mjs'

const tag = (...t) => ['combo', ...t]

const LOADERS = [
  {
    id: 'combo-spinner-text', name: 'Spinner + Text', category: 'combo', tags: tag('spinner', 'text', 'ellipsis'),
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-text': '#64748b', '--lc-speed': '1s' },
    html: `<div class="l-combo-spinner-text"><span class="l-combo-spinner-text-s"></span><span class="l-combo-spinner-text-t">Loading<i>.</i><i>.</i><i>.</i></span></div>`,
    css: `.l-combo-spinner-text{display:flex;flex-direction:column;align-items:center;gap:12px;font:600 14px/1 system-ui,sans-serif;color:var(--lc-text,#64748b)}
.l-combo-spinner-text-s{width:var(--lc-size,40px);height:var(--lc-size,40px);border:4px solid color-mix(in srgb,var(--lc-color,#5b8def) 22%,transparent);border-top-color:var(--lc-color,#5b8def);border-radius:50%;animation:l-combo-spinner-text-r var(--lc-speed,1s) linear infinite}
.l-combo-spinner-text-t i{opacity:0;animation:l-combo-spinner-text-d 1.4s infinite}
.l-combo-spinner-text-t i:nth-child(2){animation-delay:.2s}
.l-combo-spinner-text-t i:nth-child(3){animation-delay:.4s}
@keyframes l-combo-spinner-text-r{to{transform:rotate(1turn)}}
@keyframes l-combo-spinner-text-d{0%,100%{opacity:0}40%,60%{opacity:1}}`,
  },
  {
    id: 'combo-spinner-inline', name: 'Spinner + Label (inline)', category: 'combo', tags: tag('spinner', 'text', 'inline'),
    variables: { '--lc-size': '20px', '--lc-color': '#5b8def', '--lc-text': '#64748b', '--lc-speed': '.9s' },
    html: `<div class="l-combo-spinner-inline"><span class="l-combo-spinner-inline-s"></span><span>Loading…</span></div>`,
    css: `.l-combo-spinner-inline{display:inline-flex;align-items:center;gap:10px;font:600 14px/1 system-ui,sans-serif;color:var(--lc-text,#64748b)}
.l-combo-spinner-inline-s{width:var(--lc-size,20px);height:var(--lc-size,20px);border:3px solid color-mix(in srgb,var(--lc-color,#5b8def) 22%,transparent);border-top-color:var(--lc-color,#5b8def);border-radius:50%;animation:l-combo-spinner-inline-r var(--lc-speed,.9s) linear infinite}
@keyframes l-combo-spinner-inline-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'combo-dots-text', name: 'Dots + Text', category: 'combo', tags: tag('dots', 'text'),
    variables: { '--lc-size': '10px', '--lc-color': '#5b8def', '--lc-text': '#64748b', '--lc-speed': '.6s' },
    html: `<div class="l-combo-dots-text"><span class="l-combo-dots-text-d"><i></i><i></i><i></i></span><span>Please wait</span></div>`,
    css: `.l-combo-dots-text{display:flex;flex-direction:column;align-items:center;gap:12px;font:600 13px/1 system-ui,sans-serif;color:var(--lc-text,#64748b)}
.l-combo-dots-text-d{display:flex;gap:6px}
.l-combo-dots-text-d i{width:var(--lc-size,10px);height:var(--lc-size,10px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-combo-dots-text-b var(--lc-speed,.6s) ease-in-out infinite alternate}
.l-combo-dots-text-d i:nth-child(2){animation-delay:.15s}
.l-combo-dots-text-d i:nth-child(3){animation-delay:.3s}
@keyframes l-combo-dots-text-b{from{transform:translateY(0);opacity:.5}to{transform:translateY(-8px);opacity:1}}`,
  },
  {
    id: 'combo-bars-text', name: 'Equalizer + Text', category: 'combo', tags: tag('bars', 'text', 'audio'),
    variables: { '--lc-color': '#5b8def', '--lc-text': '#64748b', '--lc-speed': '1s' },
    html: `<div class="l-combo-bars-text"><span class="l-combo-bars-text-b"><i></i><i></i><i></i><i></i></span><span>Buffering…</span></div>`,
    css: `.l-combo-bars-text{display:flex;flex-direction:column;align-items:center;gap:12px;font:600 13px/1 system-ui,sans-serif;color:var(--lc-text,#64748b)}
.l-combo-bars-text-b{display:flex;gap:4px;align-items:center;height:28px}
.l-combo-bars-text-b i{width:5px;height:100%;border-radius:3px;background:var(--lc-color,#5b8def);animation:l-combo-bars-text-e var(--lc-speed,1s) ease-in-out infinite}
.l-combo-bars-text-b i:nth-child(2){animation-delay:.15s}
.l-combo-bars-text-b i:nth-child(3){animation-delay:.3s}
.l-combo-bars-text-b i:nth-child(4){animation-delay:.45s}
@keyframes l-combo-bars-text-e{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}`,
  },
  {
    id: 'combo-spinner-subtext', name: 'Spinner + Title + Subtitle', category: 'combo', tags: tag('spinner', 'text', 'two-line'),
    variables: { '--lc-size': '38px', '--lc-color': '#5b8def', '--lc-text': '#334155', '--lc-speed': '1s' },
    html: `<div class="l-combo-spinner-subtext"><span class="l-combo-spinner-subtext-s"></span><strong>Loading data</strong><small>This may take a moment</small></div>`,
    css: `.l-combo-spinner-subtext{display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center;font-family:system-ui,sans-serif;color:var(--lc-text,#334155)}
.l-combo-spinner-subtext-s{width:var(--lc-size,38px);height:var(--lc-size,38px);margin-bottom:4px;border:4px solid color-mix(in srgb,var(--lc-color,#5b8def) 22%,transparent);border-top-color:var(--lc-color,#5b8def);border-radius:50%;animation:l-combo-spinner-subtext-r var(--lc-speed,1s) linear infinite}
.l-combo-spinner-subtext strong{font-size:14px}
.l-combo-spinner-subtext small{font-size:11px;opacity:.6}
@keyframes l-combo-spinner-subtext-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'combo-button', name: 'Button + Spinner', category: 'combo', tags: tag('spinner', 'button', 'text'),
    variables: { '--lc-color': '#5b8def', '--lc-speed': '.8s' },
    html: `<button class="l-combo-button" type="button" disabled><span class="l-combo-button-s"></span>Submitting…</button>`,
    css: `.l-combo-button{display:inline-flex;align-items:center;gap:9px;padding:11px 20px;border:0;border-radius:9px;background:var(--lc-color,#5b8def);color:#fff;font:600 14px/1 system-ui,sans-serif;cursor:progress}
.l-combo-button-s{width:16px;height:16px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:l-combo-button-r var(--lc-speed,.8s) linear infinite}
@keyframes l-combo-button-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'combo-skeleton-spinner', name: 'Skeleton + Spinner', category: 'combo', tags: tag('skeleton', 'spinner', 'overlay'),
    variables: { '--lc-color': '#5b8def', '--lc-base': '#e2e8f0', '--lc-highlight': '#f1f5f9', '--lc-speed': '1.4s' },
    html: `<div class="l-combo-skeleton-spinner"><span class="l-combo-skeleton-spinner-s"></span></div>`,
    css: `.l-combo-skeleton-spinner{display:grid;place-items:center;width:200px;height:120px;border-radius:10px;background:linear-gradient(90deg,var(--lc-base,#e2e8f0) 25%,var(--lc-highlight,#f1f5f9) 37%,var(--lc-base,#e2e8f0) 63%);background-size:400% 100%;animation:l-combo-skeleton-spinner-sh var(--lc-speed,1.4s) ease infinite}
.l-combo-skeleton-spinner-s{width:30px;height:30px;border:3px solid color-mix(in srgb,var(--lc-color,#5b8def) 25%,transparent);border-top-color:var(--lc-color,#5b8def);border-radius:50%;animation:l-combo-skeleton-spinner-r .9s linear infinite}
@keyframes l-combo-skeleton-spinner-sh{0%{background-position:100% 0}100%{background-position:-100% 0}}
@keyframes l-combo-skeleton-spinner-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'combo-pulse-spinner', name: 'Pulse Halo + Spinner', category: 'combo', tags: tag('pulse', 'spinner', 'layered'),
    variables: { '--lc-size': '50px', '--lc-color': '#5b8def', '--lc-speed': '.9s' },
    html: `<div class="l-combo-pulse-spinner"><span class="l-combo-pulse-spinner-s"></span></div>`,
    css: `.l-combo-pulse-spinner{position:relative;width:var(--lc-size,50px);height:var(--lc-size,50px);display:grid;place-items:center}
.l-combo-pulse-spinner::before{content:'';position:absolute;inset:0;border-radius:50%;background:var(--lc-color,#5b8def);animation:l-combo-pulse-spinner-p 1.6s ease-in-out infinite}
.l-combo-pulse-spinner-s{position:relative;width:60%;height:60%;border:3px solid color-mix(in srgb,var(--lc-color,#5b8def) 25%,transparent);border-top-color:var(--lc-color,#5b8def);border-radius:50%;animation:l-combo-pulse-spinner-r var(--lc-speed,.9s) linear infinite}
@keyframes l-combo-pulse-spinner-p{0%,100%{transform:scale(.6);opacity:.25}50%{transform:scale(1);opacity:.08}}
@keyframes l-combo-pulse-spinner-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'combo-dots-bar', name: 'Dots + Bar', category: 'combo', tags: tag('dots', 'progress', 'stacked'),
    variables: { '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-speed': '1.4s' },
    html: `<div class="l-combo-dots-bar"><span class="l-combo-dots-bar-d"><i></i><i></i><i></i></span><span class="l-combo-dots-bar-t"><b></b></span></div>`,
    css: `.l-combo-dots-bar{display:flex;flex-direction:column;align-items:center;gap:12px}
.l-combo-dots-bar-d{display:flex;gap:6px}
.l-combo-dots-bar-d i{width:9px;height:9px;border-radius:50%;background:var(--lc-color,#5b8def);animation:l-combo-dots-bar-f 1s ease-in-out infinite}
.l-combo-dots-bar-d i:nth-child(2){animation-delay:.16s}
.l-combo-dots-bar-d i:nth-child(3){animation-delay:.32s}
.l-combo-dots-bar-t{position:relative;width:140px;height:6px;border-radius:3px;background:var(--lc-track,#e2e8f0);overflow:hidden}
.l-combo-dots-bar-t b{position:absolute;top:0;left:-40%;height:100%;width:40%;border-radius:3px;background:var(--lc-color,#5b8def);animation:l-combo-dots-bar-s var(--lc-speed,1.4s) cubic-bezier(.4,0,.2,1) infinite}
@keyframes l-combo-dots-bar-f{0%,80%,100%{transform:scale(.5);opacity:.5}40%{transform:scale(1);opacity:1}}
@keyframes l-combo-dots-bar-s{0%{left:-40%}100%{left:100%}}`,
  },
  {
    id: 'combo-ring-percent', name: 'Ring + Percent', category: 'combo', tech: 'css+js', tags: tag('ring', 'percent', 'counter'),
    variables: { '--lc-size': '58px', '--lc-color': '#5b8def', '--lc-track': '#e2e8f0' },
    html: `<div class="l-combo-ring-percent"><div class="l-combo-ring-percent-r"></div><span class="l-combo-ring-percent-n">0%</span></div>`,
    css: `.l-combo-ring-percent{position:relative;width:var(--lc-size,58px);height:var(--lc-size,58px);display:grid;place-items:center}
.l-combo-ring-percent-r{position:absolute;inset:0;border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def) var(--p,0%),var(--lc-track,#e2e8f0) 0);-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 5px),#000 0);mask:radial-gradient(farthest-side,#0000 calc(100% - 5px),#000 0)}
.l-combo-ring-percent-n{font:700 13px/1 ui-monospace,monospace;color:var(--lc-color,#5b8def)}`,
    js: `var r=root.querySelector('.l-combo-ring-percent-r');var n=root.querySelector('.l-combo-ring-percent-n');var v=0;root._lcTimer=setInterval(function(){v=(v+1)%101;r.style.setProperty('--p',v+'%');n.textContent=v+'%';},28);`,
  },
  {
    id: 'combo-bar-percent', name: 'Bar + Percent', category: 'combo', tech: 'css+js', tags: tag('progress', 'percent', 'counter'),
    variables: { '--lc-size': '180px', '--lc-color': '#5b8def', '--lc-track': '#e2e8f0' },
    html: `<div class="l-combo-bar-percent"><div class="l-combo-bar-percent-t"><div class="l-combo-bar-percent-fill"></div></div><span class="l-combo-bar-percent-n">0%</span></div>`,
    css: `.l-combo-bar-percent{display:flex;align-items:center;gap:10px;font:600 12px/1 ui-monospace,monospace;color:var(--lc-color,#5b8def)}
.l-combo-bar-percent-t{width:var(--lc-size,180px);height:8px;border-radius:4px;background:var(--lc-track,#e2e8f0);overflow:hidden}
.l-combo-bar-percent-fill{height:100%;width:0;border-radius:4px;background:var(--lc-color,#5b8def)}
.l-combo-bar-percent-n{min-width:34px;text-align:right}`,
    js: `var f=root.querySelector('.l-combo-bar-percent-fill');var n=root.querySelector('.l-combo-bar-percent-n');var v=0;root._lcTimer=setInterval(function(){v=(v+1)%101;f.style.width=v+'%';n.textContent=v+'%';},28);`,
  },
  {
    id: 'combo-spinner-percent', name: 'Spinner + Percent', category: 'combo', tech: 'css+js', tags: tag('spinner', 'percent', 'counter'),
    variables: { '--lc-size': '58px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-combo-spinner-percent"><span class="l-combo-spinner-percent-s"></span><span class="l-combo-spinner-percent-n">0%</span></div>`,
    css: `.l-combo-spinner-percent{position:relative;width:var(--lc-size,58px);height:var(--lc-size,58px);display:grid;place-items:center}
.l-combo-spinner-percent-s{position:absolute;inset:0;border:4px solid color-mix(in srgb,var(--lc-color,#5b8def) 20%,transparent);border-top-color:var(--lc-color,#5b8def);border-radius:50%;animation:l-combo-spinner-percent-r var(--lc-speed,1s) linear infinite}
.l-combo-spinner-percent-n{font:700 12px/1 ui-monospace,monospace;color:var(--lc-color,#5b8def)}
@keyframes l-combo-spinner-percent-r{to{transform:rotate(1turn)}}`,
    js: `var n=root.querySelector('.l-combo-spinner-percent-n');var v=0;root._lcTimer=setInterval(function(){v=(v+1)%101;n.textContent=v+'%';},28);`,
  },
]

runBatch(LOADERS, 'batch-10')
