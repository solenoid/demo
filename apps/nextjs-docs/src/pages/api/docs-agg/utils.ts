type docLinks = Array<{
  /** sidebar link name */
  name: string
  /** org/repo unique key to join on, other code may start relying on this */
  org_repo: string
  /** ultimate endpoint that will have their own docs */
  site: string
  /** docsify homepage, will default to README.md if not given */
  home?: string
  /** docsify sidebar, will default to _sidebar.md if not given */
  sidebar?: string
}>

/**
 * Hardcoded list of sites to aggregate for local testing. This could turn into
 * a simple durable storage that could be updated in isolation from the code.
 */
const items: docLinks = [
  {
    name: 'Docsify site',
    org_repo: 'solenoid/demo',
    site: 'http://localhost:9998/',
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
  {
    name: 'docsify-themeable',
    org_repo: 'jhildenbiddle/docsify-themeable',
    site: 'https://jhildenbiddle.github.io/docsify-themeable/',
    home: 'introduction.md',
    sidebar: 'sidebar.md',
  },
  {
    name: 'mas',
    org_repo: 'solenoid/mas',
    site: 'https://solenoid.github.io/mas/',
  },
]

export const getSideBarLinks = () => {
  return [
    '- Docisfy Sites',
    '',
    ...items
      // show deeper links that assume link rewriting will work
      .map((d) => `  - [${d.name}](/${d.org_repo}/${d.home ?? 'README.md'})`),
  ].join('\n')
}

export const getOrgRepoConfig = (org: string, repo: string) =>
  items.find((d) => d.org_repo === `${org}/${repo}`)

// Useful way to go about markdown file link rewrites including schemeless
// riff from https://github.com/sindresorhus/is-absolute-url
const ABSOLUTE_URL_RE = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
const SCHEMELESS_URL_RE = /^\/\//
const LEADING_SLASH_RE = /^\//

// Useful way to get link and text ignore images
// riff from https://github.com/sethvincent/rewrite-markdown-urls
const LINK_RE = /([^!])\[([^\]]+)]\(([^\)]*)\)/g

// Can have double or single quote :include for special docsify handling
const HAS_INCLUDE = /['"]:include/

/**
 * `prefix` is assumed to always have a trailing slash on it when present
 */
export const rewrite = (prefix: string, mdSrc: string) =>
  mdSrc.replace(LINK_RE, (__, b, text, link: string) =>
    // Allow external http://example.com to avoid rewrites
    ABSOLUTE_URL_RE.test(link) ||
    // Allow external //example.com to avoid rewrites
    SCHEMELESS_URL_RE.test(link) ||
    // Allow any ':include ... to avoid rewrites
    HAS_INCLUDE.test(link) ||
    // Avoid double rewrites if prefix is already present
    link.startsWith(`${prefix}`)
      ? `${b}[${text}](${link})`
      : LEADING_SLASH_RE.test(link)
      ? // leading slash /rooted/links added beyond the prefix
        `${b}[${text}](${prefix}${link.slice(1)})`
      : // no leading slash relative/links added beyond the prefix
        `${b}[${text}](${prefix}${link})`
  )

/** minimal default export so these utils can co-exist in the apis dir */
export default (__: any, res: any) => res.status(200).send('hi')
