import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from "react-helmet-async";
import RoutingConfig from './config/router.config'
import { BrowserRouter } from 'react-router-dom'
import SEO from './seo';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
  <React.StrictMode>
    <BrowserRouter>
      <SEO
      title="Manish Kumal - Web Developer & Future Nurse"
      description="Explore my work, skills, and future in healthcare and tech."
      image="/manish.png"
      url="https://manbahadurkumal.com.np"
      />
      <RoutingConfig />
    </BrowserRouter>
    
  </React.StrictMode>
  </HelmetProvider>
)
