import { useState } from 'react'
import { Icon, IconNames } from './Icon'

type Slug = string

type NavbarTab = {
  name: string
  slug: Slug
  icon?: IconNames
}
/** Work In Progress */
export type NavbarTabs = Array<NavbarTab>

// TODO think about Navbar Props structure more deeply
type Props = {
  tabs: NavbarTabs
  activeTab: Slug
}

const iconPad = 10
const TabIconStyle = {
  paddingLeft: iconPad,
  paddingRight: iconPad,
  display: 'inline-block',
  minWidth: `calc(2 * ${iconPad}px + 24px)`,
}
const TabIcon = ({ icon }: { icon?: IconNames }) =>
  icon ? (
    <Icon style={TabIconStyle} iconName={icon} />
  ) : (
    <span style={TabIconStyle}></span>
  )

type SidebarState = 'icons-only' | 'icons-and-names' | 'hidden'
const currentColor = '#40c'

/**
 * We can accept a list of available tabs.
 *
 * Also need a way to communicate which is active.
 * That respects aria-current="page" or other https://www.w3.org/WAI/tutorials/menus/structure/
 */
export const Navbar = (props: Props) => {
  // TODO figure out routing concerns along with basePath concerns
  const isActiveTab = (tab: NavbarTab) => tab.slug === props.activeTab
  const pageName = props.tabs.find(isActiveTab)?.name ?? 'Unknown'
  const [sidebarState, setSidebarState] = useState<SidebarState>('icons-only')
  return (
    <>
      <h1 style={{ userSelect: 'none' }}>
        <span
          style={TabIconStyle}
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
            {props.tabs.map((tab) => (
              <li key={tab.slug}>
                {isActiveTab(tab) ? (
                  <span className="current" style={{ stroke: currentColor }}>
                    {/* <span className="visuallyhidden">Current Page: </span> */}
                    <TabIcon icon={tab.icon} />
                    {sidebarState !== 'icons-and-names' ? tab.name : null}
                  </span>
                ) : (
                  <a href={`./${tab.slug}`}>
                    <TabIcon icon={tab.icon} />
                    {sidebarState !== 'icons-and-names' ? tab.name : null}
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
