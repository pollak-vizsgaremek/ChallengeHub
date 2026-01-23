import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Fooldal.css';
import { Link } from 'react-router-dom';

import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const Fooldal = () => {
  const [stats, setStats] = useState({
    currentStreak: 0,
    longestStreak: 0,
    completedToday: false,
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false,
    });
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      setIsLoggedIn(true);
      fetchStats();
    } else {
      setIsLoggedIn(false);
    }
  };

  const fetchStats = async () => {
    try {
      const userStr = localStorage.getItem('user');
      if (!userStr) return;
      const user = JSON.parse(userStr);

      const response = await fetch(
        `http://localhost:3300/api/v1/users/stats?userId=${user.userId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar />

      <div className="main-container">
        <div className="center-content">
          <h1
            className="main-title"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <span>CHALLENGE</span>
            <span>HUB</span>
          </h1>

          {/* User Stats Section */}
          {isLoggedIn && (
            <div
              className="dashboard-stats"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="stat-item">
                <div className="stat-label">Mai nap</div>
                <div
                  className={`stat-value ${
                    stats.completedToday ? 'success' : ''
                  }`}
                >
                  {stats.completedToday ? 'Teljesítve! 🎉' : 'Még hátravan ⏳'}
                </div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-label">Jelenlegi Streak</div>
                <div className="stat-value">🔥 {stats.currentStreak} nap</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-label">Legjobb Streak</div>
                <div className="stat-value">🏆 {stats.longestStreak} nap</div>
              </div>
            </div>
          )}

          <div className="game-cards">
            {/* Active Challenge Card */}
            <Link
              to="/aktiv-kihivasok"
              className="game-card card-active"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="card-content">
                <div className="card-title">
                  AKTÍV
                  <br />
                  KIHÍVÁS
                </div>
                <div className="card-subtitle">Fuss, Mozogj, Teljesíts</div>
              </div>
            </Link>

            {/* Custom/Creative Challenge Card */}
            <Link
              to="/egyeni-kihivasok"
              className="game-card card-custom"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="card-content">
                <div className="card-title">
                  EGYÉNI
                  <br />
                  KIHÍVÁS
                </div>
                <div className="card-subtitle">Kreatív & Egyéb Feladatok</div>
              </div>
            </Link>
          </div>

          {/* How to Play Section */}
          <div
            className="how-to-play"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <h2 className="how-to-title">Így Kezdj Bele</h2>
            <div className="steps-container">
              <div className="step-card">
                <div className="step-number">01</div>
                <div className="step-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
                <h3 className="step-title">Regisztráció</h3>
                <p className="step-desc">
                  Csatlakozz a közösséghez egy gyors fiók létrehozásával.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number">02</div>
                <div className="step-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </div>
                <h3 className="step-title">Válassz</h3>
                <p className="step-desc">
                  Találd meg a neked való kihívást: sport vagy kreatív.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number">03</div>
                <div className="step-icon">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
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
                <h3 className="step-title">Győzz</h3>
                <p className="step-desc">
                  Teljesítsd a feladatot és zsebeld be a pontokat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer-controls"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="800"
      >
        <div className="control-btn" title="Nyelv">
          <svg
            width="24"
            height="24"
            viewBox="0 0 36 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="8" fill="#CE2939" />
            <rect y="8" width="36" height="8" fill="white" />
            <rect y="16" width="36" height="8" fill="#477050" />
          </svg>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Fooldal;
