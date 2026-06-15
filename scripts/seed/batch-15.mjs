// Seed batch 15 — the "everything" loader: one panel combining as many loader
// types as possible (logo/favicon pulse, spinner, skeleton shimmer, equalizer
// bars, bouncing dots, circular progress + %, indeterminate bar, text + ellipsis).
// Original (MIT, this project).
import { runBatch } from '../seed-lib.mjs'

const LOADERS = [
  {
    id: 'combo-mega', name: 'Mega Loader (everything)', category: 'combo', tech: 'css+js',
    tags: ['combo', 'multi', 'mega', 'dashboard', 'showcase'],
    variables: { '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-base': '#e2e8f0', '--lc-highlight': '#f1f5f9', '--lc-text': '#334155', '--lc-speed': '1s' },
    html: `<div class="l-combo-mega"><div class="head"><span class="logo"></span><span class="meta"><strong>MyApp</strong><span class="sub"></span></span><span class="sp"></span></div><div class="mid"><span class="prog"><b class="pct">0%</b></span><span class="eq"><i></i><i></i><i></i><i></i><i></i></span><span class="dots"><i></i><i></i><i></i></span></div><span class="bar"><b></b></span><span class="foot">Loading<i>.</i><i>.</i><i>.</i> <b class="pct">0%</b></span></div>`,
    css: `.l-combo-mega{width:228px;padding:13px 15px;border-radius:13px;background:var(--lc-panel,#fff);box-shadow:0 3px 14px rgba(15,23,42,.12);display:flex;flex-direction:column;gap:9px;font-family:system-ui,sans-serif;color:var(--lc-text,#334155)}
.l-combo-mega .head{display:flex;align-items:center;gap:10px}
.l-combo-mega .logo{flex:0 0 auto;width:38px;height:38px;border-radius:11px;background:linear-gradient(135deg,var(--lc-color,#5b8def),color-mix(in srgb,var(--lc-color,#5b8def) 60%,#1e293b));display:grid;place-items:center;object-fit:cover;box-shadow:0 3px 7px color-mix(in srgb,var(--lc-color,#5b8def) 30%,transparent);animation:l-combo-mega-p 1.6s ease-in-out infinite}
.l-combo-mega .logo::after{content:'';width:42%;height:42%;background:#fff;border-radius:4px}
.l-combo-mega .meta{flex:1;display:flex;flex-direction:column;gap:6px;min-width:0}
.l-combo-mega .meta strong{font-size:13px}
.l-combo-mega .sub{height:8px;width:80%;border-radius:4px;background:linear-gradient(90deg,var(--lc-base,#e2e8f0) 25%,var(--lc-highlight,#f1f5f9) 37%,var(--lc-base,#e2e8f0) 63%);background-size:400% 100%;animation:l-combo-mega-sh 1.4s ease infinite}
.l-combo-mega .sp{flex:0 0 auto;width:18px;height:18px;border:2px solid color-mix(in srgb,var(--lc-color,#5b8def) 22%,transparent);border-top-color:var(--lc-color,#5b8def);border-radius:50%;animation:l-combo-mega-r var(--lc-speed,1s) linear infinite}
.l-combo-mega .mid{display:flex;align-items:center;gap:14px}
.l-combo-mega .prog{position:relative;width:38px;height:38px;display:grid;place-items:center;border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def) var(--p,0%),var(--lc-track,#e2e8f0) 0);-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0);mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0)}
.l-combo-mega .prog .pct{font:700 8px/1 ui-monospace,monospace;color:var(--lc-color,#5b8def)}
.l-combo-mega .eq{display:flex;gap:3px;align-items:center;height:24px}
.l-combo-mega .eq i{width:4px;height:100%;border-radius:2px;background:var(--lc-color,#5b8def);animation:l-combo-mega-eq var(--lc-speed,1s) ease-in-out infinite}
.l-combo-mega .eq i:nth-child(2){animation-delay:.12s}
.l-combo-mega .eq i:nth-child(3){animation-delay:.24s}
.l-combo-mega .eq i:nth-child(4){animation-delay:.36s}
.l-combo-mega .eq i:nth-child(5){animation-delay:.48s}
.l-combo-mega .dots{display:flex;gap:5px;margin-left:auto}
.l-combo-mega .dots i{width:7px;height:7px;border-radius:50%;background:var(--lc-color,#5b8def);animation:l-combo-mega-b 1s ease-in-out infinite}
.l-combo-mega .dots i:nth-child(2){animation-delay:.16s}
.l-combo-mega .dots i:nth-child(3){animation-delay:.32s}
.l-combo-mega .bar{position:relative;height:6px;border-radius:3px;background:var(--lc-track,#e2e8f0);overflow:hidden}
.l-combo-mega .bar b{position:absolute;top:0;left:-40%;height:100%;width:40%;border-radius:3px;background:var(--lc-color,#5b8def);animation:l-combo-mega-s 1.4s cubic-bezier(.4,0,.2,1) infinite}
.l-combo-mega .foot{display:flex;align-items:center;justify-content:space-between;font:600 11px/1 system-ui,sans-serif;color:var(--lc-text,#334155)}
.l-combo-mega .foot .pct{color:var(--lc-color,#5b8def);font-family:ui-monospace,monospace}
.l-combo-mega .foot>i{opacity:0;animation:l-combo-mega-d 1.4s infinite}
.l-combo-mega .foot>i:nth-of-type(2){animation-delay:.2s}
.l-combo-mega .foot>i:nth-of-type(3){animation-delay:.4s}
@keyframes l-combo-mega-p{0%,100%{transform:scale(.92)}50%{transform:scale(1)}}
@keyframes l-combo-mega-r{to{transform:rotate(1turn)}}
@keyframes l-combo-mega-sh{0%{background-position:100% 0}100%{background-position:-100% 0}}
@keyframes l-combo-mega-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
@keyframes l-combo-mega-b{0%,80%,100%{transform:scale(.5);opacity:.5}40%{transform:scale(1);opacity:1}}
@keyframes l-combo-mega-s{0%{left:-40%}100%{left:100%}}
@keyframes l-combo-mega-d{0%,100%{opacity:0}40%,60%{opacity:1}}
@property --p{syntax:'<percentage>';inherits:false;initial-value:0%}`,
    js: `var ring=root.querySelector('.prog');var pcts=root.querySelectorAll('.pct');var v=0;root._lcTimer=setInterval(function(){v=(v+1)%101;ring.style.setProperty('--p',v+'%');pcts.forEach(function(n){n.textContent=v+'%';});},30);`,
  },
]

runBatch(LOADERS, 'batch-15')
