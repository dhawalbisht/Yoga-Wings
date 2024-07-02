import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Map '@images' to your images directory
      '@images': path.resolve(__dirname, 'src/assets/images')
    }
  },
  // If you need to serve static files directly from src/assets/images
  server: {
    // Assuming images are in src/assets/images, serve them as public
    fsServe: {
      root: path.resolve(__dirname, 'src/assets')
    }
  }
})
