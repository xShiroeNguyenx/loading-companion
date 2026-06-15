// Seed batch 12 — original MULTI-COMBO loaders (3-4+ loaders combined into one
// panel / loading screen). Originals (MIT, this project).
// Child elements use short class names scoped under the unique root class
// (.l-<id> .child), so they never collide; @keyframes stay prefixed with l-<id>.
import { runBatch } from '../seed-lib.mjs'

const tag = (...t) => ['combo', 'multi', ...t]
const SP = 'border:3px solid color-mix(in srgb,var(--lc-color,#5b8def) 22%,transparent);border-top-color:var(--lc-color,#5b8def);border-radius:50%'

const LOADERS = [
  {
    id: 'combo-loading-screen', name: 'Loading Screen', category: 'combo', tags: tag('spinner', 'text', 'bar'),
    variables: { '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-text': '#334155', '--lc-speed': '1s' },
    html: `<div class="l-combo-loading-screen"><span class="s"></span><strong>Loading</strong><small>Please wait…</small><span class="bar"><b></b></span></div>`,
    css: `.l-combo-loading-screen{display:flex;flex-direction:column;align-items:center;gap:6px;font-family:system-ui,sans-serif;color:var(--lc-text,#334155)}
.l-combo-loading-screen .s{width:30px;height:30px;${SP};animation:l-combo-loading-screen-r var(--lc-speed,1s) linear infinite;margin-bottom:2px}
.l-combo-loading-screen strong{font-size:13px}
.l-combo-loading-screen small{font-size:10px;opacity:.6}
.l-combo-loading-screen .bar{position:relative;width:150px;height:5px;margin-top:4px;border-radius:3px;background:var(--lc-track,#e2e8f0);overflow:hidden}
.l-combo-loading-screen .bar b{position:absolute;top:0;left:-40%;height:100%;width:40%;border-radius:3px;background:var(--lc-color,#5b8def);animation:l-combo-loading-screen-s 1.4s cubic-bezier(.4,0,.2,1) infinite}
@keyframes l-combo-loading-screen-r{to{transform:rotate(1turn)}}
@keyframes l-combo-loading-screen-s{0%{left:-40%}100%{left:100%}}`,
  },
  {
    id: 'combo-app-boot', name: 'App Boot', category: 'combo', tags: tag('spinner', 'logo', 'dots', 'text'),
    variables: { '--lc-color': '#5b8def', '--lc-text': '#64748b', '--lc-speed': '1s' },
    html: `<div class="l-combo-app-boot"><div class="ring"><div class="logo"></div></div><div class="dots"><i></i><i></i><i></i></div><small>Starting…</small></div>`,
    css: `.l-combo-app-boot{display:flex;flex-direction:column;align-items:center;gap:9px;font-family:system-ui,sans-serif;color:var(--lc-text,#64748b)}
.l-combo-app-boot .ring{position:relative;width:50px;height:50px;display:grid;place-items:center}
.l-combo-app-boot .ring::before{content:'';position:absolute;inset:0;${SP};animation:l-combo-app-boot-r var(--lc-speed,1s) linear infinite}
.l-combo-app-boot .logo{width:40%;height:40%;border-radius:7px;background:var(--lc-color,#5b8def);animation:l-combo-app-boot-p 1.4s ease-in-out infinite}
.l-combo-app-boot .dots{display:flex;gap:5px}
.l-combo-app-boot .dots i{width:6px;height:6px;border-radius:50%;background:var(--lc-color,#5b8def);animation:l-combo-app-boot-d 1s ease-in-out infinite}
.l-combo-app-boot .dots i:nth-child(2){animation-delay:.16s}
.l-combo-app-boot .dots i:nth-child(3){animation-delay:.32s}
.l-combo-app-boot small{font-size:11px}
@keyframes l-combo-app-boot-r{to{transform:rotate(1turn)}}
@keyframes l-combo-app-boot-p{0%,100%{transform:scale(.85);opacity:.8}50%{transform:scale(1);opacity:1}}
@keyframes l-combo-app-boot-d{0%,80%,100%{transform:scale(.5);opacity:.5}40%{transform:scale(1);opacity:1}}`,
  },
  {
    id: 'combo-media-player', name: 'Media Player', category: 'combo', tags: tag('bars', 'text', 'bar'),
    variables: { '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-text': '#64748b', '--lc-speed': '1s' },
    html: `<div class="l-combo-media-player"><div class="top"><span class="eq"><i></i><i></i><i></i><i></i></span><small>Buffering…</small></div><span class="bar"><b></b></span></div>`,
    css: `.l-combo-media-player{display:flex;flex-direction:column;gap:9px;width:170px;font-family:system-ui,sans-serif;color:var(--lc-text,#64748b)}
.l-combo-media-player .top{display:flex;align-items:center;gap:9px}
.l-combo-media-player .eq{display:flex;gap:3px;align-items:center;height:18px}
.l-combo-media-player .eq i{width:3px;height:100%;border-radius:2px;background:var(--lc-color,#5b8def);animation:l-combo-media-player-e var(--lc-speed,1s) ease-in-out infinite}
.l-combo-media-player .eq i:nth-child(2){animation-delay:.15s}
.l-combo-media-player .eq i:nth-child(3){animation-delay:.3s}
.l-combo-media-player .eq i:nth-child(4){animation-delay:.45s}
.l-combo-media-player small{font-size:11px}
.l-combo-media-player .bar{position:relative;height:5px;border-radius:3px;background:var(--lc-track,#e2e8f0);overflow:hidden}
.l-combo-media-player .bar b{position:absolute;top:0;left:-45%;height:100%;width:45%;border-radius:3px;background:var(--lc-color,#5b8def);animation:l-combo-media-player-s 2s ease-in-out infinite}
@keyframes l-combo-media-player-e{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
@keyframes l-combo-media-player-s{0%{left:-45%}100%{left:100%}}`,
  },
  {
    id: 'combo-wifi-text', name: 'Signal + Text + Dots', category: 'combo', tags: tag('signal', 'text', 'dots'),
    variables: { '--lc-color': '#5b8def', '--lc-text': '#64748b', '--lc-speed': '1.6s' },
    html: `<div class="l-combo-wifi-text"><div class="sig"><i></i><i></i><i></i><i></i></div><small>Reconnecting<i>.</i><i>.</i><i>.</i></small></div>`,
    css: `.l-combo-wifi-text{display:flex;flex-direction:column;align-items:center;gap:10px;font:600 12px/1 system-ui,sans-serif;color:var(--lc-text,#64748b)}
.l-combo-wifi-text .sig{display:flex;gap:4px;align-items:flex-end;height:24px}
.l-combo-wifi-text .sig i{width:5px;border-radius:2px;background:var(--lc-color,#5b8def);animation:l-combo-wifi-text-w var(--lc-speed,1.6s) ease-in-out infinite}
.l-combo-wifi-text .sig i:nth-child(1){height:9px;animation-delay:0s}
.l-combo-wifi-text .sig i:nth-child(2){height:15px;animation-delay:.2s}
.l-combo-wifi-text .sig i:nth-child(3){height:20px;animation-delay:.4s}
.l-combo-wifi-text .sig i:nth-child(4){height:24px;animation-delay:.6s}
.l-combo-wifi-text small i{opacity:0;animation:l-combo-wifi-text-d 1.4s infinite}
.l-combo-wifi-text small i:nth-child(2){animation-delay:.2s}
.l-combo-wifi-text small i:nth-child(3){animation-delay:.4s}
@keyframes l-combo-wifi-text-w{0%,100%{opacity:.2}50%{opacity:1}}
@keyframes l-combo-wifi-text-d{0%,100%{opacity:0}40%,60%{opacity:1}}`,
  },
  {
    id: 'combo-skeleton-page', name: 'Skeleton Page', category: 'combo', tags: tag('skeleton', 'spinner', 'text'),
    variables: { '--lc-color': '#5b8def', '--lc-base': '#e2e8f0', '--lc-highlight': '#f1f5f9', '--lc-text': '#94a3b8', '--lc-speed': '1.4s' },
    html: `<div class="l-combo-skeleton-page"><div class="banner"></div><div class="row"><div class="av"></div><div class="ln"></div></div><div class="foot"><span class="sp"></span>Loading…</div></div>`,
    css: `.l-combo-skeleton-page{width:200px;display:flex;flex-direction:column;gap:9px;--g:linear-gradient(90deg,var(--lc-base,#e2e8f0) 25%,var(--lc-highlight,#f1f5f9) 37%,var(--lc-base,#e2e8f0) 63%)}
.l-combo-skeleton-page .banner{height:42px;border-radius:8px;background:var(--g);background-size:400% 100%;animation:l-combo-skeleton-page-sh var(--lc-speed,1.4s) ease infinite}
.l-combo-skeleton-page .row{display:flex;align-items:center;gap:9px}
.l-combo-skeleton-page .av{flex:0 0 auto;width:28px;height:28px;border-radius:50%;background:var(--g);background-size:400% 100%;animation:l-combo-skeleton-page-sh var(--lc-speed,1.4s) ease infinite}
.l-combo-skeleton-page .ln{flex:1;height:9px;border-radius:5px;background:var(--g);background-size:400% 100%;animation:l-combo-skeleton-page-sh var(--lc-speed,1.4s) ease infinite}
.l-combo-skeleton-page .foot{display:flex;align-items:center;justify-content:center;gap:7px;margin-top:2px;font:600 10px/1 system-ui,sans-serif;color:var(--lc-text,#94a3b8)}
.l-combo-skeleton-page .sp{width:12px;height:12px;${SP};border-width:2px;animation:l-combo-skeleton-page-r .8s linear infinite}
@keyframes l-combo-skeleton-page-sh{0%{background-position:100% 0}100%{background-position:-100% 0}}
@keyframes l-combo-skeleton-page-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'combo-terminal', name: 'Terminal Boot', category: 'combo', tags: tag('text', 'typing', 'spinner'),
    variables: { '--lc-color': '#5b8def', '--lc-speed': '4s' },
    html: `<div class="l-combo-terminal"><div class="l1">$ booting system…</div><div class="l2"><span class="tw">installing modules</span><b class="cur"></b><span class="sp"></span></div></div>`,
    css: `.l-combo-terminal{width:190px;padding:11px 13px;border-radius:8px;background:#0f172a;font:11px/1.7 ui-monospace,monospace;color:#94a3b8}
.l-combo-terminal .l1{color:#64748b}
.l-combo-terminal .l2{display:flex;align-items:center;color:var(--lc-color,#5b8def)}
.l-combo-terminal .tw{display:inline-block;white-space:nowrap;overflow:hidden;width:0;animation:l-combo-terminal-t var(--lc-speed,4s) steps(18) infinite}
.l-combo-terminal .cur{width:6px;height:1.1em;background:var(--lc-color,#5b8def);margin-left:1px;animation:l-combo-terminal-b 1s step-end infinite}
.l-combo-terminal .sp{width:10px;height:10px;margin-left:7px;${SP};border-width:2px;animation:l-combo-terminal-r .8s linear infinite}
@keyframes l-combo-terminal-t{0%,100%{width:0}40%,92%{width:128px}}
@keyframes l-combo-terminal-b{0%,100%{opacity:1}50%{opacity:0}}
@keyframes l-combo-terminal-r{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'combo-upload-panel', name: 'Upload Panel', category: 'combo', tech: 'css+js', tags: tag('ring', 'bar', 'text', 'percent'),
    variables: { '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-text': '#334155' },
    html: `<div class="l-combo-upload-panel"><div class="ring"></div><div class="info"><strong>photo.jpg</strong><span class="bar"><b class="fill"></b></span></div><span class="pct">0%</span></div>`,
    css: `.l-combo-upload-panel{display:flex;align-items:center;gap:11px;width:210px;font-family:system-ui,sans-serif;color:var(--lc-text,#334155)}
.l-combo-upload-panel .ring{flex:0 0 auto;width:30px;height:30px;border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def) var(--p,0%),var(--lc-track,#e2e8f0) 0);-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0);mask:radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0)}
.l-combo-upload-panel .info{flex:1;display:flex;flex-direction:column;gap:6px;min-width:0}
.l-combo-upload-panel strong{font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.l-combo-upload-panel .bar{height:5px;border-radius:3px;background:var(--lc-track,#e2e8f0);overflow:hidden}
.l-combo-upload-panel .fill{height:100%;width:0;border-radius:3px;background:var(--lc-color,#5b8def)}
.l-combo-upload-panel .pct{font:700 11px/1 ui-monospace,monospace;color:var(--lc-color,#5b8def)}`,
    js: `var r=root.querySelector('.ring');var f=root.querySelector('.fill');var n=root.querySelector('.pct');var v=0;root._lcTimer=setInterval(function(){v=(v+1)%101;r.style.setProperty('--p',v+'%');f.style.width=v+'%';n.textContent=v+'%';},28);`,
  },
  {
    id: 'combo-installer', name: 'Installer', category: 'combo', tech: 'css+js', tags: tag('bar', 'text', 'percent', 'sub-bar'),
    variables: { '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-text': '#334155' },
    html: `<div class="l-combo-installer"><div class="hd"><strong>Installing…</strong><span class="pct">0%</span></div><span class="bar"><b class="fill"></b></span><span class="sub"><b></b></span></div>`,
    css: `.l-combo-installer{display:flex;flex-direction:column;gap:7px;width:200px;font-family:system-ui,sans-serif;color:var(--lc-text,#334155)}
.l-combo-installer .hd{display:flex;justify-content:space-between;align-items:baseline;font-size:12px;font-weight:600}
.l-combo-installer .pct{font:700 11px/1 ui-monospace,monospace;color:var(--lc-color,#5b8def)}
.l-combo-installer .bar{height:7px;border-radius:4px;background:var(--lc-track,#e2e8f0);overflow:hidden}
.l-combo-installer .fill{display:block;height:100%;width:0;border-radius:4px;background:var(--lc-color,#5b8def)}
.l-combo-installer .sub{position:relative;height:4px;border-radius:3px;background:var(--lc-track,#e2e8f0);overflow:hidden}
.l-combo-installer .sub b{position:absolute;top:0;left:-35%;height:100%;width:35%;border-radius:3px;background:color-mix(in srgb,var(--lc-color,#5b8def) 55%,transparent);animation:l-combo-installer-s 1.2s cubic-bezier(.4,0,.2,1) infinite}
@keyframes l-combo-installer-s{0%{left:-35%}100%{left:100%}}`,
    js: `var f=root.querySelector('.fill');var n=root.querySelector('.pct');var v=0;root._lcTimer=setInterval(function(){v=(v+1)%101;f.style.width=v+'%';n.textContent=v+'%';},30);`,
  },
]

runBatch(LOADERS, 'batch-12')
