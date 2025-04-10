import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/coder-app-tienda-de-cafe/',
  plugins: [react()],
})

/* // vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/coder-app-tienda-de-cafe/',
  plugins: [react()],
}) */