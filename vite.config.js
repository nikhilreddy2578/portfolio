import { defineConfig } from 'vite'

export default defineConfig({
  base: '/portfolio/', // Replace with your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})