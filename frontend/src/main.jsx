import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const FooldalPage = lazy(() => import('./pages/Fooldal'))
const ActiveChallengesPage = lazy(() => import('./pages/ActiveChallenges'))
const CustomChallengesPage = lazy(() => import('./pages/CustomChallenges'))
const ShopPage = lazy(() => import('./pages/Shop'))
const LoginPage = lazy(() => import('./pages/Login'))
const RegisterPage = lazy(() => import('./pages/Register'))
const OnboardingPage = lazy(() => import('./pages/Onboarding'))
import Music from './components/Music'
import ProtectedRoute from './guards/ProtectedRoute'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Music />
      <Suspense
        fallback={
          <div className="loading-container">
            <div className="loader"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<FooldalPage />} />
          <Route element={<ProtectedRoute />}>
            {/* Ideiglenses ez lesz a neve hogy aktiv-kihivasok */}
            <Route path="/aktiv-kihivasok" element={<ActiveChallengesPage />} />
            <Route
              path="/egyeni-kihivasok"
              element={<CustomChallengesPage />}
            />
            <Route path="/kezdeti-lepesek" element={<OnboardingPage />} />
          </Route>
          <Route path="/bolt" element={<ShopPage />} />
          <Route path="/bejelentkezes" element={<LoginPage />} />
          <Route path="/regisztracio" element={<RegisterPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
)
