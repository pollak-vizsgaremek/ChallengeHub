import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Register.css'; // Using the specific CSS file for Register
import { Link, useNavigate } from 'react-router-dom';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import toast from 'react-hot-toast';

import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
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

    if (password !== confirmPassword) {
      toast.error('A jelszavak nem egyeznek!');
      return;
    }

    try {
      const response = await fetch(
        'http://localhost:3300/api/v1/auth/regisztracio',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            email,
            password,
            passwordConfirm: confirmPassword,
            captchaToken,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success('Sikeres regisztráció! Most már bejelentkezhetsz.');
        navigate('/bejelentkezes');
      } else {
        toast.error(data.message || 'Sikertelen regisztráció!');
      }
    } catch (err) {
      console.error('Registration error:', err);
      toast.error('Hálózati hiba történt!');
    }
  };

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar />

      <div className="main-container register-page">
        {' '}
        {/* Reusing generic container layout */}
        <div className="center-content">
          <div
            className="register-card"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <div className="register-header">
              <h2 className="register-title">REGISZTRÁCIÓ</h2>
              <p className="register-subtitle">
                Csatlakozz és kezdj bele a kihívásokba!
              </p>
            </div>

            <form className="register-form" onSubmit={handleSubmit}>
              {/* Name Input */}
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
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Felhasználóneved"
                  className="modern-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              {/* Email Input */}
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
                  type="email"
                  placeholder="Email címed"
                  className="modern-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Input */}
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
                  type="password"
                  placeholder="Jelszó"
                  className="modern-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Confirm Password Input */}
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
                  type="password"
                  placeholder="Jelszó megerősítése"
                  className="modern-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              <div className="captcha-container">
                <HCaptcha
                  sitekey="10000000-ffff-ffff-ffff-000000000001"
                  onVerify={(token) => setCaptchaToken(token)}
                  theme="dark"
                />
              </div>

              <button type="submit" className="btn btn-register full-width">
                <span>Regisztráció</span>
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

            <div className="register-footer">
              <p>
                Már van fiókod?{' '}
                <Link to="/bejelentkezes" className="register-link">
                  Jelentkezz be!
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

export default Register;
