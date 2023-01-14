import type { NextApiResponse } from 'next'

export default (__: any, res: NextApiResponse) =>
  res.status(200).send(`
# Docs 2 README.md

This experiment started using \`:include\` with iframes.

Note the \`<org>/<repo>/roots.md\` is a reserved filename for that purpose.

It used to serve the embeded iframe.

Now it assumes it can link to docsify docs and with sidebar link rewriting
get the links to point throught the API to get to them.
`)
