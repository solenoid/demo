import type { NextApiRequest, NextApiResponse } from 'next'
import { getOrgRepoConfig } from '../../utils'

// TODO see if there is a better way to get markdown link paths
const linkRe = /\(([^\)]*)\)/g
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { org = '', repo = '' } = req.query
    if (Array.isArray(org) || Array.isArray(repo)) {
      return res.status(400).send('Only one org and one repo is supported')
    }
    const config = getOrgRepoConfig(org, repo)
    const assumedSidebar = `${config?.site}_sidebar.md`
    const fetchPromise = await fetch(assumedSidebar)
    if (fetchPromise.status !== 200) {
      return res.status(404).send('Not Found')
    }
    const sidebarText = await fetchPromise.text()
    // Assume we can inject a leading org/repo on all links.
    const replacedText = sidebarText.replaceAll(
      linkRe,
      (__, inner) => `(${org}/${repo}/${inner})`
    )
    return res.status(200).send(replacedText)
  } catch (e) {
    return res.status(500).send('Internal Server Error')
  }
}
