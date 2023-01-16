import type { NextApiResponse } from 'next'

export default (__: any, res: NextApiResponse) =>
  res.status(200).send(`
# Docs Aggregator README.md

Now it assumes it can link to docsify docs and with sidebar link rewriting
get the links to point throught the API to get to them.
`)
