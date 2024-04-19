import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const BACKEND_URL = 'http://localhost:8080'; 

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/convert': {
        target: BACKEND_URL,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/convert/, '')
      }
    }
  }
});
