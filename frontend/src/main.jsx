import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const FooldalPage = lazy(() => import('./pages/Fooldal'))
const LoginPage = lazy(() => import('./pages/Login'))
const RegisterPage = lazy(() => import('./pages/Register'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="loading-container">
            <div className="loader"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<FooldalPage />} />
          <Route path="/bejelentkezes" element={<LoginPage />} />
          <Route path="/regisztracio" element={<RegisterPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)
