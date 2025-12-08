import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2 className="footer-logo">
            <span>CHALLENGE</span>
            <span>HUB</span>
          </h2>
          <p className="footer-desc">
            Csatlakozz a kihívásokhoz, fejlődj és nyerj! A ChallengeHub a
            legjobb hely, hogy próbára tedd magad.
          </p>
        </div>

        <div className="footer-links-group">
          <div className="footer-column">
            <h3>Navigáció</h3>
            <ul>
              <li>
                <a href="/">Főoldal</a>
              </li>
              <li>
                <a href="/kihivasok">Kihívások</a>
              </li>
              <li>
                <a href="/bolt">Bolt</a>
              </li>
              <li>
                <a href="/bejelentkezes">Belépés</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Jogi</h3>
            <ul>
              <li>
                <a href="/aszf">ÁSZF</a>
              </li>
              <li>
                <a href="/adatvedelem">Adatvédelem</a>
              </li>
              <li>
                <a href="/kapcsolat">Kapcsolat</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Közösség</h3>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Discord">
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
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} ChallengeHub. Minden jog fenntartva.
        </p>
      </div>
    </footer>
  )
}

export default Footer
