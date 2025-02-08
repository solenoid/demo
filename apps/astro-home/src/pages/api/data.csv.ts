import type { APIRoute } from 'astro'

import fs from 'fs/promises'

const __dirname = new URL('.', import.meta.url).pathname
const csvDir = `${__dirname}/../../../data`
const textHeaders = {
  'Content-Type': 'text/plain',
}

const csvHeaders = {
  'Content-Type': 'text/csv',
}

const defaultYear = new Date().getFullYear()
export const GET: APIRoute = async ({ url }) => {
  const year = url.searchParams.get('year') ?? `${defaultYear}`
  const category = url.searchParams.get('category') ?? 'walking'
  const dataType = url.searchParams.get('data_type') ?? 'data'
  const file = `${csvDir}/${category}-${year}-${dataType}.csv`
  const csvData = await fs.readFile(file)
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
