import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'

export const SSRRender = () => {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}