import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portafolio/', // <- ¡Esto es lo que le indica dónde buscar los archivos!
})