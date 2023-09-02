// vite define config
import { defineConfig } from 'vite'
// vite plugins
import react from '@vitejs/plugin-react-swc'
// config and helpers
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { apps, base } from './app-config.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const relativeFile = (file) => path.resolve(__dirname, file)

const appsInput = Object.fromEntries(
  Object.entries(apps).map(([k, v]) => [
    // NOTE: "output.entryFileNames" pattern, can be neither absolute nor relative path.
    k.replace(/\//g, '__'),
    relativeFile(v),
  ])
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  build: {
    // minify: false,
    rollupOptions: {
      input: appsInput,
    },
  },
})
