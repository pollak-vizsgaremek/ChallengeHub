import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar" data-aos="fade-down" data-aos-duration="1000">
      <Link to="/" className="logo">
        CHB
      </Link>
      <div className="nav-actions">
        <Link to="/shop" className="btn btn-shop">
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
      </div>
    </nav>
  )
}

export default Navbar
