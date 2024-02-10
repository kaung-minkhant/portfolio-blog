import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    federation({
      name: 'portfolio-blog',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
        './blog': './src/App',
      },
      shared: ['react', 'react-dom']
    })],
})
