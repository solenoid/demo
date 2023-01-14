import type { NextApiRequest, NextApiResponse } from 'next'
import { getOrgRepoConfig, rewrite } from '../../utils'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { org = '', repo = '', pathParts } = req.query
    if (Array.isArray(org) || Array.isArray(repo)) {
      return res.status(400).send('Only one org and one repo is supported')
    }
    if (!Array.isArray(pathParts)) {
      return res.status(400).send('Expecting a list of pathParts')
    }
    const resourcePath = pathParts.join('/')
    if (Array.isArray(org) || Array.isArray(repo)) {
      return res.status(400).send('Only one org and one repo is supported')
    }
    const config = getOrgRepoConfig(org, repo)
    const resource = `${config?.site}/${resourcePath}`
    const fetchPromise = await fetch(resource)
    if (fetchPromise.status !== 200) {
      return res.status(404).send('Not Found')
    }
    const contentType = fetchPromise.headers.get('Content-Type') ?? 'text/plain'
    const sidebarText = await fetchPromise.text()
    const replacedText = rewrite(`${org}/${repo}`, sidebarText)
    return res
      .status(200)
      .setHeader('Content-Type', contentType)
      .send(replacedText)
  } catch (e) {
    console.log(e)
    return res.status(500).send('Internal Server Error')
  }
}
