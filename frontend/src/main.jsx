import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/shopItems.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const FooldalPage = lazy(() => import('./pages/Fooldal'));
const ActiveChallengesPage = lazy(() => import('./pages/ActiveChallenges'));
const CustomChallengesPage = lazy(() => import('./pages/CustomChallenges'));
const ShopPage = lazy(() => import('./pages/Shop'));
const LoginPage = lazy(() => import('./pages/Login'));
const RegisterPage = lazy(() => import('./pages/Register'));
const OnboardingPage = lazy(() => import('./pages/Onboarding'));
const ProfilePage = lazy(() => import('./pages/Profile'));
const LeaderboardPage = lazy(() => import('./pages/Leaderboard'));
const ContactPage = lazy(() => import('./pages/Contact'));
const AdminPage = lazy(() => import('./pages/Admin'));
import Music from './components/Music';
import SessionManager from './components/SessionManager';
import ProtectedRoute from './guards/ProtectedRoute';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(30, 30, 40, 0.95)',
            color: '#fff',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          },
          success: {
            iconTheme: { primary: '#10b981', secondary: '#fff' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#fff' },
          },
        }}
      />
      <Music />
      <SessionManager />
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
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/aktiv-kihivasok" element={<ActiveChallengesPage />} />
            <Route
              path="/egyeni-kihivasok"
              element={<CustomChallengesPage />}
            />
            <Route path="/kezdeti-lepesek" element={<OnboardingPage />} />
            <Route path="/profil" element={<ProfilePage />} />
            <Route path="/ranglista" element={<LeaderboardPage />} />
          </Route>
          <Route path="/bolt" element={<ShopPage />} />
          <Route path="/kapcsolat" element={<ContactPage />} />
          <Route path="/bejelentkezes" element={<LoginPage />} />
          <Route path="/regisztracio" element={<RegisterPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
