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
        activeTab="1"
        tabs={[
          { name: 'First', slug: '1' },
          { name: 'Second', slug: '2' },
          { name: 'Third', slug: '3', icon: 'CampgroundSolid' },
        ]}
      />
      <hr />
    </div>
  )
}
