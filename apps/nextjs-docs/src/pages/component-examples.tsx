import { useState } from 'react'
import { Button, Navbar } from 'shared-ui'

export default () => {
  const [expanded, setExpanded] = useState(true)
  return (
    <div>
      <h1>Docs Components</h1>
      <p>TODO figure out a plan for component docs.</p>
      <hr />
      <h2>Button</h2>
      <Button />
      <hr />
      <h2>Navbar</h2>
      <Navbar
        current="/1"
        items={[
          { text: 'First', path: '/1' },
          { text: 'Second', path: '/2' },
          { text: 'Third', path: '/3', icon: 'CampgroundSolid' },
        ]}
        expanded={expanded}
        setExpanded={setExpanded}
      />
      <hr />
    </div>
  )
}
