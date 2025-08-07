import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default ({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd(), '')
  
  // Configuración de rutas base según el entorno
  let base = '/app-chistes/'
  
  // Para desarrollo local
  if (mode === 'development') {
    base = '/'
  }
  // Para builds de Android
  else if (mode === 'android' || process.env.CAPACITOR === 'true') {
    base = './'  // Ruta relativa para Android
    // Configurar variable de entorno para que la aplicación sepa que está en Android
    process.env.VITE_PLATFORM = 'android'
  }
  
  console.log(`Building with base: ${base || '(empty)'}, mode: ${mode}`)

  return defineConfig({
    base: base,
    plugins: [react()],
    server: {
      port: 3000,
      host: true,
      strictPort: true,
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: 3000
      },
      historyApiFallback: true,
    },
    preview: {
      port: 3000,
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
      sourcemap: mode === 'development',
      rollupOptions: {
        input: fileURLToPath(new URL('./index.html', import.meta.url)),
        output: {
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: (assetInfo) => {
            // Mover los assets a carpetas específicas para mejor organización
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (ext === 'css') {
              return 'assets/css/[name].[hash][extname]';
            }
            if (['png', 'jpe?g', 'svg', 'gif', 'webp'].includes(ext)) {
              return 'assets/images/[name].[hash][extname]';
            }
            if (['woff', 'woff2', 'eot', 'ttf', 'otf'].includes(ext)) {
              return 'assets/fonts/[name].[hash][extname]';
            }
            return 'assets/[name].[hash][extname]';
          }
        }
      }
    },
    esbuild: {
      loader: 'jsx',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./public', import.meta.url)),
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
    }
  })
}
