type simpleLinks = Array<{
  /** sidebar link name */
  name: string
  /** key is a unique key to join on, in practice it's org/repo style now */
  org_repo: string
  /** ultimate endpoint that will have their own docs */
  site: string
}>
// const API_BASE_PATH = '/api/docs-2/'

// need a trailing 'placeholder' for the mid because docsify strips a trailing
// level in nested sidebars
const sidebarGenericLinks: simpleLinks = [
  {
    name: 'Vitepress site',
    org_repo: 'solenoid/site-1',
    site: 'http://localhost:5173/',
  },
  {
    name: 'Docsify site',
    org_repo: 'solenoid/site-2',
    site: 'http://localhost:9000/',
  },
]

export const getSideBarLinks = () => {
  return [
    '- Recent Experiments',
    '',
    ...sidebarGenericLinks
      // assumes every site has a starting README.md for docs
      .map((d) => `  - [${d.name}](${d.org_repo}/README.md)`),
    '',
    '- Past Experiments',
    '',
    ...sidebarGenericLinks
      // assumes every site is a nested iframe
      .map((d) => `  - [${d.name}](${d.org_repo}/roots)`),
  ].join('\n')
}

export const getFrameSrcEmbed = (org: string, repo: string) => {
  return sidebarGenericLinks
    .filter((d) => d.org_repo === `${org}/${repo}`)
    .map(
      (d) =>
        `[${d.name} website](${d.site} ':include :type=iframe width=100% height=400px')`
    )
    .join('\n')
}

export const getOrgRepoConfig = (org: string, repo: string) =>
  sidebarGenericLinks.find((d) => d.org_repo === `${org}/${repo}`)

/** minimal default export so these utils can co-exist in the apis dir */
export default (__: any, res: any) => res.status(200).send('hi')
