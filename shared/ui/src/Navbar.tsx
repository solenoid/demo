import Link from 'next/link'
import { CSSProperties, ReactNode } from 'react'
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
  current: Path | null
  expanded?: boolean
  setExpanded?: (expanded: boolean) => void
  LinkComponent?: typeof AComponent | typeof Link
  children?: ReactNode
}

const currentColor = '#d882d9'
const regularColor = '#c6c0e9'
const iconPad = 10
const contractedWidth = `calc(2 * ${iconPad}px + 24px)`
const expandedWidth = `calc(2 * ${iconPad}px + 24px + 75px)`
const ItemIconStyle = {
  paddingLeft: iconPad,
  paddingRight: iconPad,
  display: 'inline-block',
  width: contractedWidth,
}
const ItemIcon = ({ icon }: { icon?: IconNames }) =>
  icon ? (
    <Icon style={ItemIconStyle} iconName={icon} />
  ) : (
    <span style={ItemIconStyle}></span>
  )

type aRenderType = {
  href: string
  style: CSSProperties
  children: ReactNode
}
const AComponent = ({ href, style, children }: aRenderType) => (
  <a style={style} href={href}>
    {children}
  </a>
)

/**
 * We can accept a list of available `items`. The `current` will not be a
 * link and should be communicated that it is the Current Page.
 */
export const Navbar = (props: Props) => {
  const { current, items, expanded = false, setExpanded, children } = props
  const isCurrent = (item: NavbarItem) => item.path === current
  const pageName = items.find(isCurrent)?.text ?? 'Unknown'
  const LinkComponent = props?.LinkComponent ?? AComponent
  return (
    <>
      <h1 style={{ userSelect: 'none' }}>
        <span
          style={ItemIconStyle}
          onClick={() => {
            if (!setExpanded) return
            if (expanded) {
              setExpanded(false)
            } else {
              setExpanded(true)
            }
          }}
        >
          <Icon iconName="BarsSolid" />
        </span>
        {pageName}
      </h1>
      <div style={{ display: 'flex' }}>
        <nav
          style={{
            userSelect: 'none',
            minWidth: expanded ? expandedWidth : contractedWidth,
          }}
          aria-label="Navigation Menu"
        >
          <ul style={{ listStyle: 'none', paddingInlineStart: 0 }}>
            {items.map((item) => (
              <li key={item.path}>
                {isCurrent(item) ? (
                  <span
                    className="current"
                    style={{
                      color: currentColor,
                      fill: currentColor,
                    }}
                  >
                    {/* <span className="visuallyhidden">Current Page: </span> */}
                    <ItemIcon icon={item.icon} />
                    {expanded && item.text}
                  </span>
                ) : (
                  <LinkComponent
                    href={item.path}
                    style={{
                      display: 'block',
                      color: regularColor,
                      textDecoration: 'none',
                    }}
                  >
                    <ItemIcon icon={item.icon} />
                    {expanded && item.text}
                  </LinkComponent>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </div>
    </>
  )
}
