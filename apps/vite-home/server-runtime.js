import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()

export async function createServer() {
  // static client resources that have already been built
  app.use(
    (await import('serve-static')).default(
      path.resolve(__dirname, 'dist/client'),
      { index: false }
    )
  )
  // server pages that have been server rendered
  app.use('*', async (__, res) => {
    const indexFile = path.resolve(__dirname, 'dist/client/index.html')
    const template = await fs.readFile(indexFile, 'utf-8')
    const render = (await import('./dist/server/entry-server.js')).SSRRender
    const appHtml = render()
    const html = template.replace('<!-- APP GOES HERE -->', appHtml)
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  })

  return { app }
}

createServer().then(({ app }) =>
  app.listen(9003, () => {
    console.log('http://localhost:9003')
  })
)
