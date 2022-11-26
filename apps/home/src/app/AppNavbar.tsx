'use client'
import { Navbar } from '@solenoid/ui'
import { usePathname } from 'next/navigation'
import { navItems } from './mainNav'

const AppNavbar = () => {
  const currentPath = usePathname()
  return <Navbar items={navItems} currentPath={currentPath} />
}

export default AppNavbar
