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
  return (
    <nav aria-label="Navigation Menu">
      <h2>
        <Icon iconName="BarsSolid" /> {pageName}
      </h2>
      <ul>
        {props.tabs.map((tab) => (
          <li key={tab.slug}>
            {isActiveTab(tab) ? (
              <span className="current">
                <span className="visuallyhidden">Current Page: </span>
                {tab.icon && <Icon iconName={tab.icon} />}
                {tab.name}
              </span>
            ) : (
              <a href={`./${tab.slug}`}>
                {tab.icon && <Icon iconName={tab.icon} />}
                {tab.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
