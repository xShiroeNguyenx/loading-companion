// Seed batch 11 — more original COMBO loaders. Originals (MIT, this project).
import { runBatch } from '../seed-lib.mjs'

const tag = (...t) => ['combo', ...t]
const SPIN = 'border:3px solid color-mix(in srgb,var(--lc-color,#5b8def) 22%,transparent);border-top-color:var(--lc-color,#5b8def);border-radius:50%'

const LOADERS = [
  {
    id: 'combo-stepper', name: 'Stepper', category: 'combo', tags: tag('steps', 'progress', 'sequence'),
    variables: { '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-speed': '3s' },
    html: `<div class="l-combo-stepper"><i></i><i></i><i></i><i></i></div>`,
    css: `.l-combo-stepper{position:relative;display:flex;justify-content:space-between;align-items:center;width:200px}
.l-combo-stepper::before{content:'';position:absolute;left:9px;right:9px;top:50%;height:3px;transform:translateY(-50%);background:var(--lc-track,#e2e8f0)}
.l-combo-stepper::after{content:'';position:absolute;left:9px;top:50%;height:3px;transform:translateY(-50%);background:var(--lc-color,#5b8def);width:0;animation:l-combo-stepper-l var(--lc-speed,3s) ease-in-out infinite}
.l-combo-stepper i{position:relative;z-index:1;width:18px;height:18px;border-radius:50%;background:var(--lc-track,#e2e8f0);animation:l-combo-stepper-s var(--lc-speed,3s) infinite}
.l-combo-stepper i:nth-child(2){animation-delay:.6s}
.l-combo-stepper i:nth-child(3){animation-delay:1.2s}
.l-combo-stepper i:nth-child(4){animation-delay:1.8s}
@keyframes l-combo-stepper-s{0%{background:var(--lc-track,#e2e8f0)}18%,100%{background:var(--lc-color,#5b8def)}}
@keyframes l-combo-stepper-l{0%{width:0}80%,100%{width:calc(100% - 18px)}}`,
  },
  {
    id: 'combo-ring-check', name: 'Ring → Check', category: 'combo', tags: tag('ring', 'check', 'success'),
    variables: { '--lc-size': '50px', '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-speed': '2.4s' },
    html: `<div class="l-combo-ring-check"><span class="l-combo-ring-check-r"></span><span class="l-combo-ring-check-t"></span></div>`,
    css: `.l-combo-ring-check{position:relative;width:var(--lc-size,50px);height:var(--lc-size,50px)}
.l-combo-ring-check-r{position:absolute;inset:0;border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def) var(--ang,0deg),var(--lc-track,#e2e8f0) 0);-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0);mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0);animation:l-combo-ring-check-f var(--lc-speed,2.4s) ease-in-out infinite}
.l-combo-ring-check-t{position:absolute;left:50%;top:46%;width:24%;height:42%;border:solid var(--lc-color,#5b8def);border-width:0 3px 3px 0;transform:translate(-50%,-50%) rotate(45deg) scale(0);animation:l-combo-ring-check-c var(--lc-speed,2.4s) ease-in-out infinite}
@keyframes l-combo-ring-check-f{0%{--ang:0deg}50%,100%{--ang:360deg}}
@keyframes l-combo-ring-check-c{0%,50%{transform:translate(-50%,-50%) rotate(45deg) scale(0)}66%,90%{transform:translate(-50%,-50%) rotate(45deg) scale(1)}100%{transform:translate(-50%,-50%) rotate(45deg) scale(0)}}
@property --ang{syntax:'<angle>';inherits:false;initial-value:0deg}`,
  },
  {
    id: 'combo-spinner-logo', name: 'Spinner + Logo Slot', category: 'combo', tags: tag('spinner', 'logo', 'slot'),
    variables: { '--lc-size': '50px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-combo-spinner-logo"><span></span></div>`,
    css: `.l-combo-spinner-logo{position:relative;width:var(--lc-size,50px);height:var(--lc-size,50px);display:grid;place-items:center}
.l-combo-spinner-logo::before{content:'';position:absolute;inset:0;${SPIN};animation:l-combo-spinner-logo-r var(--lc-speed,1s) linear infinite}
.l-combo-spinner-logo span{width:42%;height:42%;border-radius:7px;background:var(--lc-color,#5b8def)}
@keyframes l-combo-spinner-logo-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'combo-orbit-spinner', name: 'Spinner + Orbit Dot', category: 'combo', tags: tag('spinner', 'orbit', 'layered'),
    variables: { '--lc-size': '50px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-combo-orbit-spinner"><span></span></div>`,
    css: `.l-combo-orbit-spinner{position:relative;width:var(--lc-size,50px);height:var(--lc-size,50px)}
.l-combo-orbit-spinner::before{content:'';position:absolute;inset:9px;${SPIN};animation:l-combo-orbit-spinner-r var(--lc-speed,1s) linear infinite}
.l-combo-orbit-spinner span{position:absolute;top:0;left:50%;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:var(--lc-color,#5b8def);transform-origin:50% calc(var(--lc-size,50px)/2);animation:l-combo-orbit-spinner-o calc(var(--lc-speed,1s)*1.6) linear infinite}
@keyframes l-combo-orbit-spinner-r{to{transform:rotate(1turn)}}
@keyframes l-combo-orbit-spinner-o{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'combo-pulse-text', name: 'Status Dot + Text', category: 'combo', tags: tag('pulse', 'status', 'text'),
    variables: { '--lc-color': '#5b8def', '--lc-text': '#334155', '--lc-speed': '1.4s' },
    html: `<div class="l-combo-pulse-text"><span class="l-combo-pulse-text-d"></span>Connecting…</div>`,
    css: `.l-combo-pulse-text{display:inline-flex;align-items:center;gap:9px;font:600 13px/1 system-ui,sans-serif;color:var(--lc-text,#334155)}
.l-combo-pulse-text-d{position:relative;width:10px;height:10px;border-radius:50%;background:var(--lc-color,#5b8def)}
.l-combo-pulse-text-d::after{content:'';position:absolute;inset:0;border-radius:50%;background:var(--lc-color,#5b8def);animation:l-combo-pulse-text-p var(--lc-speed,1.4s) ease-out infinite}
@keyframes l-combo-pulse-text-p{0%{transform:scale(1);opacity:.6}100%{transform:scale(2.6);opacity:0}}`,
  },
  {
    id: 'combo-typing-dots', name: 'Typing + Dots', category: 'combo', tags: tag('text', 'typing', 'cursor'),
    variables: { '--lc-size': '16px', '--lc-color': '#5b8def', '--lc-text': '#334155', '--lc-speed': '1.4s' },
    html: `<div class="l-combo-typing-dots">Loading<i>.</i><i>.</i><i>.</i><b></b></div>`,
    css: `.l-combo-typing-dots{display:inline-flex;align-items:center;font:600 var(--lc-size,16px)/1 ui-monospace,monospace;color:var(--lc-text,#334155)}
.l-combo-typing-dots i{opacity:0;animation:l-combo-typing-dots-d var(--lc-speed,1.4s) infinite}
.l-combo-typing-dots i:nth-child(2){animation-delay:.2s}
.l-combo-typing-dots i:nth-child(3){animation-delay:.4s}
.l-combo-typing-dots b{width:2px;height:1.1em;margin-left:3px;background:var(--lc-color,#5b8def);animation:l-combo-typing-dots-c 1s step-end infinite}
@keyframes l-combo-typing-dots-d{0%,100%{opacity:0}40%,60%{opacity:1}}
@keyframes l-combo-typing-dots-c{0%,100%{opacity:1}50%{opacity:0}}`,
  },
  {
    id: 'combo-card-list', name: 'Skeleton List + More', category: 'combo', tags: tag('skeleton', 'spinner', 'list'),
    variables: { '--lc-color': '#5b8def', '--lc-base': '#e2e8f0', '--lc-highlight': '#f1f5f9', '--lc-text': '#94a3b8', '--lc-speed': '1.4s' },
    html: `<div class="l-combo-card-list"><div class="l-combo-card-list-row"><i></i><b></b></div><div class="l-combo-card-list-row"><i></i><b></b></div><div class="l-combo-card-list-more"><span></span>Loading more…</div></div>`,
    css: `.l-combo-card-list{width:210px;display:flex;flex-direction:column;gap:10px;--g:linear-gradient(90deg,var(--lc-base,#e2e8f0) 25%,var(--lc-highlight,#f1f5f9) 37%,var(--lc-base,#e2e8f0) 63%)}
.l-combo-card-list-row{display:flex;align-items:center;gap:10px}
.l-combo-card-list-row i{flex:0 0 auto;width:30px;height:30px;border-radius:50%;background:var(--g);background-size:400% 100%;animation:l-combo-card-list-sh var(--lc-speed,1.4s) ease infinite}
.l-combo-card-list-row b{flex:1;height:9px;border-radius:5px;background:var(--g);background-size:400% 100%;animation:l-combo-card-list-sh var(--lc-speed,1.4s) ease infinite}
.l-combo-card-list-more{display:flex;align-items:center;justify-content:center;gap:7px;margin-top:2px;font:600 11px/1 system-ui,sans-serif;color:var(--lc-text,#94a3b8)}
.l-combo-card-list-more span{width:13px;height:13px;${SPIN};border-width:2px;animation:l-combo-card-list-r .8s linear infinite}
@keyframes l-combo-card-list-sh{0%{background-position:100% 0}100%{background-position:-100% 0}}
@keyframes l-combo-card-list-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'combo-bar-steps', name: 'Block Steps + Label', category: 'combo', tags: tag('progress', 'blocks', 'text'),
    variables: { '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-text': '#64748b', '--lc-speed': '2s' },
    html: `<div class="l-combo-bar-steps"><span class="l-combo-bar-steps-b"><i></i><i></i><i></i><i></i></span><small>Loading…</small></div>`,
    css: `.l-combo-bar-steps{display:flex;flex-direction:column;align-items:center;gap:10px;font:600 12px/1 system-ui,sans-serif;color:var(--lc-text,#64748b)}
.l-combo-bar-steps-b{display:flex;gap:5px}
.l-combo-bar-steps-b i{width:26px;height:9px;border-radius:3px;background:var(--lc-track,#e2e8f0);animation:l-combo-bar-steps-f var(--lc-speed,2s) infinite}
.l-combo-bar-steps-b i:nth-child(2){animation-delay:.25s}
.l-combo-bar-steps-b i:nth-child(3){animation-delay:.5s}
.l-combo-bar-steps-b i:nth-child(4){animation-delay:.75s}
@keyframes l-combo-bar-steps-f{0%,100%{background:var(--lc-track,#e2e8f0)}40%{background:var(--lc-color,#5b8def)}}`,
  },
  {
    id: 'combo-spinner-dual-text', name: 'Dual Ring + Text', category: 'combo', tags: tag('spinner', 'dual', 'text'),
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-text': '#64748b', '--lc-speed': '1.1s' },
    html: `<div class="l-combo-spinner-dual-text"><span class="l-combo-spinner-dual-text-s"></span><span>Loading…</span></div>`,
    css: `.l-combo-spinner-dual-text{display:flex;flex-direction:column;align-items:center;gap:12px;font:600 13px/1 system-ui,sans-serif;color:var(--lc-text,#64748b)}
.l-combo-spinner-dual-text-s{width:var(--lc-size,40px);height:var(--lc-size,40px);border-radius:50%;border:4px solid transparent;border-top-color:var(--lc-color,#5b8def);border-bottom-color:var(--lc-color,#5b8def);animation:l-combo-spinner-dual-text-r var(--lc-speed,1.1s) cubic-bezier(.5,0,.5,1) infinite}
@keyframes l-combo-spinner-dual-text-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'combo-dots-percent', name: 'Dots + Percent', category: 'combo', tech: 'css+js', tags: tag('dots', 'percent', 'counter'),
    variables: { '--lc-color': '#5b8def', '--lc-speed': '.6s' },
    html: `<div class="l-combo-dots-percent"><span class="l-combo-dots-percent-d"><i></i><i></i><i></i></span><span class="l-combo-dots-percent-n">0%</span></div>`,
    css: `.l-combo-dots-percent{display:flex;flex-direction:column;align-items:center;gap:10px}
.l-combo-dots-percent-d{display:flex;gap:6px}
.l-combo-dots-percent-d i{width:9px;height:9px;border-radius:50%;background:var(--lc-color,#5b8def);animation:l-combo-dots-percent-b var(--lc-speed,.6s) ease-in-out infinite alternate}
.l-combo-dots-percent-d i:nth-child(2){animation-delay:.15s}
.l-combo-dots-percent-d i:nth-child(3){animation-delay:.3s}
.l-combo-dots-percent-n{font:700 13px/1 ui-monospace,monospace;color:var(--lc-color,#5b8def)}
@keyframes l-combo-dots-percent-b{from{transform:translateY(0)}to{transform:translateY(-7px)}}`,
    js: `var n=root.querySelector('.l-combo-dots-percent-n');var v=0;root._lcTimer=setInterval(function(){v=(v+1)%101;n.textContent=v+'%';},28);`,
  },
  {
    id: 'combo-progress-eta', name: 'Bar + ETA', category: 'combo', tech: 'css+js', tags: tag('progress', 'eta', 'text'),
    variables: { '--lc-size': '190px', '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-text': '#64748b' },
    html: `<div class="l-combo-progress-eta"><div class="l-combo-progress-eta-t"><div class="l-combo-progress-eta-fill"></div></div><span class="l-combo-progress-eta-n">0% · ~8s left</span></div>`,
    css: `.l-combo-progress-eta{display:flex;flex-direction:column;gap:7px}
.l-combo-progress-eta-t{width:var(--lc-size,190px);height:8px;border-radius:4px;background:var(--lc-track,#e2e8f0);overflow:hidden}
.l-combo-progress-eta-fill{height:100%;width:0;border-radius:4px;background:var(--lc-color,#5b8def)}
.l-combo-progress-eta-n{font:600 11px/1 ui-monospace,monospace;color:var(--lc-text,#64748b)}`,
    js: `var f=root.querySelector('.l-combo-progress-eta-fill');var n=root.querySelector('.l-combo-progress-eta-n');var v=0;root._lcTimer=setInterval(function(){v=(v+1)%101;f.style.width=v+'%';n.textContent=v+'% · ~'+Math.ceil((100-v)/12)+'s left';},28);`,
  },
  {
    id: 'combo-circle-label', name: 'Ring + Label + Percent', category: 'combo', tech: 'css+js', tags: tag('ring', 'percent', 'label'),
    variables: { '--lc-size': '58px', '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-text': '#64748b' },
    html: `<div class="l-combo-circle-label"><div class="l-combo-circle-label-w"><div class="l-combo-circle-label-r"></div><span class="l-combo-circle-label-n">0%</span></div><small>Uploading</small></div>`,
    css: `.l-combo-circle-label{display:flex;flex-direction:column;align-items:center;gap:8px;font:600 12px/1 system-ui,sans-serif;color:var(--lc-text,#64748b)}
.l-combo-circle-label-w{position:relative;width:var(--lc-size,58px);height:var(--lc-size,58px);display:grid;place-items:center}
.l-combo-circle-label-r{position:absolute;inset:0;border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def) var(--p,0%),var(--lc-track,#e2e8f0) 0);-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 5px),#000 0);mask:radial-gradient(farthest-side,#0000 calc(100% - 5px),#000 0)}
.l-combo-circle-label-n{font:700 12px/1 ui-monospace,monospace;color:var(--lc-color,#5b8def)}
@property --p{syntax:'<percentage>';inherits:false;initial-value:0%}`,
    js: `var r=root.querySelector('.l-combo-circle-label-r');var n=root.querySelector('.l-combo-circle-label-n');var v=0;root._lcTimer=setInterval(function(){v=(v+1)%101;r.style.setProperty('--p',v+'%');n.textContent=v+'%';},28);`,
  },
]

runBatch(LOADERS, 'batch-11')
