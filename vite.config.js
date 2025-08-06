import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// Usa la variable de entorno VITE_BASE para definir el base, por defecto '/'
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
})
