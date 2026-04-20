import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React core in eigen chunk: lang gecached door de browser tussen deploys.
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Helmet apart: wordt op elke pagina geladen, klein.
          'helmet-vendor': ['react-helmet-async'],
          // Leaflet is groot en alleen op /kaart nodig. Met lazy-loaded route
          // wordt deze chunk pas binnengehaald als iemand de kaart opent.
          'leaflet-vendor': ['leaflet', 'react-leaflet'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
