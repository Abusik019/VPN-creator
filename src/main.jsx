import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { HashRouter } from 'react-router-dom'
import Home from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Home />
    </HashRouter>
  </StrictMode>,
)
