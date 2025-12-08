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
        <button className="btn btn-shop">
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
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Bolt
        </button>
        <Link to="/bejelentkezes" className="btn btn-login">
          <span>BEJELENTKEZÉS</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
