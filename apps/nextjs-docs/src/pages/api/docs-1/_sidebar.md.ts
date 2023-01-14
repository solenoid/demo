import type { NextApiRequest, NextApiResponse } from 'next'

type simpleLinks = Array<{
  name: string
  to: string
}>
const sidebarGenericLinks: simpleLinks = [
  {
    name: 'Vitepress site',
    to: 'http://localhost:5173',
  },
  {
    name: 'Docsify site',
    to: 'http://localhost:9000',
  },
]
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const resText = sidebarGenericLinks
      .map((d) => `- [${d.name}](${d.to})`)
      .join('\n')
    return res.status(200).send(resText)
  } catch (e) {
    console.log(e)
    return res.status(500).send('Internal Server Error')
  }
}
