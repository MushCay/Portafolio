import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ portafolio-project /', // <- ¡Esto es lo que le indica dónde buscar los archivos!
})