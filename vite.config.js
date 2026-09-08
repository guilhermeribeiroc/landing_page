import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/landing_page/' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname,
        iaHumanizada: new URL('./ia-humanizada/index.html', import.meta.url).pathname,
        diagnostico: new URL('./diagnostico/index.html', import.meta.url).pathname,
      },
    },
  },
})
