import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '../02-Props/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
