'use client'
import { useState } from 'react'
import { Icon, IconNames } from './Icon'

// TODO reconsider design when basePath concerns settle down.
export type NavbarItems = Array<NavbarItem>
type Path = string
type NavbarItem = {
  text: string
  path: Path
  icon?: IconNames
}
type Props = {
  items: NavbarItems
  currentPath: Path | null
}
type SidebarState = 'icons-only' | 'icons-and-names' | 'hidden'

const currentColor = '#40c'
const iconPad = 10
const ItemIconStyle = {
  paddingLeft: iconPad,
  paddingRight: iconPad,
  display: 'inline-block',
  minWidth: `calc(2 * ${iconPad}px + 24px)`,
}
const ItemIcon = ({ icon }: { icon?: IconNames }) =>
  icon ? (
    <Icon style={ItemIconStyle} iconName={icon} />
  ) : (
    <span style={ItemIconStyle}></span>
  )

/**
 * We can accept a list of available `items`. The `currentPath` will not be a
 * link and should be communicated that it is the Current Page.
 */
export const Navbar = (props: Props) => {
  const isCurrent = (item: NavbarItem) => item.path === props.currentPath
  const pageName = props.items.find(isCurrent)?.text ?? 'Unknown'
  const [sidebarState, setSidebarState] = useState<SidebarState>('icons-only')
  return (
    <>
      <h1 style={{ userSelect: 'none' }}>
        <span
          style={ItemIconStyle}
          onClick={() => {
            switch (sidebarState) {
              case 'icons-and-names':
                setSidebarState('icons-only')
                break
              case 'icons-only':
                setSidebarState('hidden')
                break
              case 'hidden':
                setSidebarState('icons-and-names')
                break
              default:
                break
            }
          }}
        >
          <Icon iconName="BarsSolid" />
        </span>
        {pageName}
      </h1>
      <nav style={{ userSelect: 'none' }} aria-label="Navigation Menu">
        {sidebarState !== 'hidden' && (
          <ul style={{ listStyle: 'none', paddingInlineStart: 0 }}>
            {props.items.map((item) => (
              <li key={item.path}>
                {isCurrent(item) ? (
                  <span className="current" style={{ stroke: currentColor }}>
                    {/* <span className="visuallyhidden">Current Page: </span> */}
                    <ItemIcon icon={item.icon} />
                    {sidebarState !== 'icons-and-names' ? item.text : null}
                  </span>
                ) : (
                  <a href={item.path}>
                    <ItemIcon icon={item.icon} />
                    {sidebarState !== 'icons-and-names' ? item.text : null}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  )
}
