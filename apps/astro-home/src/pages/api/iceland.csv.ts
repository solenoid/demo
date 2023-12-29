import type { APIRoute } from 'astro'

const ENDPOINT =
  'http://brunnur.vedur.is/gps/timeseries/timeseries/SENG-plate.NEU'

const textHeaders = {
  'Content-Type': 'text/plain',
}

const csvHeaders = {
  'Content-Type': 'text/csv',
}

/**
 * A row has a mix of tabs and space delimiters.
 * All but the header row has a leading space also.
 *
 * @returns an array of csv rows with clarified headers.
 */
const rowMapper = (row: string, i: number) =>
  i === 0
    ? row
        .split(/\s+/g)
        .map((cell) => cell.replace('#yyyy/mm/dd', 'date'))
        .join(',')
    : row.trimStart().split(/\s+/g).join(',')

export const GET: APIRoute = async () => {
  try {
    const fetchPromise = await fetch(ENDPOINT)
    if (fetchPromise.status !== 200) {
      return new Response(
        `Unexpected Server Error\nData for ${ENDPOINT} not available.`,
        {
          status: fetchPromise.status,
          headers: { ...textHeaders },
        }
      )
    }
    const dec = new TextDecoder()
    const buf = await fetchPromise.arrayBuffer()
    const str = dec.decode(buf).split('\n').map(rowMapper).join('\n')
    return new Response(str, {
      status: 200,
      headers: { ...csvHeaders },
    })
  } catch (reason: any) {
    if (
      // consider if errno is better
      // consider if hostname is useful off error or not
      reason?.cause?.code === 'ENOTFOUND' &&
      reason?.cause?.syscall === 'getaddrinfo'
    ) {
      return new Response(
        `Unexpected Server Error\nData for ${ENDPOINT} not available.`,
        {
          // TODO 502 or 504 which makes more sense here?
          status: 502,
          headers: { ...textHeaders },
        }
      )
    } else {
      console.error(reason)
      return new Response(
        `Internal Server Error\nData for ${ENDPOINT} not available.`,
        {
          status: 500,
          headers: { ...textHeaders },
        }
      )
    }
  }
}
