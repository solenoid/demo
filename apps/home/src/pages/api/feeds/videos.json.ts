import type { NextApiRequest, NextApiResponse } from 'next'
import { XMLParser } from 'fast-xml-parser'

/**
 * See if or how this moves out of the pages dir when app dir comes out of beta
 * https://beta.nextjs.org/docs/data-fetching/api-routes
 */

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
  const href = entry?.link?.at_href
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
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const channelId = req.query?.channel_id
  if (!channelId) {
    res.status(400).json({ error: MISSING_REQUIRED })
  } else {
    res.setHeader('Content-Type', 'text/xml; charset=UTF-8')
    await fetch(`${YOUTUBE_XML_FEED}?channel_id=${channelId}`)
      .then((p) => p.text())
      .then((xml) => {
        const parser = new XMLParser(parserOptions)
        const parsed = parser.parse(xml)
        const entries = (parsed?.feed?.entry ?? []).map(mapper).sort(sorter)
        res.status(200).json({
          title: parsed?.feed?.title,
          uri: parsed?.feed?.author?.uri,
          entries,
        })
      })
  }
}

export default handler
