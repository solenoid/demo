import * as Icons from 'icons-shared'
import { SVGProps } from 'react'

export type IconNames = keyof typeof Icons
type Props = {
  iconName: IconNames
} & SVGProps<SVGSVGElement>

// TODO see about https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
// for a part to the icon alignment puzzle
const iconPrivateStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
}

export const Icon = (props: Props) => {
  const { iconName, ...rest } = props
  const iconProps = {
    ...rest,
    ...{
      style: {
        ...iconPrivateStyle,
        ...rest?.style,
      },
    },
  }
  return (
    <span className={`Icon ${iconName}`}>{Icons[iconName](iconProps)}</span>
  )
}
