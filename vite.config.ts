import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: process.env.VITE_BASE_PATH || '/', // Use root path for Vercel, can override for GitHub Pages
    server: {
        port: 3000,
    }
})
