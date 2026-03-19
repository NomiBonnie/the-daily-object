import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.CF_PAGES ? '/' : '/the-daily-object/',
  server: {
    port: 3001
  }
})
