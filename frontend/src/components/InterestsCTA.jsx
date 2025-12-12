import React from 'react'
import { Link } from 'react-router-dom'
import './InterestsCTA.css'

const InterestsCTA = () => {
  return (
    <div className="interests-cta-section" data-aos="fade-up">
      <div className="interests-cta-container">
        <div className="interests-content">
          <h3 className="interests-cta-title">ÚJ KIHÍVÁSOK VÁRNAK!</h3>
          <p className="interests-cta-desc">
            Változtak a céljaid? Ne hagyd, hogy unalmassá váljon az edzés! Szabd
            testre az érdeklődési köreidet, és kapj személyre szabott
            feladatokat minden nap!
          </p>
        </div>
        <Link to="/profil" className="interests-cta-btn">
          <span>TESTRESZABÁS</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default InterestsCTA
