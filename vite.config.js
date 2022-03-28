import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": __dirname + '/src/components/',
      "@styles": __dirname + '/src/styles/',
      "@customs": __dirname + '/src/customs/',
      "@helpers": __dirname + '/src/helpers/',
      "@features": __dirname + '/src/features/',
      "@configs": __dirname + '/src/configs/',
      "@pages": __dirname + '/src/pages/',
      "@routes": __dirname + '/src/routes/',
      "@images": __dirname + '/src/images/',
      "@root": __dirname + '/src/'
    }
  }
})

