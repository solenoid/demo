import { ReactNode } from 'react'
import { Icon, IconNames } from './Icon'

// TODO reconsider design when basePath concerns settle down.
export type NavbarItems = Array<NavbarItem>
export type NavbarVisibility = 'icons-only' | 'icons-and-names' | 'hidden'
type Path = string
type NavbarItem = {
  text: string
  path: Path
  icon?: IconNames
}
type Props = {
  items: NavbarItems
  currentPath: Path | null
  currentVisibility: NavbarVisibility
  setVisibility: (newVisibility: NavbarVisibility) => void
  linkComponent?: any // TODO figure out types and sensible solution for this being optional
}

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

type aRenderType = {
  href: string
  children: ReactNode
}
const aRender = ({ href, children }: aRenderType) => (
  <a href={href}>{children}</a>
)

/**
 * We can accept a list of available `items`. The `currentPath` will not be a
 * link and should be communicated that it is the Current Page.
 */
export const Navbar = (props: Props) => {
  const { currentPath, items, currentVisibility, setVisibility } = props
  const isCurrent = (item: NavbarItem) => item.path === currentPath
  const pageName = items.find(isCurrent)?.text ?? 'Unknown'
  const LinkRender = props?.linkComponent?.render ?? aRender
  return (
    <>
      <h1 style={{ userSelect: 'none' }}>
        <span
          style={ItemIconStyle}
          onClick={() => {
            switch (currentVisibility) {
              case 'icons-and-names':
                setVisibility('icons-only')
                break
              case 'icons-only':
                setVisibility('hidden')
                break
              case 'hidden':
                setVisibility('icons-and-names')
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
        {currentVisibility !== 'hidden' && (
          <ul style={{ listStyle: 'none', paddingInlineStart: 0 }}>
            {items.map((item) => (
              <li key={item.path}>
                {isCurrent(item) ? (
                  <span className="current" style={{ stroke: currentColor }}>
                    {/* <span className="visuallyhidden">Current Page: </span> */}
                    <ItemIcon icon={item.icon} />
                    {currentVisibility !== 'icons-and-names' ? item.text : null}
                  </span>
                ) : (
                  LinkRender({
                    href: item.path,
                    children: (
                      <>
                        <ItemIcon icon={item.icon} />
                        {currentVisibility !== 'icons-and-names'
                          ? item.text
                          : null}
                      </>
                    ),
                  })
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  )
}
