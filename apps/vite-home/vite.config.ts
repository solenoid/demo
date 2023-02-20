import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { base } from './app-config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  build: {
    // minify: false,
  },
})
