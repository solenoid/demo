import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// hydrate a server render on the client side
ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
