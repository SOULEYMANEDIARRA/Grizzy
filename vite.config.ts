import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@data': resolve(__dirname, 'src/data'),
      '@types': resolve(__dirname, 'src/types'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@hooks': resolve(__dirname, 'src/hooks')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    },
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: true
  },
  server: {
    port: 3000,
    open: true,
    host: true,
    cors: true,
    // Ajouter pour éviter les problèmes de redirection
    hmr: {
      protocol: 'ws',
      host: 'localhost'
    }
  },
  preview: {
    port: 3000,
    host: true,
    cors: true
  },
  // Important pour SPA
  define: {
    'process.env': {}
  }
})