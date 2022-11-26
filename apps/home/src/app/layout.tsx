import { ReactNode } from 'react'
import '../reset.css'
// import '../next-hacks.css'
import '../styles.css'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div id="app-root">{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
