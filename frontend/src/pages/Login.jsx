import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import Navbar from '../components/navbar';
import Footer from '../components/Footer';

import HCaptcha from '@hcaptcha/react-hcaptcha';
import { buildApiUrl } from '../utils/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaToken) {
      toast.error('Kérlek igazold, hogy nem vagy robot!');
      return;
    }

    try {
      const response = await fetch(buildApiUrl('/api/v1/auth/bejelentkezes'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password,
          captchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token and user info
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem(
          'user',
          JSON.stringify({
            userId: data.userId,
            username: data.username,
            email: data.email,
            isAdmin: data.isAdmin,
            onboardingCompleted: data.onboardingCompleted,
          })
        );

        // Redirect based on user type and onboarding status
        if (data.isAdmin) {
          navigate('/admin');
        } else if (!data.onboardingCompleted) {
          navigate('/kezdeti-lepesek');
        } else {
          navigate('/');
        }
        // Force update of Navbar component
        window.dispatchEvent(new Event('storage'));
      } else {
        toast.error(data.message || 'Sikertelen bejelentkezés!');
      }
    } catch (err) {
      console.error('Login error:', err);
      toast.error('Hálózati hiba történt!');
    }
  };

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar />

      <div className="main-container login-page">
        <div className="center-content">
          <div
            className="login-card"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="login-header">
              <h2 className="login-title">BEJELENTKEZÉS</h2>
              <p className="login-subtitle">
                Lépj be és teljesítsd a kihívást!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="input-group">
                <div className="input-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Email cím vagy Felhasználónév"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="modern-input"
                  required
                />
              </div>

              <div className="input-group">
                <div className="input-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="11"
                      width="18"
                      height="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Jelszavad"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="modern-input"
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  aria-label={
                    showPassword ? 'Jelszó elrejtése' : 'Jelszó megjelenítése'
                  }
                >
                  {showPassword ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>

              <div
                className="form-options"
                style={{ justifyContent: 'flex-end' }}
              >
                <a href="#" className="forgot-password">
                  Elfelejtett jelszó?
                </a>
              </div>

              <div className="captcha-container">
                <HCaptcha
                  sitekey="10000000-ffff-ffff-ffff-000000000001"
                  onVerify={(token) => setCaptchaToken(token)}
                  theme="dark"
                />
              </div>

              <button type="submit" className="btn btn-login full-width">
                <span>Belépés</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>

            <div className="login-footer">
              <p>
                Még nincs fiókod?{' '}
                <Link to="/regisztracio" className="register-link">
                  Regisztrálj!
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
