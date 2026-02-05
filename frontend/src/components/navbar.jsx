import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import '../styles/shopItems.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeItems, setActiveItems] = useState({
    border: null,
    nameColor: null,
  });
  const navigate = useNavigate();

  // Fetch active items
  const fetchActiveItems = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:3300/api/v1/shop/active?userId=${userId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setActiveItems({
          border: data.border,
          nameColor: data.nameColor,
        });
      }
    } catch (error) {
      console.error('Error fetching active items:', error);
    }
  };

  useEffect(() => {
    const checkLogin = () => {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        setIsLoggedIn(true);
        try {
          const user = JSON.parse(userStr);
          setUsername(user.username || 'Felhasználó');
          fetchActiveItems(user.userId);
        } catch (error) {
          console.error('Hibás user adat', error);
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
        setUsername('');
        setActiveItems({ border: null, nameColor: null });
      }
    };

    checkLogin();
    window.addEventListener('storage', checkLogin);

    // Listen for active items update event
    const handleActiveItemsUpdate = () => {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const user = JSON.parse(userStr);
        fetchActiveItems(user.userId);
      }
    };
    window.addEventListener('activeItemsUpdated', handleActiveItemsUpdate);

    return () => {
      window.removeEventListener('storage', checkLogin);
      window.removeEventListener('activeItemsUpdated', handleActiveItemsUpdate);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
    window.location.reload();
  };

  return (
    <nav className="navbar" data-aos="fade-down" data-aos-duration="1000">
      <Link to="/" className="logo">
        CHB
      </Link>
      <button
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>

      <div className={`nav-actions ${menuOpen ? 'open' : ''}`}>
        {isLoggedIn ? (
          <>
            <Link to="/profil" className="navbar-user-pill">
              <div
                className={`navbar-avatar-frame ${activeItems.border?.value || 'default-border'}`}
              >
                <div className="navbar-avatar-placeholder">
                  {username
                    .split(' ')
                    .map((word) => word.charAt(0))
                    .slice(0, 2)
                    .join('')
                    .toUpperCase()}
                </div>
              </div>
              <span
                className={`navbar-username ${activeItems.nameColor?.value || 'default-name-color'}`}
              >
                {username}
              </span>
            </Link>
            <Link
              to="/bolt"
              className="btn btn-shop"
              onClick={() => setMenuOpen(false)}
            >
              <div className="shop-icon-container">
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
              </div>
              <div className="shop-text-container">
                <span className="shop-main-text">BOLT</span>
              </div>
            </Link>
            <Link
              to="/ranglista"
              className="btn btn-leaderboard"
              onClick={() => setMenuOpen(false)}
            >
              <div className="leaderboard-icon-container">
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
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <div className="leaderboard-text-container">
                <span className="leaderboard-main-text">RANGLISTA</span>
              </div>
            </Link>
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
          <Link
            to="/bejelentkezes"
            className="btn btn-login"
            onClick={() => setMenuOpen(false)}
          >
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
  );
};

export default Navbar;
