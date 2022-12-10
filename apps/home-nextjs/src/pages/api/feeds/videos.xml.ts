import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * See if or how this moves out of the pages dir when app dir comes out of beta
 * https://beta.nextjs.org/docs/data-fetching/api-routes
 */

const MISSING_REQUIRED = 'Missing required channel_id query parameter.'
const YOUTUBE_XML_FEED = 'https://www.youtube.com/feeds/videos.xml'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const channelId = req.query?.channel_id
  if (!channelId) {
    res.status(400).send(`Bad Request: ${MISSING_REQUIRED}`)
  } else {
    res.setHeader('Content-Type', 'text/xml; charset=UTF-8')
    const channelParam = `channel_id=${channelId}`
    try {
      await fetch(`${YOUTUBE_XML_FEED}?${channelParam}`)
        .then((p) => p.text())
        .then((xml) => res.status(200).send(xml))
    } catch (e) {
      res
        .status(500)
        .send(`Interenal Server Error: Feed for ${channelParam} not available.`)
    }
  }
}
export default handler
