'use client'
import { Navbar, NavbarVisibility } from '@solenoid/ui'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { navItems } from './mainNav'

const AppNavbar = () => {
  const currentPath = usePathname()
  const [navbarVisibility, setNavbarVisibility] =
    useState<NavbarVisibility>('icons-only')
  return (
    <Navbar
      items={navItems}
      currentPath={currentPath}
      currentVisibility={navbarVisibility}
      setVisibility={setNavbarVisibility}
      linkComponent={Link}
    />
  )
}

export default AppNavbar
