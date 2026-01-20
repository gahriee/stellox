import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RouterProviderWrapper from './RouterProviderWrapper'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProviderWrapper />
  </StrictMode>,
)
