import Link from 'next/link'

/* eslint-disable react/display-name */
export default () => (
  <div>
    <h1>Docs Index</h1>
    <p>
      Lots of different approaches are being experimented with, while that broad
      experimentation is happening the organization is a little dis-jointed.
    </p>
    <ul>
      <li>
        <a href="/docs-agg.html">Docsify Aggregator Concept</a>, past
        experiments are docs-1.html and docs-2.html leading to this Aggregator
        concept without the iframe approach adding complexity.
      </li>
      <li>
        <Link href="/component-examples">Component Examples</Link>
      </li>
    </ul>
  </div>
)
