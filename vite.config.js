import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// Configuración para GitHub Pages
export default defineConfig({
  base: '/app-chistes/', // Asegúrate de que esto coincida con el nombre de tu repositorio
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
