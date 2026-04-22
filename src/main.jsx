import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')

const tree = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)

// Sentinel `<!--ssr-->` in index.html wordt door scripts/prerender.mjs
// vervangen door gerenderde React-output. Als de sentinel weg is hebben we
// prerendered HTML en hydrateren we; anders (dev-mode of gefaalde prerender)
// vallen we terug op een gewone client-side render.
const hasPrerenderedContent = root.innerHTML.trim() !== '<!--ssr-->'

if (hasPrerenderedContent) {
  ReactDOM.hydrateRoot(root, tree)
} else {
  ReactDOM.createRoot(root).render(tree)
}
