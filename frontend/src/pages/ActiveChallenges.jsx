import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import InterestsCTA from '../components/InterestsCTA'
import './ActiveChallenges.css'

const ActiveChallenges = () => {
  const [challenges, setChallenges] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
    })
    fetchChallenges()
  }, [])

  const fetchChallenges = async () => {
    try {
      const userStr = localStorage.getItem('user')
      if (!userStr) {
        console.warn('User not found in localStorage. Cannot fetch challenges.')
        setLoading(false)
        return
      }
      const user = JSON.parse(userStr)

      const response = await fetch(
        `http://localhost:3300/api/v1/challenges/daily?userId=${user.userId}&type=active`
      )
      if (response.ok) {
        const data = await response.json()
        setChallenges(data)
      } else {
        console.error(
          'Failed to fetch challenges:',
          response.status,
          response.statusText
        )
      }
    } catch (error) {
      console.error('Error fetching challenges:', error)
    } finally {
      setLoading(false)
    }
  }

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case 'Running':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
            <line x1="4" y1="22" x2="4" y2="15"></line>
          </svg>
        )
      case 'Strength':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v14a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V7a5 5 0 0 0-5-5z"></path>
            <path d="M14 9h4"></path>
          </svg>
        )
      case 'Cardio':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        )
      default:
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
            <line x1="4" y1="22" x2="4" y2="15"></line>
          </svg>
        )
    }
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="active-challenges-container">
          <div className="active-hero" data-aos="zoom-in">
            <h1 className="active-hero-title">
              Aktív{' '}
              <span style={{ color: 'var(--accent-red)' }}>Kihívások</span>
            </h1>
            <div className="active-hero-subtitle">Mozogj. Küzdj. Győzz.</div>
          </div>
          <div className="active-challenges-grid">
            <div
              className="loading-container"
              style={{
                position: 'static',
                background: 'transparent',
                height: '300px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gridColumn: '1 / -1',
              }}
            >
              <div className="loader"></div>
            </div>
          </div>
        </div>
        <InterestsCTA />
        <Footer />
      </>
    )
  }

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar />

      <div className="active-challenges-container">
        <div className="active-hero" data-aos="zoom-in">
          <h1 className="active-hero-title">
            Aktív <span style={{ color: 'var(--accent-red)' }}>Kihívások</span>
          </h1>
          <div className="active-hero-subtitle">Mozogj. Küzdj. Győzz.</div>
        </div>

        <div className="active-challenges-grid">
          {challenges.length === 0 ? (
            <div className="active-empty-state" data-aos="fade-up">
              <div className="active-empty-icon">🏃‍♂️</div>
              <h3>Nincs aktív kihívásod mára</h3>
              <p>
                Úgy tűnik, mára nincs elérhető feladat. Lehet, hogy nem
                választottál "Sport" vagy "Aktív" típusú érdeklődési kört, vagy
                már teljesítetted a mai limitet.
              </p>
              <button className="active-empty-btn">Kategóriák kezelése</button>
            </div>
          ) : (
            challenges.map((challenge, index) => (
              <div
                key={challenge.uuid || index}
                className="active-challenge-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="active-challenge-icon">
                  {getCategoryIcon(challenge.categories?.name)}
                </div>
                <div className="active-challenge-info">
                  <h3 className="active-challenge-name">{challenge.name}</h3>
                  <div className="active-challenge-meta">
                    <span className="active-meta-chip xp">
                      +{challenge.xp} XP
                    </span>
                    <div className="active-coin-reward-pill">
                      <span className="active-coin-icon-small">🪙</span>
                      <span>+{challenge.coin}</span>
                    </div>
                    <span className="active-meta-chip difficulty">
                      {challenge.difficulty}
                    </span>
                  </div>
                  <p className="active-challenge-desc">
                    {challenge.description}
                  </p>
                </div>
                <button className="active-btn-accept">
                  <span>Elfogadom</span>
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
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>


      <InterestsCTA />
      <Footer />
    </>
  )
}

export default ActiveChallenges
