import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/sergio99778_r/', // Based on the repo name and deployment context
    server: {
        port: 3000,
    }
})
