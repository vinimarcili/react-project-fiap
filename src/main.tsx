import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import App from '@/App.tsx'

// Configurar classes no HTML e body para layout completo
document.documentElement.lang = 'pt-br'
document.documentElement.className = 'w-full h-full overflow-x-hidden'
document.body.className = 'w-full h-full min-h-screen flex flex-col'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
