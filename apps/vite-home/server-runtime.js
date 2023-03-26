import express from 'express'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { apps, base } from './app-config.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, 'dist/client')

const ssrIndex = (filePath) => async (___, res) => {
  const template = await fs.readFile(filePath, 'utf-8')
  const render = (await import('./dist/server/entry-server.js')).SSRRender
  const appHtml = render()
  const html = template.replace('<!-- APP -->', appHtml)
  res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
}
const spaIndex = (filePath) => async (___, res) => {
  const html = await fs.readFile(filePath, 'utf-8')
  res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
}

const app = express()
const staticOptions = {
  index: false,
  redirect: false,
}

export async function createServer() {
  // gzip compression
  app.use((await import('compression')).default())
  // static client resources that have already been built
  app.use(base, (await import('serve-static')).default(root, staticOptions))

  // serve up app index files
  Object.entries(apps).forEach(([appBase, appName]) => {
    if (appBase.endsWith('/ssr')) {
      // ssr rendered
      app.use(`${appBase}*`, ssrIndex(`${root}/${appName}`))
    } else {
      // spa client only rendered
      app.use(`${appBase}*`, spaIndex(`${root}/${appName}`))
    }
  })

  return { app }
}

createServer().then(({ app }) =>
  app.listen(9003, () => {
    console.log('http://localhost:9003')
  })
)
