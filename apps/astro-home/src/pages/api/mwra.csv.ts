import type { APIRoute } from 'astro'

import { URL } from 'url'
import fs from 'fs/promises'
import pdf_table_extractor from 'pdf-table-extractor'
// TODO consider fixing up to at least get on the 2.x version of pdfjs-dist vs. 1.x
// or just do a fork and own it completely w/o the legacy from old JS / node etc.

const __dirname = new URL('.', import.meta.url).pathname
// TODO figure out a data dir plan once deployed
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

// After 3/21/2023 the PDF table parse joined two columns in one
// this assumes if we see a 6 digit number it should split into two 3 digit readings
// const longDigitPartsRe = /(\d{3})(\d{3})/

const pdfTableTransform = (d: any) =>
  d.pageTables
    .flatMap((page: any) => page.tables)
    .map((row: any) => {
      // rewrited data for extra long digits
      // const matched = row[1]?.match(longDigitPartsRe)
      // if (matched) {
      //   row[1] = matched[1]
      //   row[2] = matched[2]
      // }

      return row
        .slice(0, 5)
        .map((col: any) => (col && col !== 'ND' ? col.replace(/\n/g, '') : ''))
        .join(',')
    })
    .join('\n')

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
      const pathParts = pdfPath.split('/')
      const pdfName = pathParts[pathParts.length - 1]
      const pdfLocation = `${DATA_TMP}${pdfName}`
      try {
        await fs.access(pdfLocation)
      } catch (e) {
        const pdf = await fetch(`${PREFIX}${pdfPath}`).then((res) =>
          res.arrayBuffer()
        )
        await fs.writeFile(pdfLocation, Buffer.from(pdf))
      }
      const csvData: string = await new Promise((resolve, reject) => {
        const success = async (d: any) => {
          resolve(pdfTableTransform(d))
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
