import { Icon, IconNames } from './Icon'

/** Work In Progress */
export type NavbarTabs = Array<{
  name: string
  slug: string
  icon?: IconNames
}>

// TODO think about Navbar Props structure more deeply
type Props = {
  tabs: NavbarTabs
}

/**
 * We can accept a list of available tabs.
 *
 * Also need a way to communicate which is active.
 */
export const Navbar = (props: Props) => {
  return (
    <nav>
      <ul>
        {props.tabs.map((d) => (
          <li key={d.slug}>
            {/* TODO figure out routing concerns along with basePath concerns */}
            <a href={`./${d.slug}`}>
              {d.icon && <Icon iconName={d.icon} />}
              {d.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
