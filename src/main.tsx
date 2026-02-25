import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Reveal after React + CSS are ready
requestAnimationFrame(() => {
  const root = document.getElementById('root')
  if (root) {
    root.style.transition = 'opacity 0.15s'
    root.style.opacity = '1'
  }
})
