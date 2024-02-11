import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

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
        './blogEditorView': './src/views/editor/editor.wrapper',
      },
      shared: [
        'react', 'react-dom', 'styled-components', 'react-icons' 
      ]
    })],
    base: "./",
})
