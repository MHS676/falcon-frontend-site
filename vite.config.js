import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    // Image optimization settings
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').pop()
          if (/png|jpe?g|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img'
          } else if (/woff|woff2|ttf|otf|eot/i.test(extType)) {
            extType = 'fonts'
          } else if (/css/i.test(extType)) {
            extType = 'css'
          }
          return `${extType}/[name]-[hash][extname]`
        },
      },
    },
  },
  server: {
    port: 5173,
    strictPort: false,
  },
})
