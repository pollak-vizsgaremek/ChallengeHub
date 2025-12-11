import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import './CustomChallenges.css'

const CustomChallenges = () => {
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
        `http://localhost:3300/api/v1/challenges/daily?userId=${user.userId}&type=custom`
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
      case 'Reading':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        )
      case 'Art':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
        )
      case 'Cooking':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
            <path d="M7 2v20"></path>
            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"></path>
          </svg>
        )
      case 'Meditation':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>
        )
      case 'Learning':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
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
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        )
    }
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="custom-challenges-container">
          <div className="ac-hero" data-aos="zoom-in">
            <h1 className="ac-hero-title">
              Egyéni{' '}
              <span style={{ color: 'var(--accent-green)' }}>Kihívások</span>
            </h1>
            <div className="ac-hero-subtitle">Alkoss. Fejlődj. Élj.</div>
          </div>
          <div className="challenges-grid">
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

      <div className="custom-challenges-container">
        <div className="ac-hero" data-aos="zoom-in">
          <h1 className="ac-hero-title">
            Egyéni{' '}
            <span style={{ color: 'var(--accent-green)' }}>Kihívások</span>
          </h1>
          <div className="ac-hero-subtitle">Alkoss. Fejlődj. Élj.</div>
        </div>

        <div className="challenges-grid">
          {challenges.length === 0 ? (
            <div className="empty-state" data-aos="fade-up">
              <div className="empty-icon">🧘</div>
              <h3>Nincs egyéni kihívásod mára</h3>
              <p>
                Úgy tűnik, mára nincs elérhető feladat. Ellenőrizd, hogy
                vettél-e fel "Egyéni" (pl. Olvasás, Művészet) kategóriákat az
                érdeklődési köreid közé!
              </p>
              <button className="empty-btn">Kategóriák kezelése</button>
            </div>
          ) : (
            challenges.map((challenge, index) => (
              <div
                key={challenge.uuid || index}
                className="challenge-card"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="challenge-icon">
                  {getCategoryIcon(challenge.categories?.name)}
                </div>
                <div className="challenge-info">
                  <h3 className="challenge-name">{challenge.name}</h3>
                  <div className="challenge-meta">
                    <span className="meta-chip xp">+{challenge.xp} XP</span>
                    <div className="coin-reward-pill">
                      <span className="coin-icon-small">🪙</span>
                      <span>+{challenge.coin}</span>
                    </div>
                    <span className="meta-chip difficulty">
                      {/* Assuming difficulty is a field in tasks logic or we skip it if not present */}
                      {/* {challenge.difficulty} */ 'Közepes'}
                    </span>
                  </div>
                  <p className="challenge-desc">{challenge.description}</p>
                </div>
                <button className="btn-accept">
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

      <Footer />
    </>
  )
}

export default CustomChallenges
