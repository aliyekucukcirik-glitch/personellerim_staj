import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Kendi minimalist CSS ayarlarımız
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)