import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const checkLogin = () => {
      const userStr = localStorage.getItem('user')
      if (userStr) {
        setIsLoggedIn(true)
        try {
          const user = JSON.parse(userStr)
          setUsername(user.username || 'Felhasználó')
        } catch (error) {
          console.error('Hibás user adat', error)
          setIsLoggedIn(false)
        }
      } else {
        setIsLoggedIn(false)
        setUsername('')
      }
    }

    checkLogin()
    window.addEventListener('storage', checkLogin)

    return () => {
      window.removeEventListener('storage', checkLogin)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    setIsLoggedIn(false)
    navigate('/')
    window.location.reload()
  }

  return (
    <nav className="navbar" data-aos="fade-down" data-aos-duration="1000">
      <Link to="/" className="logo">
        CHB
      </Link>
      <div className="nav-actions">
        <Link to="/bolt" className="btn btn-shop">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className="btn-label">ÜZLET</span>
        </Link>
        {isLoggedIn ? (
          <>
            <div className="navbar-user">
              <span className="navbar-username">{username}</span>
            </div>
            <button onClick={handleLogout} className="btn btn-logout">
              <div className="logout-icon-container">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </div>
              <div className="logout-text-container">
                <span className="logout-main-text">KIJELENTKEZÉS</span>
              </div>
            </button>
          </>
        ) : (
          <Link to="/bejelentkezes" className="btn btn-login">
            <div className="login-icon-container">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="login-text-container">
              <span className="login-main-text">JELENTKEZZ BE</span>
              <span className="login-sub-text">A TOVÁBBIAKÉRT</span>
            </div>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
