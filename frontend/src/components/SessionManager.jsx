import React, { useState, useCallback, useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { useNavigate, useLocation } from 'react-router-dom';
import './SessionManager.css';
import toast from 'react-hot-toast';
import { buildApiUrl } from '../utils/api';

// Time constants
const IDLE_TIMEOUT = 10 * 60 * 10000; // 10 minutes in milliseconds
const PROMPT_BEFORE_IDLE = 60 * 1000; // 1 minute before idle

const SessionManager = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Track unique page view per session
  useEffect(() => {
    const trackView = async () => {
      const hasVisited = sessionStorage.getItem('hasVisited');
      if (!hasVisited) {
        try {
          await fetch(buildApiUrl('/api/v1/track-view'), {
            method: 'POST',
          });
          sessionStorage.setItem('hasVisited', 'true');
        } catch (error) {
          console.error('Hiba az oldalmegtekintés naplózásakor:', error);
        }
      }
    };
    trackView();
  }, []);

  // Check if user is logged in
  const isLoggedIn = () => {
    return !!localStorage.getItem('accessToken');
  };

  // Logout
  const handleLogout = useCallback(
    (showMessage = true) => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');

      if (showMessage) {
        sessionStorage.setItem(
          'sessionExpiredMessage',
          'A munkameneted lejárt inaktivitás miatt. Kérjük, jelentkezz be újra!'
        );
      }

      setShowWarning(false);
      window.dispatchEvent(new Event('storage'));
      navigate('/bejelentkezes');
    },
    [navigate]
  );

  // When user becomes idle (timeout)
  const onIdle = useCallback(() => {
    if (isLoggedIn()) {
      handleLogout(true);
    }
  }, [handleLogout]);

  // Show warning
  const onPrompt = useCallback(() => {
    if (isLoggedIn()) {
      setShowWarning(true);
    }
  }, []);

  // When user is active
  const onActive = useCallback(() => {
    setShowWarning(false);
  }, []);

  const { getRemainingTime, activate } = useIdleTimer({
    onIdle,
    onPrompt,
    onActive,
    timeout: IDLE_TIMEOUT,
    promptBeforeIdle: PROMPT_BEFORE_IDLE,
    events: [
      'mousemove',
      'keydown',
      'wheel',
      'DOMMouseScroll',
      'mousewheel',
      'mousedown',
      'touchstart',
      'touchmove',
      'MSPointerDown',
      'MSPointerMove',
      'visibilitychange',
      'focus',
    ],
    throttle: 500,
    eventsThrottle: 200,
    startOnMount: true,
    stopOnIdle: false,
    crossTab: true,
    syncTimers: 200,
  });

  // Update countdown
  useEffect(() => {
    let interval;
    if (showWarning) {
      interval = setInterval(() => {
        const time = Math.ceil(getRemainingTime() / 1000);
        setRemainingTime(time);
      }, 500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [showWarning, getRemainingTime]);

  // Show session expired message on login page
  useEffect(() => {
    if (location.pathname === '/bejelentkezes') {
      const message = sessionStorage.getItem('sessionExpiredMessage');
      if (message) {
        // Small delay to ensure the page is rendered
        setTimeout(() => {
          toast(message, { icon: '⚠️' });
          sessionStorage.removeItem('sessionExpiredMessage');
        }, 500);
      }
    }
  }, [location.pathname]);

  // Stay logged in button
  const handleStayLoggedIn = () => {
    setShowWarning(false);
    activate(); // Reset timer
  };

  // Logout button
  const handleLogoutClick = () => {
    handleLogout(false);
  };

  // Time format
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // If not logged in, do not show anything
  if (!isLoggedIn() || !showWarning) {
    return null;
  }

  return (
    <div className="session-warning-overlay">
      <div className="session-warning-modal">
        <div className="session-warning-icon">
          <svg
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>

        <h2 className="session-warning-title">Munkamenet lejár</h2>

        <p className="session-warning-message">
          Inaktivitás miatt a munkameneted hamarosan lejár.
        </p>

        <div className="session-warning-countdown">
          <span className="countdown-time">{formatTime(remainingTime)}</span>
          <span className="countdown-label">múlva kijelentkeztetünk</span>
        </div>

        <p className="session-warning-question">
          Szeretnél bejelentkezve maradni?
        </p>

        <div className="session-warning-buttons">
          <button
            className="session-btn session-btn-stay"
            onClick={handleStayLoggedIn}
          >
            Maradok bejelentkezve
          </button>
          <button
            className="session-btn session-btn-logout"
            onClick={handleLogoutClick}
          >
            Kijelentkezés
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionManager;
