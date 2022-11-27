import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * See if or how this moves out of the pages dir when app dir comes out of beta
 * https://beta.nextjs.org/docs/data-fetching/api-routes
 */

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const channelId = req.query?.channel_id
  if (!channelId) {
    res.status(400).send('Missing required channel_id query parameter.')
  } else {
    res.setHeader('Content-Type', 'text/xml; charset=UTF-8')
    fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`)
      .then((p) => p.text())
      .then((xml) => res.status(200).send(xml))
  }
}
export default handler
