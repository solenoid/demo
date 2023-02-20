import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'url'
import express from 'express'
import { base } from './app-config.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, 'dist/client')
const indexFile = path.resolve(__dirname, 'dist/client/index.html')
const serveIndexFile = async (___, res) => {
  const template = await fs.readFile(indexFile, 'utf-8')
  const render = (await import('./dist/server/entry-server.js')).SSRRender
  const appHtml = render()
  const html = template.replace('<!-- APP GOES HERE -->', appHtml)
  res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
}

const app = express()

export async function createServer() {
  // gzip compression
  app.use((await import('compression')).default())
  // static client resources that have already been built
  app.use(base, (await import('serve-static')).default(root, { index: false }))
  // server pages that have been server rendered
  app.use(`${base}*`, serveIndexFile)

  return { app }
}

createServer().then(({ app }) =>
  app.listen(9003, () => {
    console.log('http://localhost:9003')
  })
)
