'use client'
import { Navbar } from '@lib/ui'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, ReactNode } from 'react'
import { navItems } from './mainNav'

const AppNavbar = ({ children }: { children: ReactNode }) => {
  const currentPath = usePathname()
  const [expanded, setExpanded] = useState(false)
  return (
    <Navbar
      items={navItems}
      current={currentPath}
      expanded={expanded}
      setExpanded={setExpanded}
      LinkComponent={Link}
    >
      {children}
    </Navbar>
  )
}

export default AppNavbar
