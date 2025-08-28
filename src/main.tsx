import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// Global design tokens / css (keep if you need global variables; optional otherwise)
import '@trimble-oss/modus-web-components/dist/modus-web-components/modus-web-components.css'
import './styles/main.scss'
// Auto-register (lazy-load) all Modus web components; enables tree-shaking of unused components' code.
import { defineCustomElements } from '@trimble-oss/modus-web-components/loader'

defineCustomElements(window)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
