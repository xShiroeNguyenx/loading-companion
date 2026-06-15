// Importer — SpinKit (https://github.com/tobiasahlin/SpinKit), MIT, © Tobias Ahlin.
//
// SpinKit is MIT-licensed, so redistribution is permitted as long as the copyright
// notice + license text travel with the code. We therefore:
//   - keep the full license at LICENSES/SpinKit-MIT.txt,
//   - record source/license/copyright in every imported meta.json,
//   - normalize each loader to this project's conventions (classes & @keyframes
//     prefixed `l-<id>`, theming via --lc-size/--lc-color/--lc-speed).
//
// Run:  node scripts/import/import-spinkit.mjs   then   npm run build:registry
import { runBatch } from '../seed-lib.mjs'

const SOURCE = { name: 'SpinKit', url: 'https://github.com/tobiasahlin/SpinKit', author: 'Tobias Ahlin' }
const COPYRIGHT = 'Copyright (c) 2015 Tobias Ahlin'
const base = { source: SOURCE, license: 'MIT', copyright: COPYRIGHT }

const LOADERS = [
  {
    ...base, id: 'spinkit-wave', name: 'SpinKit Wave', category: 'bars', tags: ['wave', 'bars', 'five'],
    variables: { '--lc-size': '50px', '--lc-color': '#5b8def', '--lc-speed': '1.2s' },
    html: `<div class="l-spinkit-wave"><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-spinkit-wave{display:flex;justify-content:space-between;width:var(--lc-size,50px);height:calc(var(--lc-size,50px)*.8)}
.l-spinkit-wave span{background:var(--lc-color,#5b8def);height:100%;width:14%;animation:l-spinkit-wave-s var(--lc-speed,1.2s) ease-in-out infinite}
.l-spinkit-wave span:nth-child(2){animation-delay:-1.1s}
.l-spinkit-wave span:nth-child(3){animation-delay:-1s}
.l-spinkit-wave span:nth-child(4){animation-delay:-.9s}
.l-spinkit-wave span:nth-child(5){animation-delay:-.8s}
@keyframes l-spinkit-wave-s{0%,40%,100%{transform:scaleY(.4)}20%{transform:scaleY(1)}}`,
  },
  {
    ...base, id: 'spinkit-cube-grid', name: 'SpinKit Cube Grid', category: '3d', tags: ['grid', 'cubes', 'scale'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.3s' },
    html: `<div class="l-spinkit-cube-grid"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>`,
    css: `.l-spinkit-cube-grid{width:var(--lc-size,40px);height:var(--lc-size,40px)}
.l-spinkit-cube-grid span{width:33.33%;height:33.33%;float:left;background:var(--lc-color,#5b8def);animation:l-spinkit-cube-grid-s var(--lc-speed,1.3s) ease-in-out infinite}
.l-spinkit-cube-grid span:nth-child(1){animation-delay:.2s}
.l-spinkit-cube-grid span:nth-child(2){animation-delay:.3s}
.l-spinkit-cube-grid span:nth-child(3){animation-delay:.4s}
.l-spinkit-cube-grid span:nth-child(4){animation-delay:.1s}
.l-spinkit-cube-grid span:nth-child(5){animation-delay:.2s}
.l-spinkit-cube-grid span:nth-child(6){animation-delay:.3s}
.l-spinkit-cube-grid span:nth-child(7){animation-delay:0s}
.l-spinkit-cube-grid span:nth-child(8){animation-delay:.1s}
.l-spinkit-cube-grid span:nth-child(9){animation-delay:.2s}
@keyframes l-spinkit-cube-grid-s{0%,70%,100%{transform:scale3D(1,1,1)}35%{transform:scale3D(0,0,1)}}`,
  },
  {
    ...base, id: 'spinkit-chasing-dots', name: 'SpinKit Chasing Dots', category: 'orbit', tags: ['dots', 'rotate', 'two'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '2s' },
    html: `<div class="l-spinkit-chasing-dots"><span></span><span></span></div>`,
    css: `.l-spinkit-chasing-dots{position:relative;width:var(--lc-size,40px);height:var(--lc-size,40px);animation:l-spinkit-chasing-dots-r var(--lc-speed,2s) linear infinite}
.l-spinkit-chasing-dots span{position:absolute;top:0;width:60%;height:60%;border-radius:100%;background:var(--lc-color,#5b8def);animation:l-spinkit-chasing-dots-b var(--lc-speed,2s) ease-in-out infinite}
.l-spinkit-chasing-dots span:last-child{top:auto;bottom:0;animation-delay:-1s}
@keyframes l-spinkit-chasing-dots-r{100%{transform:rotate(360deg)}}
@keyframes l-spinkit-chasing-dots-b{0%,100%{transform:scale(0)}50%{transform:scale(1)}}`,
  },
  {
    ...base, id: 'spinkit-wandering-cubes', name: 'SpinKit Wandering Cubes', category: '3d', tags: ['cubes', 'path', 'two'],
    variables: { '--lc-size': '40px', '--lc-color': '#5b8def', '--lc-speed': '1.8s' },
    html: `<div class="l-spinkit-wandering-cubes"><span></span><span></span></div>`,
    css: `.l-spinkit-wandering-cubes{position:relative;width:var(--lc-size,40px);height:var(--lc-size,40px)}
.l-spinkit-wandering-cubes span{position:absolute;top:0;left:0;width:25%;height:25%;background:var(--lc-color,#5b8def);animation:l-spinkit-wandering-cubes-m var(--lc-speed,1.8s) ease-in-out infinite}
.l-spinkit-wandering-cubes span:last-child{animation-delay:-.9s}
@keyframes l-spinkit-wandering-cubes-m{25%{transform:translateX(300%) rotate(-90deg) scale(.5)}50%{transform:translateX(300%) translateY(300%) rotate(-180deg)}75%{transform:translateX(0) translateY(300%) rotate(-270deg) scale(.5)}100%{transform:none}}`,
  },
]

runBatch(LOADERS, 'import-spinkit')
