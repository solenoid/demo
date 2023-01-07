import node from '@astrojs/node'
import react from '@astrojs/react'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  // server: { port: 3000 },
  integrations: [react()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
})
