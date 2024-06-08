import type { APIRoute } from 'astro'

import { XMLParser } from 'fast-xml-parser'

const parserOptions = {
  ignoreAttributes: false,
  attributeNamePrefix: 'at_',
}

type Entry = {
  year: number
  month: number
  day: number
  published: number
  href: string
  title: string
  src: string
  width: number
  height: number
}
type EntryXML = any

/** returns only information that will be used */
const mapper = (entry: EntryXML): Entry => {
  const published = Date.parse(entry.published)
  const publishDate = new Date(published)
  const year = publishDate.getFullYear()
  const month = publishDate.getMonth() + 1
  const day = publishDate.getDate()
  // console.log(entry)
  const href = `https://invidious.drgns.space/watch?v=${entry['yt:videoId']}`
  const title = entry?.title
  const thumbnail = entry?.['media:group']?.['media:thumbnail']
  const src = thumbnail?.at_url
  const width = Number(thumbnail?.at_width)
  const height = Number(thumbnail?.at_height)
  return {
    published,
    year,
    month,
    day,
    href,
    title,
    src,
    width,
    height,
  }
}
/** sorts most recent first */
const sorter = (a: Entry, b: Entry) => b.published - a.published

const MISSING_REQUIRED = 'Missing required channel_id query parameter.'
const YOUTUBE_XML_FEED = 'https://www.youtube.com/feeds/videos.xml'
const jsonHeaders = {
  'Content-Type': 'application/json',
}

export const GET: APIRoute = async ({ url }) => {
  const channelId = url.searchParams.get('channel_id') ?? ''
  if (!channelId) {
    return new Response(
      JSON.stringify({
        code: 'Bad Request',
        message: MISSING_REQUIRED,
      }),
      {
        status: 400,
        headers: { ...jsonHeaders },
      }
    )
  } else {
    const channelParam = `channel_id=${channelId}`
    try {
      const fetchPromise = await fetch(`${YOUTUBE_XML_FEED}?${channelParam}`)
      if (fetchPromise.status !== 200) {
        return new Response(
          JSON.stringify({
            code: 'Unexpected Server Error',
            error: `Feed for ${channelParam} not available.`,
          }),
          {
            status: fetchPromise.status,
            headers: { ...jsonHeaders },
          }
        )
      }
      const xml = await fetchPromise.text()
      const parser = new XMLParser(parserOptions)
      const parsed = parser.parse(xml)
      // TODO consider storing channel id, title, uri look aside
      const title = parsed?.feed?.title
      const uri = parsed?.feed?.author?.uri
      const entries = (parsed?.feed?.entry ?? []).map(mapper).sort(sorter)
      return new Response(JSON.stringify({ title, uri, entries }), {
        status: 200,
        headers: { ...jsonHeaders },
      })
    } catch (reason: any) {
      if (
        // consider if errno is better
        // consider if hostname is useful off error or not
        reason?.cause?.code === 'ENOTFOUND' &&
        reason?.cause?.syscall === 'getaddrinfo'
      ) {
        return new Response(
          JSON.stringify({
            code: 'Bad Gateway',
            message: `${YOUTUBE_XML_FEED} not available.`,
          }),
          {
            // TODO 502 or 504 which makes more sense here?
            status: 502,
            headers: { ...jsonHeaders },
          }
        )
      } else {
        return new Response(
          JSON.stringify({
            code: 'Internal Server Error',
            error: `Feed for ${channelParam} not available.`,
          }),
          {
            status: 500,
            headers: { ...jsonHeaders },
          }
        )
      }
    }
  }
}
