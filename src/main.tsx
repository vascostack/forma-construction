import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/layout/Header/Navbar.tsx'  
import App from './App.tsx'
import Navbar from './components/layout/Header/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <App />
  </StrictMode>,
)
