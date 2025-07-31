import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginLayout from '@/layouts/LoginLayout'
import LoginPage from '@/pages/login/LoginPage'
import RegisterPage from '@/pages/register/RegisterPage'
import Footer from '@/components/Footer'
import '@/index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-full min-h-screen flex flex-col">
        <Routes>
          {/* Redireciona da raiz para /login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Rotas com LoginLayout */}
          <Route path="/login" element={
            <LoginLayout>
              <LoginPage />
            </LoginLayout>
          } />
          
          <Route path="/login/register" element={
            <LoginLayout>
              <RegisterPage />
            </LoginLayout>
          } />
        </Routes>
        
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
