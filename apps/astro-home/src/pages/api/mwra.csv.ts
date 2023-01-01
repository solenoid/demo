import type { APIRoute } from 'astro'

import { URL } from 'url'
import fs from 'fs/promises'
// @ts-expect-error
import pdf_table_extractor from 'pdf-table-extractor'
// TODO consider fixing up to at least get on the 2.x version of pdfjs-dist vs. 1.x
// or just do a fork and own it completely w/o the legacy from old JS / node etc.

const __dirname = new URL('.', import.meta.url).pathname
const DATA_TMP = `${__dirname}/../../../data/`

try {
  await fs.mkdir(DATA_TMP)
} catch (e: any) {
  if (e?.code !== 'EEXIST') throw e
}

const PREFIX = 'https://www.mwra.com/biobot/'
const BIOBOT_PAGE = `${PREFIX}biobotdata.htm`

const textHeaders = {
  'Content-Type': 'text/plain',
}

const csvHeaders = {
  'Content-Type': 'text/csv',
}

export const get: APIRoute = async () => {
  const webPage = await fetch(BIOBOT_PAGE).then((res) => res.text())
  const nameMatch = webPage.match(/"([^"]*data\.pdf)"/)
  if (nameMatch === null) {
    return new Response(`No pdf found on ${BIOBOT_PAGE}`, {
      status: 404,
      headers: { ...textHeaders },
    })
  } else {
    try {
      const pdfPath = nameMatch[1]
      const pdf = await fetch(`${PREFIX}${pdfPath}`).then((res) =>
        res.arrayBuffer()
      )
      const pathParts = pdfPath.split('/')
      const pdfName = pathParts[pathParts.length - 1]
      const pdfLocation = `${DATA_TMP}${pdfName}`
      await fs.writeFile(pdfLocation, Buffer.from(pdf))
      const csvData: string = await new Promise((resolve, reject) => {
        const success = async (d: any) => {
          const data = d.pageTables
            .map((page: any) => page.tables)
            .flat()
            .map((row: any) =>
              row
                .map((col: any) =>
                  col && col !== 'ND' ? col.replace(/\n/g, '') : ''
                )
                .join(',')
            )
            .join('\n')
          resolve(data)
        }
        const error = (e: any) => {
          reject(e)
        }
        pdf_table_extractor(pdfLocation, success, error)
      })
      return new Response(csvData, {
        status: 200,
        headers: { ...csvHeaders },
      })
    } catch (e: any) {
      return new Response('Internal Server Error', {
        status: 500,
        headers: { ...textHeaders },
      })
    }
  }
}
