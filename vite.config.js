import { defineConfig } from 'vite'

// Base './' keeps asset paths relative so the built gallery works on any
// static host (GitHub Pages, file server, sub-path deploys).
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    target: 'es2020',
  },
})
