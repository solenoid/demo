import { Button, Navbar, NavbarVisibility } from '@solenoid/ui'
import { useState } from 'react'
export default function Docs() {
  const [navbarVisibility, setNavbarVisibility] =
    useState<NavbarVisibility>('icons-only')
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
        currentVisibility={navbarVisibility}
        setVisibility={setNavbarVisibility}
      />
      <hr />
    </div>
  )
}
