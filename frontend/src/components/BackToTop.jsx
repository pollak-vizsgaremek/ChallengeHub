import React, { useState, useEffect } from 'react';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollTarget, setScrollTarget] = useState(null);

  // Show button when page is scrolled down
  const toggleVisibility = (e) => {
    // Determine the scroll amount from the event target or fallbacks
    let scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let currentTarget = window;

    if (e && e.target && e.target.scrollTop !== undefined) {
      if (e.target.scrollTop > scrollPos) {
        scrollPos = e.target.scrollTop;
        currentTarget = e.target;
      }
    }

    if (scrollPos > 100) {
      setIsVisible(true);
      setScrollTarget(currentTarget);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    if (scrollTarget && typeof scrollTarget.scrollTo === 'function') {
      scrollTarget.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility, { passive: true, capture: true });
    return () => window.removeEventListener('scroll', toggleVisibility, { passive: true, capture: true });
  }, []);

  return (
    <div className={`back-to-top ${isVisible ? 'visible' : ''}`}>
      <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Ugrás az oldal tetejére">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
};

export default BackToTop;
