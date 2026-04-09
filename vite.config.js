import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/',
  plugins: [
    tailwindcss(),
    
  ],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Suppress "use client" directive warnings from external packages
        if (warning.message.includes('Module level directives cause errors when bundled')) {
          return
        }
        warn(warning)
      }
    }
  }
})
