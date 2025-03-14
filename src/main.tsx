import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import RoutingConfig from './config/router.config'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutingConfig />
    </BrowserRouter>
    
  </React.StrictMode>,
)
