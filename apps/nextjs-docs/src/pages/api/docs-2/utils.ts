type docLinks = Array<{
  /** sidebar link name */
  name: string
  /** key is a unique key to join on, in practice it's org/repo style now */
  org_repo: string
  /** ultimate endpoint that will have their own docs */
  site: string
  /** docsify homepage, will default to README.md if not given */
  home?: string
}>

const items: docLinks = [
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
  {
    name: 'DocsifyJS Tutorial',
    org_repo: 'michaelcurrin/docsify-js-tutorial',
    site: 'https://michaelcurrin.github.io/docsify-js-tutorial/',
  },
  {
    name: 'Docsify Open Publishing Starter Kit',
    org_repo: 'hibbitts-design/demo-docsify-open-publishing-starter-kit',
    site: 'https://hibbitts-design.github.io/demo-docsify-open-publishing-starter-kit/',
    home: 'home.md',
  },
]

export const getSideBarLinks = () => {
  return [
    '- Experimental sidebar rewrite',
    '',
    ...items
      // show deeper links that assume link rewriting will work
      .map((d) => `  - [${d.name}](${d.org_repo}/${d.home ?? 'README.md'})`),
    '',
    '- Embed iframes',
    '',
    ...items
      // assumes every site is a nested iframe
      .map((d) => `  - [${d.name}](${d.org_repo}/roots)`),
    '',
    '- New pages',
    '',
    ...items
      // assumes every site should open in a new window
      .map((d) => `  - [${d.name}](${d.site})`),
  ].join('\n')
}

export const getFrameSrcEmbed = (org: string, repo: string) => {
  return items
    .filter((d) => d.org_repo === `${org}/${repo}`)
    .map(
      (d) =>
        `[${d.name} website](${d.site} ':include :type=iframe width=100% height=400px')`
    )
    .join('\n')
}

export const getOrgRepoConfig = (org: string, repo: string) =>
  items.find((d) => d.org_repo === `${org}/${repo}`)

// Useful way to go about markdown file link rewrites
// riff from https://github.com/sindresorhus/is-absolute-url
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
// riff from https://github.com/sethvincent/rewrite-markdown-urls
const linkRe = /\(([^\)]*)\)/g
export const rewrite = (prefix: string, mdSrc: string) =>
  mdSrc.replace(linkRe, (__, existing) =>
    ABSOLUTE_URL_REGEX.test(existing)
      ? `(${existing})`
      : `(${prefix}/${existing})`
  )

/** minimal default export so these utils can co-exist in the apis dir */
export default (__: any, res: any) => res.status(200).send('hi')
