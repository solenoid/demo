import type { NextApiResponse } from 'next'

export default (__: any, res: NextApiResponse) =>
  res.status(200).send(`
# Docs 1 README.md

This experiment is a bag of links to external docs.
`)
