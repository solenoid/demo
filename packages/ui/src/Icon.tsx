import * as Icons from '@solenoid/icons'
import { SVGProps } from 'react'

export type IconNames = keyof typeof Icons
type Props = {
  iconName: IconNames
} & SVGProps<SVGSVGElement>

// TODO see about https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
// for a part to the icon alignment puzzle
const iconHackProps = {
  style: {
    // The position isn't allowed so we hack further with an as any cast
    position: 'relative',
    // TODO make this work across font sizes etc.
    // started with 18.5 * 0.125 based on article and default font size
    // adjusted to 3 for a hardcode for now
    top: 3,
    bottom: 0,
  } as any,
}

export const Icon = (props: Props) => {
  const { iconName, ...rest } = props
  return Icons[iconName]({
    ...rest,
    ...iconHackProps,
  })
}
