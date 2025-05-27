import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    allowedHosts: ["gogo.net", "test.gogo.net"]
  },
  plugins: [react()],
})
