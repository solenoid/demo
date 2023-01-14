import type { NextApiRequest, NextApiResponse } from 'next'
import { getOrgRepoConfig } from '../../utils'

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
    // TODO see about parroting the content-type too
    const sidebarText = await fetchPromise.text()
    return res.status(200).send(sidebarText)
  } catch (e) {
    console.log(e)
    return res.status(500).send('Internal Server Error')
  }
}
