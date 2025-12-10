import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Login.css'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/Footer'

import HCaptcha from '@hcaptcha/react-hcaptcha'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [captchaToken, setCaptchaToken] = useState('')

  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!captchaToken) {
      alert('Kérlek igazold, hogy nem vagy robot!')
      return
    }
  }

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
                  type="email"
                  placeholder="Email címed"
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
                  type="password"
                  placeholder="Jelszavad"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="modern-input"
                  required
                />
              </div>

              <div className="form-options">
                <label className="checkbox-container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Emlékezz rám
                </label>
                <a href="#" className="forgot-password">
                  Elfelejtett jelszó?
                </a>
              </div>

              <div className="captcha-container">
                <HCaptcha
                  sitekey="9738fd1e-909a-49d2-a5c2-bab085406aee"
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
  )
}

export default Login
