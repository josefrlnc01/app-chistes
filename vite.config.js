import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default ({ mode }) => {
  // Load environment variables based on the current mode
  const env = loadEnv(mode, process.cwd(), '')
  
  // For Android builds, always use relative paths
  const isAndroid = mode === 'android' || process.env.CAPACITOR === 'true'
  const base = isAndroid ? '' : '/app-chistes/'
  
  console.log(`Building with base: ${base || '(empty)'}, mode: ${mode}, isAndroid: ${isAndroid}`)

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
      rollupOptions: {
        input: fileURLToPath(new URL('./index.html', import.meta.url)),
        output: {
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash][ext]'
        }
      }
    },
    esbuild: {
      loader: 'jsx',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
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
