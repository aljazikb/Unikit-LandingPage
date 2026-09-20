import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages serves this project at https://<user>.github.io/Unikit-LandingPage/
  base: command === 'build' ? '/Unikit-LandingPage/' : '/',
}))
