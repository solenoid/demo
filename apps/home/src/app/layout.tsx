import { ReactNode } from 'react'
import '../reset.css'
// import '../next-hacks.css'
import '../styles.css'
import AppNavbar from './AppNavbar'

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <AppNavbar>{children}</AppNavbar>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
