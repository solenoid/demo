import node from '@astrojs/node'
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

// For local dev port
const port = 9000

// https://astro.build/config
export default defineConfig({
  // NOTE trailing slash is added if you don't include it
  site: `http://localhost:${port}/`,
  server: { port },
  integrations: [react()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
})
