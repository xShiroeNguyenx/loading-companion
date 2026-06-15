// Seed authoring script for the M0 hand-authored ORIGINAL loaders.
//
// These are original implementations (license: MIT, author: Loading Companion).
// Running this materializes one folder per loader under loaders/<category>/<id>/.
// It SKIPS folders that already exist, so once materialized the folders are the
// editable source of truth and your hand edits are never clobbered.
//
//   node scripts/seed-loaders.mjs          # create missing seed loaders
//   node scripts/seed-loaders.mjs --force  # overwrite (re-seed originals)
//
// Convention enforced here (and required project-wide): every CSS class and
// @keyframes name is prefixed with `l-<id>` so loaders never collide on one page
// and the variant generator can re-scope them with a single string replace.
import { writeFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { existsSync } from 'node:fs'
import { LOADERS_DIR } from './lib.mjs'

const FORCE = process.argv.includes('--force')
const SRC = { name: 'Loading Companion', url: 'https://github.com/loading-companion', author: 'Loading Companion' }

/** @type {Array<{id,name,category,tags,tech?,variables?,html,css,js?}>} */
const LOADERS = [
  // ---------- spinner ----------
  {
    id: 'spinner-classic', name: 'Classic Ring', category: 'spinner', tags: ['ring', 'rotate', 'minimal'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-spinner-classic"></div>`,
    css: `.l-spinner-classic{width:var(--lc-size,48px);height:var(--lc-size,48px);border:calc(var(--lc-size,48px)/8) solid color-mix(in srgb,var(--lc-color,#5b8def) 22%,transparent);border-top-color:var(--lc-color,#5b8def);border-radius:50%;animation:l-spinner-classic-spin var(--lc-speed,1s) linear infinite}
@keyframes l-spinner-classic-spin{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'spinner-dual-ring', name: 'Dual Ring', category: 'spinner', tags: ['ring', 'rotate'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '1.1s' },
    html: `<div class="l-spinner-dual-ring"></div>`,
    css: `.l-spinner-dual-ring{width:var(--lc-size,48px);height:var(--lc-size,48px);border-radius:50%;border:calc(var(--lc-size,48px)/10) solid transparent;border-top-color:var(--lc-color,#5b8def);border-bottom-color:var(--lc-color,#5b8def);animation:l-spinner-dual-ring-spin var(--lc-speed,1.1s) cubic-bezier(.5,0,.5,1) infinite}
@keyframes l-spinner-dual-ring-spin{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'spinner-dashed', name: 'Dashed Ring', category: 'spinner', tags: ['ring', 'dashed', 'rotate'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '4s' },
    html: `<div class="l-spinner-dashed"></div>`,
    css: `.l-spinner-dashed{width:var(--lc-size,48px);height:var(--lc-size,48px);border:calc(var(--lc-size,48px)/8) dashed var(--lc-color,#5b8def);border-radius:50%;animation:l-spinner-dashed-spin var(--lc-speed,4s) linear infinite}
@keyframes l-spinner-dashed-spin{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'spinner-conic', name: 'Conic Sweep', category: 'spinner', tags: ['conic', 'gradient', 'rotate', 'modern'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-spinner-conic"></div>`,
    css: `.l-spinner-conic{width:var(--lc-size,48px);height:var(--lc-size,48px);border-radius:50%;background:conic-gradient(from 0deg,transparent,var(--lc-color,#5b8def));-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - var(--lc-size,48px)/8),#000 0);mask:radial-gradient(farthest-side,transparent calc(100% - var(--lc-size,48px)/8),#000 0);animation:l-spinner-conic-spin var(--lc-speed,1s) linear infinite}
@keyframes l-spinner-conic-spin{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'spinner-gradient-arc', name: 'Gradient Arc', category: 'spinner', tags: ['gradient', 'arc', 'rotate', 'modern'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-color-2': '#a855f7', '--lc-speed': '1s' },
    html: `<div class="l-spinner-gradient-arc"></div>`,
    css: `.l-spinner-gradient-arc{width:var(--lc-size,48px);height:var(--lc-size,48px);border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def),var(--lc-color-2,#a855f7),transparent 70%);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - var(--lc-size,48px)/7),#000 0);mask:radial-gradient(farthest-side,transparent calc(100% - var(--lc-size,48px)/7),#000 0);animation:l-spinner-gradient-arc-spin var(--lc-speed,1s) linear infinite}
@keyframes l-spinner-gradient-arc-spin{to{transform:rotate(1turn)}}`,
  },

  // ---------- dots ----------
  {
    id: 'dots-bounce', name: 'Bouncing Dots', category: 'dots', tags: ['bounce', 'three'],
    variables: { '--lc-size': '12px', '--lc-color': '#5b8def', '--lc-speed': '.6s' },
    html: `<div class="l-dots-bounce"><span></span><span></span><span></span></div>`,
    css: `.l-dots-bounce{display:flex;gap:calc(var(--lc-size,12px)/1.5);align-items:flex-end;height:calc(var(--lc-size,12px)*2.2)}
.l-dots-bounce span{width:var(--lc-size,12px);height:var(--lc-size,12px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-dots-bounce-b var(--lc-speed,.6s) ease-in-out infinite alternate}
.l-dots-bounce span:nth-child(2){animation-delay:.2s}
.l-dots-bounce span:nth-child(3){animation-delay:.4s}
@keyframes l-dots-bounce-b{from{transform:translateY(0)}to{transform:translateY(calc(var(--lc-size,12px)*-1.1))}}`,
  },
  {
    id: 'dots-pulse', name: 'Pulsing Dots', category: 'dots', tags: ['pulse', 'scale', 'three'],
    variables: { '--lc-size': '12px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-dots-pulse"><span></span><span></span><span></span></div>`,
    css: `.l-dots-pulse{display:flex;gap:calc(var(--lc-size,12px)/1.5)}
.l-dots-pulse span{width:var(--lc-size,12px);height:var(--lc-size,12px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-dots-pulse-p var(--lc-speed,1s) ease-in-out infinite}
.l-dots-pulse span:nth-child(2){animation-delay:.16s}
.l-dots-pulse span:nth-child(3){animation-delay:.32s}
@keyframes l-dots-pulse-p{0%,80%,100%{transform:scale(.4);opacity:.4}40%{transform:scale(1);opacity:1}}`,
  },
  {
    id: 'dots-fade', name: 'Fading Dots', category: 'dots', tags: ['fade', 'opacity', 'three'],
    variables: { '--lc-size': '12px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-dots-fade"><span></span><span></span><span></span></div>`,
    css: `.l-dots-fade{display:flex;gap:calc(var(--lc-size,12px)/1.5)}
.l-dots-fade span{width:var(--lc-size,12px);height:var(--lc-size,12px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-dots-fade-f var(--lc-speed,1.2s) linear infinite}
.l-dots-fade span:nth-child(2){animation-delay:.4s}
.l-dots-fade span:nth-child(3){animation-delay:.8s}
@keyframes l-dots-fade-f{0%,100%{opacity:.2}50%{opacity:1}}`,
  },
  {
    id: 'dots-flow', name: 'Flowing Dots', category: 'dots', tags: ['flow', 'wave', 'three'],
    variables: { '--lc-size': '12px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-dots-flow"><span></span><span></span><span></span></div>`,
    css: `.l-dots-flow{display:flex;gap:calc(var(--lc-size,12px)/1.5)}
.l-dots-flow span{width:var(--lc-size,12px);height:var(--lc-size,12px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-dots-flow-fl var(--lc-speed,1.4s) ease-in-out infinite}
.l-dots-flow span:nth-child(1){animation-delay:-.3s}
.l-dots-flow span:nth-child(2){animation-delay:-.15s}
@keyframes l-dots-flow-fl{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(calc(var(--lc-size,12px)*-1))}}`,
  },
  {
    id: 'dots-elastic', name: 'Elastic Dots', category: 'dots', tags: ['elastic', 'scale', 'three'],
    variables: { '--lc-size': '14px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-dots-elastic"><span></span><span></span><span></span></div>`,
    css: `.l-dots-elastic{display:flex;gap:calc(var(--lc-size,14px)/1.4)}
.l-dots-elastic span{width:var(--lc-size,14px);height:var(--lc-size,14px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-dots-elastic-e var(--lc-speed,1s) cubic-bezier(.68,-.55,.27,1.55) infinite}
.l-dots-elastic span:nth-child(2){animation-delay:.12s}
.l-dots-elastic span:nth-child(3){animation-delay:.24s}
@keyframes l-dots-elastic-e{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.8)}}`,
  },

  // ---------- bars ----------
  {
    id: 'bars-equalizer', name: 'Equalizer', category: 'bars', tags: ['equalizer', 'audio', 'scale'],
    variables: { '--lc-size': '8px', '--lc-height': '40px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-bars-equalizer"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-bars-equalizer{display:flex;gap:calc(var(--lc-size,8px)/1.5);align-items:center;height:var(--lc-height,40px)}
.l-bars-equalizer span{width:var(--lc-size,8px);height:100%;background:var(--lc-color,#5b8def);border-radius:calc(var(--lc-size,8px)/2);transform-origin:center;animation:l-bars-equalizer-eq var(--lc-speed,1s) ease-in-out infinite}
.l-bars-equalizer span:nth-child(2){animation-delay:.15s}
.l-bars-equalizer span:nth-child(3){animation-delay:.3s}
.l-bars-equalizer span:nth-child(4){animation-delay:.45s}
.l-bars-equalizer span:nth-child(5){animation-delay:.6s}
@keyframes l-bars-equalizer-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}`,
  },
  {
    id: 'bars-scale', name: 'Scaling Bars', category: 'bars', tags: ['scale', 'stretch'],
    variables: { '--lc-size': '7px', '--lc-height': '36px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-bars-scale"><span></span><span></span><span></span><span></span></div>`,
    css: `.l-bars-scale{display:flex;gap:calc(var(--lc-size,7px));align-items:center;height:var(--lc-height,36px)}
.l-bars-scale span{width:var(--lc-size,7px);height:100%;background:var(--lc-color,#5b8def);animation:l-bars-scale-s var(--lc-speed,1.2s) ease-in-out infinite}
.l-bars-scale span:nth-child(1){animation-delay:-.24s}
.l-bars-scale span:nth-child(2){animation-delay:-.12s}
.l-bars-scale span:nth-child(4){animation-delay:.12s}
@keyframes l-bars-scale-s{0%,40%,100%{transform:scaleY(.4)}20%{transform:scaleY(1)}}`,
  },
  {
    id: 'bars-wave', name: 'Wave Bars', category: 'bars', tags: ['wave', 'translate'],
    variables: { '--lc-size': '8px', '--lc-height': '36px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-bars-wave"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-bars-wave{display:flex;gap:calc(var(--lc-size,8px)/1.4);align-items:center;height:calc(var(--lc-height,36px)*1.6)}
.l-bars-wave span{width:var(--lc-size,8px);height:var(--lc-height,36px);background:var(--lc-color,#5b8def);border-radius:calc(var(--lc-size,8px)/2);animation:l-bars-wave-w var(--lc-speed,1s) ease-in-out infinite}
.l-bars-wave span:nth-child(2){animation-delay:.1s}
.l-bars-wave span:nth-child(3){animation-delay:.2s}
.l-bars-wave span:nth-child(4){animation-delay:.3s}
.l-bars-wave span:nth-child(5){animation-delay:.4s}
@keyframes l-bars-wave-w{0%,100%{transform:translateY(0)}50%{transform:translateY(calc(var(--lc-height,36px)/-2))}}`,
  },

  // ---------- ring ----------
  {
    id: 'ring-orbit', name: 'Orbit Dot', category: 'ring', tags: ['orbit', 'rotate', 'dot'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-ring-orbit"><span></span></div>`,
    css: `.l-ring-orbit{position:relative;width:var(--lc-size,48px);height:var(--lc-size,48px);border-radius:50%;border:2px solid color-mix(in srgb,var(--lc-color,#5b8def) 20%,transparent);animation:l-ring-orbit-rot var(--lc-speed,1s) linear infinite}
.l-ring-orbit span{position:absolute;top:calc(var(--lc-size,48px)/-12);left:50%;width:calc(var(--lc-size,48px)/6);height:calc(var(--lc-size,48px)/6);margin-left:calc(var(--lc-size,48px)/-12);border-radius:50%;background:var(--lc-color,#5b8def)}
@keyframes l-ring-orbit-rot{to{transform:rotate(1turn)}}`,
  },
  {
    id: 'ring-spin-segment', name: 'Segment Ring', category: 'ring', tags: ['segment', 'rotate'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<div class="l-ring-spin-segment"></div>`,
    css: `.l-ring-spin-segment{width:var(--lc-size,48px);height:var(--lc-size,48px);border-radius:50%;border:calc(var(--lc-size,48px)/9) solid color-mix(in srgb,var(--lc-color,#5b8def) 18%,transparent);border-right-color:var(--lc-color,#5b8def);animation:l-ring-spin-segment-r var(--lc-speed,1s) linear infinite}
@keyframes l-ring-spin-segment-r{to{transform:rotate(1turn)}}`,
  },

  // ---------- pulse ----------
  {
    id: 'pulse-circle', name: 'Pulse Circle', category: 'pulse', tags: ['pulse', 'scale', 'fade'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-pulse-circle"></div>`,
    css: `.l-pulse-circle{width:var(--lc-size,48px);height:var(--lc-size,48px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-pulse-circle-p var(--lc-speed,1.2s) ease-in-out infinite}
@keyframes l-pulse-circle-p{0%{transform:scale(0);opacity:1}100%{transform:scale(1);opacity:0}}`,
  },
  {
    id: 'pulse-ping', name: 'Ping', category: 'pulse', tags: ['ping', 'ring', 'fade'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-pulse-ping"><span></span><span></span></div>`,
    css: `.l-pulse-ping{position:relative;width:var(--lc-size,40px);height:var(--lc-size,40px)}
.l-pulse-ping span{position:absolute;inset:0;border-radius:50%;background:var(--lc-color,#5b8def)}
.l-pulse-ping span:first-child{animation:l-pulse-ping-pg var(--lc-speed,1.2s) cubic-bezier(0,0,.2,1) infinite;opacity:.6}
.l-pulse-ping span:last-child{transform:scale(.55)}
@keyframes l-pulse-ping-pg{75%,100%{transform:scale(1.6);opacity:0}}`,
  },
  {
    id: 'pulse-grid', name: 'Pulse Grid', category: 'pulse', tags: ['grid', 'pulse', 'nine'],
    variables: { '--lc-size': '12px', '--lc-color': '#5b8def', '--lc-speed': '1.3s' },
    html: `<div class="l-pulse-grid"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-pulse-grid{display:grid;grid-template-columns:repeat(3,var(--lc-size,12px));gap:calc(var(--lc-size,12px)/2)}
.l-pulse-grid span{width:var(--lc-size,12px);height:var(--lc-size,12px);border-radius:2px;background:var(--lc-color,#5b8def);animation:l-pulse-grid-g var(--lc-speed,1.3s) ease-in-out infinite}
.l-pulse-grid span:nth-child(1){animation-delay:.0s}
.l-pulse-grid span:nth-child(2){animation-delay:.1s}
.l-pulse-grid span:nth-child(3){animation-delay:.2s}
.l-pulse-grid span:nth-child(4){animation-delay:.1s}
.l-pulse-grid span:nth-child(5){animation-delay:.2s}
.l-pulse-grid span:nth-child(6){animation-delay:.3s}
.l-pulse-grid span:nth-child(7){animation-delay:.2s}
.l-pulse-grid span:nth-child(8){animation-delay:.3s}
.l-pulse-grid span:nth-child(9){animation-delay:.4s}
@keyframes l-pulse-grid-g{0%,70%,100%{transform:scale(.4);opacity:.4}35%{transform:scale(1);opacity:1}}`,
  },

  // ---------- ripple ----------
  {
    id: 'ripple-double', name: 'Double Ripple', category: 'ripple', tags: ['ripple', 'ring', 'expand'],
    variables: { '--lc-size': '56px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-ripple-double"><span></span><span></span></div>`,
    css: `.l-ripple-double{position:relative;width:var(--lc-size,56px);height:var(--lc-size,56px)}
.l-ripple-double span{position:absolute;top:50%;left:50%;border:3px solid var(--lc-color,#5b8def);border-radius:50%;opacity:1;transform:translate(-50%,-50%);animation:l-ripple-double-r var(--lc-speed,1.4s) cubic-bezier(0,.2,.8,1) infinite}
.l-ripple-double span:last-child{animation-delay:calc(var(--lc-speed,1.4s)/-2)}
@keyframes l-ripple-double-r{0%{width:0;height:0;opacity:1}100%{width:var(--lc-size,56px);height:var(--lc-size,56px);opacity:0}}`,
  },
  {
    id: 'ripple-radar', name: 'Radar Sweep', category: 'ripple', tags: ['radar', 'sweep', 'rotate'],
    variables: { '--lc-size': '52px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<div class="l-ripple-radar"></div>`,
    css: `.l-ripple-radar{width:var(--lc-size,52px);height:var(--lc-size,52px);border-radius:50%;border:2px solid color-mix(in srgb,var(--lc-color,#5b8def) 25%,transparent);background:conic-gradient(var(--lc-color,#5b8def),transparent 35%);-webkit-mask:radial-gradient(circle,transparent 0,#000 1px);animation:l-ripple-radar-r var(--lc-speed,1.4s) linear infinite}
@keyframes l-ripple-radar-r{to{transform:rotate(1turn)}}`,
  },

  // ---------- wave ----------
  {
    id: 'wave-squares', name: 'Wave Squares', category: 'wave', tags: ['wave', 'square', 'translate'],
    variables: { '--lc-size': '12px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-wave-squares"><span></span><span></span><span></span><span></span></div>`,
    css: `.l-wave-squares{display:flex;gap:calc(var(--lc-size,12px)/2);height:calc(var(--lc-size,12px)*3)}
.l-wave-squares span{width:var(--lc-size,12px);height:var(--lc-size,12px);background:var(--lc-color,#5b8def);border-radius:3px;animation:l-wave-squares-w var(--lc-speed,1.2s) ease-in-out infinite}
.l-wave-squares span:nth-child(2){animation-delay:.15s}
.l-wave-squares span:nth-child(3){animation-delay:.3s}
.l-wave-squares span:nth-child(4){animation-delay:.45s}
@keyframes l-wave-squares-w{0%,100%{transform:translateY(0)}50%{transform:translateY(calc(var(--lc-size,12px)*1.6))}}`,
  },

  // ---------- bounce ----------
  {
    id: 'bounce-ball', name: 'Bouncing Ball', category: 'bounce', tags: ['ball', 'bounce', 'shadow'],
    variables: { '--lc-size': '24px', '--lc-color': '#5b8def', '--lc-speed': '.6s' },
    html: `<div class="l-bounce-ball"><span class="l-bounce-ball-b"></span><span class="l-bounce-ball-s"></span></div>`,
    css: `.l-bounce-ball{position:relative;width:var(--lc-size,24px);height:calc(var(--lc-size,24px)*2.4)}
.l-bounce-ball-b{position:absolute;top:0;width:var(--lc-size,24px);height:var(--lc-size,24px);border-radius:50%;background:var(--lc-color,#5b8def);animation:l-bounce-ball-up var(--lc-speed,.6s) cubic-bezier(.6,.05,.9,.6) infinite alternate}
.l-bounce-ball-s{position:absolute;bottom:0;left:10%;width:80%;height:6px;border-radius:50%;background:color-mix(in srgb,var(--lc-color,#5b8def) 30%,transparent);animation:l-bounce-ball-sh var(--lc-speed,.6s) ease infinite alternate}
@keyframes l-bounce-ball-up{to{top:calc(100% - var(--lc-size,24px))}}
@keyframes l-bounce-ball-sh{from{transform:scaleX(.6);opacity:.4}to{transform:scaleX(1);opacity:.9}}`,
  },
  {
    id: 'bounce-double', name: 'Double Bounce', category: 'bounce', tags: ['bounce', 'two', 'fade'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '2s' },
    html: `<div class="l-bounce-double"><span></span><span></span></div>`,
    css: `.l-bounce-double{position:relative;width:var(--lc-size,48px);height:var(--lc-size,48px)}
.l-bounce-double span{position:absolute;inset:0;border-radius:50%;background:var(--lc-color,#5b8def);opacity:.6;animation:l-bounce-double-b var(--lc-speed,2s) ease-in-out infinite}
.l-bounce-double span:last-child{animation-delay:calc(var(--lc-speed,2s)/-2)}
@keyframes l-bounce-double-b{0%,100%{transform:scale(0)}50%{transform:scale(1)}}`,
  },

  // ---------- flip ----------
  {
    id: 'flip-square', name: 'Flipping Square', category: 'flip', tags: ['flip', 'square', '3d'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-flip-square"></div>`,
    css: `.l-flip-square{width:var(--lc-size,40px);height:var(--lc-size,40px);background:var(--lc-color,#5b8def);animation:l-flip-square-f var(--lc-speed,1.2s) ease-in-out infinite}
@keyframes l-flip-square-f{0%{transform:perspective(120px) rotateX(0) rotateY(0)}50%{transform:perspective(120px) rotateX(-180deg) rotateY(0)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-180deg)}}`,
  },
  {
    id: 'flip-board', name: 'Folding Board', category: 'flip', tags: ['fold', 'plane', '3d'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '2.4s' },
    html: `<div class="l-flip-board"><span></span><span></span><span></span><span></span></div>`,
    css: `.l-flip-board{position:relative;width:var(--lc-size,40px);height:var(--lc-size,40px);transform:rotate(45deg)}
.l-flip-board span{position:absolute;width:50%;height:50%;float:left;transform:scale(1.1)}
.l-flip-board span:before{content:'';position:absolute;inset:0;background:var(--lc-color,#5b8def);animation:l-flip-board-f var(--lc-speed,2.4s) linear infinite both;transform-origin:100% 100%}
.l-flip-board span:nth-child(1){top:0;left:0}
.l-flip-board span:nth-child(2){top:0;right:0}.l-flip-board span:nth-child(2):before{animation-delay:.3s}
.l-flip-board span:nth-child(3){bottom:0;right:0}.l-flip-board span:nth-child(3):before{animation-delay:.6s}
.l-flip-board span:nth-child(4){bottom:0;left:0}.l-flip-board span:nth-child(4):before{animation-delay:.9s}
@keyframes l-flip-board-f{0%,10%{transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{transform:perspective(140px) rotateX(0);opacity:1}90%,100%{transform:perspective(140px) rotateY(180deg);opacity:0}}`,
  },

  // ---------- morph ----------
  {
    id: 'morph-blob', name: 'Morphing Blob', category: 'morph', tags: ['blob', 'morph', 'border-radius'],
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def', '--lc-speed': '3s' },
    html: `<div class="l-morph-blob"></div>`,
    css: `.l-morph-blob{width:var(--lc-size,44px);height:var(--lc-size,44px);background:var(--lc-color,#5b8def);animation:l-morph-blob-m var(--lc-speed,3s) ease-in-out infinite}
@keyframes l-morph-blob-m{0%,100%{border-radius:42% 58% 70% 30%/45% 45% 55% 55%;transform:rotate(0)}50%{border-radius:70% 30% 46% 54%/30% 60% 40% 70%;transform:rotate(180deg)}}`,
  },
  {
    id: 'morph-square-circle', name: 'Square ↔ Circle', category: 'morph', tags: ['morph', 'shape', 'rotate'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.6s' },
    html: `<div class="l-morph-square-circle"></div>`,
    css: `.l-morph-square-circle{width:var(--lc-size,40px);height:var(--lc-size,40px);background:var(--lc-color,#5b8def);animation:l-morph-square-circle-m var(--lc-speed,1.6s) ease-in-out infinite}
@keyframes l-morph-square-circle-m{0%,100%{border-radius:6%;transform:rotate(0)}50%{border-radius:50%;transform:rotate(180deg)}}`,
  },

  // ---------- orbit ----------
  {
    id: 'orbit-dual', name: 'Dual Orbit', category: 'orbit', tags: ['orbit', 'dots', 'rotate'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '1.3s' },
    html: `<div class="l-orbit-dual"><span></span><span></span></div>`,
    css: `.l-orbit-dual{position:relative;width:var(--lc-size,48px);height:var(--lc-size,48px);animation:l-orbit-dual-rot var(--lc-speed,1.3s) linear infinite}
.l-orbit-dual span{position:absolute;width:calc(var(--lc-size,48px)/4);height:calc(var(--lc-size,48px)/4);border-radius:50%;background:var(--lc-color,#5b8def)}
.l-orbit-dual span:first-child{top:0;left:calc(50% - var(--lc-size,48px)/8)}
.l-orbit-dual span:last-child{bottom:0;left:calc(50% - var(--lc-size,48px)/8);opacity:.5}
@keyframes l-orbit-dual-rot{to{transform:rotate(1turn)}}`,
  },

  // ---------- skeleton ----------
  {
    id: 'skeleton-text', name: 'Text Lines', category: 'skeleton', tags: ['text', 'shimmer', 'placeholder'],
    variables: { '--lc-size': '220px', '--lc-base': '#e2e8f0', '--lc-highlight': '#f1f5f9', '--lc-speed': '1.4s' },
    html: `<div class="l-skeleton-text"><div></div><div></div><div></div></div>`,
    css: `.l-skeleton-text{width:var(--lc-size,220px);display:flex;flex-direction:column;gap:10px}
.l-skeleton-text div{height:12px;border-radius:6px;background:linear-gradient(90deg,var(--lc-base,#e2e8f0) 25%,var(--lc-highlight,#f1f5f9) 37%,var(--lc-base,#e2e8f0) 63%);background-size:400% 100%;animation:l-skeleton-text-sh var(--lc-speed,1.4s) ease infinite}
.l-skeleton-text div:last-child{width:60%}
@keyframes l-skeleton-text-sh{0%{background-position:100% 0}100%{background-position:-100% 0}}`,
  },
  {
    id: 'skeleton-card', name: 'Card', category: 'skeleton', tags: ['card', 'shimmer', 'placeholder'],
    variables: { '--lc-size': '220px', '--lc-base': '#e2e8f0', '--lc-highlight': '#f1f5f9', '--lc-speed': '1.4s' },
    html: `<div class="l-skeleton-card"><div class="l-skeleton-card-img"></div><div class="l-skeleton-card-line"></div><div class="l-skeleton-card-line"></div></div>`,
    css: `.l-skeleton-card{width:var(--lc-size,220px);padding:14px;border-radius:12px;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.08);--g:linear-gradient(90deg,var(--lc-base,#e2e8f0) 25%,var(--lc-highlight,#f1f5f9) 37%,var(--lc-base,#e2e8f0) 63%)}
.l-skeleton-card-img{height:110px;border-radius:8px;margin-bottom:12px;background:var(--g);background-size:400% 100%;animation:l-skeleton-card-sh var(--lc-speed,1.4s) ease infinite}
.l-skeleton-card-line{height:12px;border-radius:6px;margin-top:8px;background:var(--g);background-size:400% 100%;animation:l-skeleton-card-sh var(--lc-speed,1.4s) ease infinite}
.l-skeleton-card-line:last-child{width:55%}
@keyframes l-skeleton-card-sh{0%{background-position:100% 0}100%{background-position:-100% 0}}`,
  },
  {
    id: 'skeleton-avatar', name: 'Avatar + Lines', category: 'skeleton', tags: ['avatar', 'shimmer', 'placeholder'],
    variables: { '--lc-size': '220px', '--lc-base': '#e2e8f0', '--lc-highlight': '#f1f5f9', '--lc-speed': '1.4s' },
    html: `<div class="l-skeleton-avatar"><div class="l-skeleton-avatar-c"></div><div class="l-skeleton-avatar-lines"><div></div><div></div></div></div>`,
    css: `.l-skeleton-avatar{width:var(--lc-size,220px);display:flex;align-items:center;gap:12px;--g:linear-gradient(90deg,var(--lc-base,#e2e8f0) 25%,var(--lc-highlight,#f1f5f9) 37%,var(--lc-base,#e2e8f0) 63%)}
.l-skeleton-avatar-c{flex:0 0 auto;width:48px;height:48px;border-radius:50%;background:var(--g);background-size:400% 100%;animation:l-skeleton-avatar-sh var(--lc-speed,1.4s) ease infinite}
.l-skeleton-avatar-lines{flex:1;display:flex;flex-direction:column;gap:8px}
.l-skeleton-avatar-lines div{height:12px;border-radius:6px;background:var(--g);background-size:400% 100%;animation:l-skeleton-avatar-sh var(--lc-speed,1.4s) ease infinite}
.l-skeleton-avatar-lines div:last-child{width:65%}
@keyframes l-skeleton-avatar-sh{0%{background-position:100% 0}100%{background-position:-100% 0}}`,
  },

  // ---------- progress ----------
  {
    id: 'progress-bar-indeterminate', name: 'Indeterminate Bar', category: 'progress', tags: ['bar', 'indeterminate', 'slide'],
    variables: { '--lc-size': '220px', '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-speed': '1.4s' },
    html: `<div class="l-progress-bar-indeterminate"><span></span></div>`,
    css: `.l-progress-bar-indeterminate{position:relative;width:var(--lc-size,220px);height:6px;border-radius:3px;background:var(--lc-track,#e2e8f0);overflow:hidden}
.l-progress-bar-indeterminate span{position:absolute;left:0;top:0;height:100%;width:40%;border-radius:3px;background:var(--lc-color,#5b8def);animation:l-progress-bar-indeterminate-s var(--lc-speed,1.4s) cubic-bezier(.4,0,.2,1) infinite}
@keyframes l-progress-bar-indeterminate-s{0%{left:-40%}100%{left:100%}}`,
  },
  {
    id: 'progress-bar-striped', name: 'Striped Bar', category: 'progress', tags: ['bar', 'striped', 'loop'],
    variables: { '--lc-size': '220px', '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-speed': '1s' },
    html: `<div class="l-progress-bar-striped"><span></span></div>`,
    css: `.l-progress-bar-striped{width:var(--lc-size,220px);height:12px;border-radius:6px;background:var(--lc-track,#e2e8f0);overflow:hidden}
.l-progress-bar-striped span{display:block;height:100%;width:65%;background-image:linear-gradient(45deg,rgba(255,255,255,.35) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.35) 50%,rgba(255,255,255,.35) 75%,transparent 75%);background-color:var(--lc-color,#5b8def);background-size:18px 18px;animation:l-progress-bar-striped-s var(--lc-speed,1s) linear infinite}
@keyframes l-progress-bar-striped-s{from{background-position:0 0}to{background-position:18px 0}}`,
  },
  {
    id: 'progress-circle', name: 'Circular Sweep', category: 'progress', tags: ['circle', 'conic', 'loop'],
    variables: { '--lc-size': '54px', '--lc-color': '#5b8def', '--lc-track': '#e2e8f0', '--lc-speed': '1.4s' },
    html: `<div class="l-progress-circle"></div>`,
    css: `.l-progress-circle{width:var(--lc-size,54px);height:var(--lc-size,54px);border-radius:50%;background:conic-gradient(var(--lc-color,#5b8def) var(--p,25%),var(--lc-track,#e2e8f0) 0);-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - var(--lc-size,54px)/6),#000 0);mask:radial-gradient(farthest-side,transparent calc(100% - var(--lc-size,54px)/6),#000 0);animation:l-progress-circle-s var(--lc-speed,1.4s) ease-in-out infinite}
@keyframes l-progress-circle-s{0%{--p:5%}50%{--p:90%}100%{--p:5%}}
@property --p{syntax:'<percentage>';inherits:false;initial-value:0%}`,
  },
  {
    id: 'progress-counter', name: 'Percent Counter', category: 'progress', tech: 'css+js', tags: ['counter', 'percent', 'number'],
    variables: { '--lc-size': '20px', '--lc-color': '#5b8def', '--lc-speed': '30ms' },
    html: `<div class="l-progress-counter"><span class="l-progress-counter-n">0</span><span class="l-progress-counter-p">%</span></div>`,
    css: `.l-progress-counter{font:600 var(--lc-size,20px)/1 ui-monospace,monospace;color:var(--lc-color,#5b8def);display:inline-flex;align-items:baseline;gap:1px}
.l-progress-counter-p{font-size:.6em;opacity:.7}`,
    js: `var n=root.querySelector('.l-progress-counter-n');var v=0;root._lcTimer=setInterval(function(){v=(v+1)%101;n.textContent=v;},30);`,
  },

  // ---------- svg ----------
  {
    id: 'svg-spinner-stroke', name: 'SVG Stroke Spinner', category: 'svg', tech: 'svg', tags: ['stroke', 'rotate', 'circle'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '1.4s' },
    html: `<svg class="l-svg-spinner-stroke" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></svg>`,
    css: `.l-svg-spinner-stroke{width:var(--lc-size,48px);height:var(--lc-size,48px);color:var(--lc-color,#5b8def);animation:l-svg-spinner-stroke-rot var(--lc-speed,1.4s) linear infinite}
.l-svg-spinner-stroke circle{animation:l-svg-spinner-stroke-dash var(--lc-speed,1.4s) ease-in-out infinite}
@keyframes l-svg-spinner-stroke-rot{to{transform:rotate(1turn)}}
@keyframes l-svg-spinner-stroke-dash{0%{stroke-dasharray:1 150;stroke-dashoffset:0}50%{stroke-dasharray:90 150;stroke-dashoffset:-35}100%{stroke-dasharray:90 150;stroke-dashoffset:-124}}`,
  },
  {
    id: 'svg-bars-grow', name: 'SVG Growing Bars', category: 'svg', tech: 'svg', tags: ['bars', 'scale', 'rect'],
    variables: { '--lc-size': '48px', '--lc-color': '#5b8def', '--lc-speed': '1s' },
    html: `<svg class="l-svg-bars-grow" viewBox="0 0 30 30"><rect x="1" y="6" width="6" height="18" rx="2"/><rect x="12" y="6" width="6" height="18" rx="2"/><rect x="23" y="6" width="6" height="18" rx="2"/></svg>`,
    css: `.l-svg-bars-grow{width:var(--lc-size,48px);height:var(--lc-size,48px);fill:var(--lc-color,#5b8def)}
.l-svg-bars-grow rect{transform-box:fill-box;transform-origin:center;animation:l-svg-bars-grow-g var(--lc-speed,1s) ease-in-out infinite}
.l-svg-bars-grow rect:nth-child(2){animation-delay:.15s}
.l-svg-bars-grow rect:nth-child(3){animation-delay:.3s}
@keyframes l-svg-bars-grow-g{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}`,
  },

  // ---------- text ----------
  {
    id: 'text-ellipsis', name: 'Loading Ellipsis', category: 'text', tags: ['text', 'ellipsis', 'dots'],
    variables: { '--lc-size': '18px', '--lc-color': '#334155', '--lc-speed': '1.4s' },
    html: `<div class="l-text-ellipsis">Loading<span>.</span><span>.</span><span>.</span></div>`,
    css: `.l-text-ellipsis{font:600 var(--lc-size,18px)/1 system-ui,sans-serif;color:var(--lc-color,#334155)}
.l-text-ellipsis span{opacity:0;animation:l-text-ellipsis-e var(--lc-speed,1.4s) infinite}
.l-text-ellipsis span:nth-child(2){animation-delay:.2s}
.l-text-ellipsis span:nth-child(3){animation-delay:.4s}
@keyframes l-text-ellipsis-e{0%,100%{opacity:0}40%,60%{opacity:1}}`,
  },
  {
    id: 'text-typing', name: 'Typing Cursor', category: 'text', tags: ['text', 'typing', 'cursor'],
    variables: { '--lc-size': '18px', '--lc-color': '#334155', '--lc-speed': '1s' },
    html: `<div class="l-text-typing">Loading<span class="l-text-typing-c"></span></div>`,
    css: `.l-text-typing{font:600 var(--lc-size,18px)/1 ui-monospace,monospace;color:var(--lc-color,#334155);display:inline-flex;align-items:center}
.l-text-typing-c{display:inline-block;width:2px;height:1.1em;margin-left:2px;background:var(--lc-color,#334155);animation:l-text-typing-b var(--lc-speed,1s) step-end infinite}
@keyframes l-text-typing-b{0%,100%{opacity:1}50%{opacity:0}}`,
  },
]

async function main() {
  let created = 0, skipped = 0
  for (const ld of LOADERS) {
    const dir = join(LOADERS_DIR, ld.category, ld.id)
    const metaPath = join(dir, 'meta.json')
    if (existsSync(metaPath) && !FORCE) { skipped++; continue }
    await mkdir(dir, { recursive: true })
    const meta = {
      id: ld.id,
      name: ld.name,
      category: ld.category,
      tags: ld.tags ?? [],
      tech: ld.tech ?? 'css',
      framework: 'none',
      dependencies: [],
      variables: ld.variables ?? {},
      source: SRC,
      license: 'MIT',
      generated: false,
      baseId: null,
    }
    await writeFile(metaPath, JSON.stringify(meta, null, 2) + '\n')
    await writeFile(join(dir, 'loader.html'), ld.html.trim() + '\n')
    if (ld.css) await writeFile(join(dir, 'loader.css'), ld.css.trim() + '\n')
    if (ld.js) await writeFile(join(dir, 'loader.js'), ld.js.trim() + '\n')
    created++
  }
  console.log(`Seed complete: ${created} created, ${skipped} skipped (already existed).`)
  console.log('Run "npm run build:registry" to refresh data/registry.json.')
}

main().catch((e) => { console.error(e); process.exit(1) })
