import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'vazirmatn/Vazirmatn-font-face.css'
import App from './App.tsx'
import './assets/styles/index.scss'
import { MainContextProvider } from './contexts/MainContext.tsx'
import './i18n.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </StrictMode>,
)
