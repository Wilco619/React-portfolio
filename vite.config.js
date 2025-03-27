import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/React-portfolio/",
  build: {
    // Increase the chunk size warning limit
    chunkSizeWarningLimit: 1000, 
    
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        // Manual chunk splitting strategy
        manualChunks(id) {
          // Split node_modules into separate chunks
          if (id.includes('node_modules')) {
            // Split large libraries into their own chunks
            if (id.includes('@mui') || id.includes('@emotion')) {
              return 'vendor-mui';
            }
            if (id.includes('react-') || id.includes('/react/')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
        }
      }
    },
    
    // Use default minification
    minify: 'esbuild'
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'react-scroll',
      '@mui/material',
      '@mui/icons-material',
      '@emotion/react',
      '@emotion/styled'
    ]
  }
})