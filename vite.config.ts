// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import path from "path"
// import react from "@vitejs/plugin-react"
import react from '@vitejs/plugin-react-swc'

import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Set a higher limit (e.g., 1000 kB)
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Separate large dependencies
        },
      },
    },
  },
})