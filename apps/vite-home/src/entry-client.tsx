import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// TODO consider hydrate only endpint vs. client render only split
// riffed from https://ogzhanolguncu.com/blog/react-ssr-ssg-from-scratch
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
