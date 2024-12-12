import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';




// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@lib':  fileURLToPath(new URL ('./src/lib', import.meta.url)),
      '@src':fileURLToPath(new URL ('./src', import.meta.url)),
    },
  },

})
