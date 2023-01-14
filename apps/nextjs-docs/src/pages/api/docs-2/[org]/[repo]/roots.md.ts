import type { NextApiRequest, NextApiResponse } from 'next'
import { getFrameSrcEmbed } from '../../utils'

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { org = '', repo = '' } = req.query
    if (Array.isArray(org) || Array.isArray(repo)) {
      return res.status(400).send('Only one org and one repo is supported')
    }
    const resText = getFrameSrcEmbed(org, repo)
    return res.status(200).send(resText)
  } catch (e) {
    return res.status(500).send('Internal Server Error')
  }
}
