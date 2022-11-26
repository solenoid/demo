import { Button, Navbar } from '@solenoid/ui'

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
      <hr />
      <h2>Button</h2>
      <Button />
      <hr />
      <h2>Navbar</h2>
      <Navbar
        currentPath="/1"
        items={[
          { text: 'First', path: '/1' },
          { text: 'Second', path: '/2' },
          { text: 'Third', path: '/3', icon: 'CampgroundSolid' },
        ]}
      />
      <hr />
    </div>
  )
}
