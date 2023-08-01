import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css:{
    preprocessorOption: {
      scss: {
        additionalData:`
        @import "@/app/styles/variables.scss";
        @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;1,100&display=swap');
        `
      }
    }
  }
})
