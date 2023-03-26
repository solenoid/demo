import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'

// initial render on the server
export const SSRRender = () => {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
