import type { APIRoute } from 'astro'

import fs from 'fs/promises'

const __dirname = new URL('.', import.meta.url).pathname
const csvData = await fs.readFile(`${__dirname}/../../../data/expenses.csv`)
const textHeaders = {
  'Content-Type': 'text/plain',
}

const csvHeaders = {
  'Content-Type': 'text/csv',
}

export const GET: APIRoute = async () => {
  try {
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
