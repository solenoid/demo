import type { NextApiRequest, NextApiResponse } from 'next'
import { getOrgRepoConfig, rewrite } from '../../utils'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { org = '', repo = '' } = req.query
    if (Array.isArray(org) || Array.isArray(repo)) {
      return res.status(400).send('Only one org and one repo is supported')
    }
    const config = getOrgRepoConfig(org, repo)
    const sidebarName = config?.side ?? '_sidebar.md'
    const sidebarURL = `${config?.site}${sidebarName}`
    const fetchPromise = await fetch(sidebarURL)
    if (fetchPromise.status !== 200) {
      return res.status(404).send('Not Found')
    }
    const sidebarText = await fetchPromise.text()
    const replacedText = rewrite(`/${org}/${repo}`, sidebarText)
    return res.status(200).send(replacedText)
  } catch (e) {
    return res.status(500).send('Internal Server Error')
  }
}
