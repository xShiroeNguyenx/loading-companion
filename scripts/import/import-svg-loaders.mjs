// Importer — SVG Loaders (https://github.com/SamHerbert/SVG-Loaders), MIT, © Sam Herbert.
// These are genuine SMIL-animated SVGs (color via currentColor <- --lc-color).
// License kept at LICENSES/SVGLoaders-MIT.txt; copyright recorded per meta.json.
import { runBatch } from '../seed-lib.mjs'

const base = {
  source: { name: 'SVG Loaders', url: 'https://github.com/SamHerbert/SVG-Loaders', author: 'Sam Herbert' },
  license: 'MIT', copyright: 'Copyright (c) 2014 Sam Herbert', tech: 'svg',
}

const LOADERS = [
  {
    ...base, id: 'svgl-oval', name: 'SVG Oval', category: 'spinner', tags: ['ring', 'rotate', 'oval'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def' },
    html: `<svg class="l-svgl-oval" viewBox="0 0 38 38" stroke="currentColor"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".35" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg>`,
    css: `.l-svgl-oval{width:var(--lc-size,40px);height:var(--lc-size,40px);color:var(--lc-color,#5b8def)}`,
  },
  {
    ...base, id: 'svgl-puff', name: 'SVG Puff', category: 'ripple', tags: ['rings', 'expand', 'fade'],
    variables: { '--lc-size': '44px', '--lc-color': '#5b8def' },
    html: `<svg class="l-svgl-puff" viewBox="0 0 44 44" stroke="currentColor"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>`,
    css: `.l-svgl-puff{width:var(--lc-size,44px);height:var(--lc-size,44px);color:var(--lc-color,#5b8def)}`,
  },
  {
    ...base, id: 'svgl-three-dots', name: 'SVG Three Dots', category: 'dots', tags: ['dots', 'scale', 'three'],
    variables: { '--lc-size': '60px', '--lc-color': '#5b8def' },
    html: `<svg class="l-svgl-three-dots" viewBox="0 0 120 30" fill="currentColor"><circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"/><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"/></circle></svg>`,
    css: `.l-svgl-three-dots{width:var(--lc-size,60px);height:calc(var(--lc-size,60px)/4);color:var(--lc-color,#5b8def)}`,
  },
  {
    ...base, id: 'svgl-bars', name: 'SVG Audio Bars', category: 'bars', tags: ['audio', 'bars', 'height'],
    variables: { '--lc-size': '55px', '--lc-color': '#5b8def' },
    html: `<svg class="l-svgl-bars" viewBox="0 0 55 80" fill="currentColor"><rect width="10" height="20" x="0" y="30" rx="3"><animate attributeName="height" begin="0s" dur="1s" values="20;40;20" repeatCount="indefinite"/><animate attributeName="y" begin="0s" dur="1s" values="30;20;30" repeatCount="indefinite"/></rect><rect width="10" height="40" x="15" y="20" rx="3"><animate attributeName="height" begin="0.2s" dur="1s" values="40;60;40" repeatCount="indefinite"/><animate attributeName="y" begin="0.2s" dur="1s" values="20;10;20" repeatCount="indefinite"/></rect><rect width="10" height="50" x="30" y="15" rx="3"><animate attributeName="height" begin="0.4s" dur="1s" values="50;70;50" repeatCount="indefinite"/><animate attributeName="y" begin="0.4s" dur="1s" values="15;5;15" repeatCount="indefinite"/></rect><rect width="10" height="40" x="45" y="20" rx="3"><animate attributeName="height" begin="0.6s" dur="1s" values="40;60;40" repeatCount="indefinite"/><animate attributeName="y" begin="0.6s" dur="1s" values="20;10;20" repeatCount="indefinite"/></rect></svg>`,
    css: `.l-svgl-bars{width:var(--lc-size,55px);height:calc(var(--lc-size,55px)*1.1);color:var(--lc-color,#5b8def)}`,
  },
  {
    ...base, id: 'svgl-grid', name: 'SVG Grid', category: '3d', tags: ['grid', 'dots', 'fade'],
    variables: { '--lc-size': '54px', '--lc-color': '#5b8def' },
    html: `<svg class="l-svgl-grid" viewBox="0 0 105 105" fill="currentColor"><circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="52.5" cy="12.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="12.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"/></circle></svg>`,
    css: `.l-svgl-grid{width:var(--lc-size,54px);height:var(--lc-size,54px);color:var(--lc-color,#5b8def)}`,
  },
]

runBatch(LOADERS, 'import-svg-loaders')
