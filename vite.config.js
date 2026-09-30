import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/landing_page/' : '/',
  build: {
    rolldownOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        iaHumanizada: resolve(rootDir, 'ia-humanizada/index.html'),
        diagnostico: resolve(rootDir, 'diagnostico/index.html'),
      },
    },
  },
  plugins: [react()],
})
