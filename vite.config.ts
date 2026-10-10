import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths work both locally and under a GitHub Pages repo path.
  base: './',
  plugins: [react()],
})

