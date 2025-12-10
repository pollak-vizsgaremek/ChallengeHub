import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import './ActiveChallenges.css'

const ActiveChallenges = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      duration: 800,
    })
  }, [])

  //Ideiglenesen csak tömből raktam be az adatokat míg adatbázis nincs
  const challenges = [
    {
      id: 1,
      name: '5KM Futás',
      description:
        'Fuss le 5 kilométert egyhuzamban. Használj bármilyen futó applikációt a rögzítéshez.',
      xp: 500,
      coin: 100,
      difficulty: 'Közepes',
      icon: (
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
      ),
    },
    {
      id: 2,
      name: '100 Fekvőtámasz',
      description:
        'Nem kell egyben! A nap folyamán csinálj összesen 100 szabályos fekvőtámaszt.',
      xp: 400,
      coin: 80,
      difficulty: 'Nehéz',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6.5 6.5h11"></path>
          <path d="M6 16v-4h12v4"></path>
          <rect x="2" y="10" width="20" height="12" rx="2"></rect>
          <path d="M12 2v8"></path>
        </svg>
      ),
    },
    {
      id: 3,
      name: 'Lépcsőzés',
      description:
        'Mássz meg 1000 lépcsőfokot. Lehet lépcsőházban vagy edzőteremben.',
      xp: 300,
      coin: 50,
      difficulty: 'Könnyű',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="13 17 18 12 13 7"></polyline>
          <polyline points="6 17 11 12 6 7"></polyline>
        </svg>
      ),
    },
    {
      id: 4,
      name: 'Plank Kihívás',
      description: 'Tarts meg egy szabályos plank pozíciót legalább 2 percig.',
      xp: 450,
      coin: 90,
      difficulty: 'Haladó',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
    {
      id: 5,
      name: 'Biciklizés',
      description:
        'Tekerj le 20 kilométert. Városi vagy terepkerékpározás is ér.',
      xp: 600,
      coin: 150,
      difficulty: 'Közepes',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="5.5" cy="17.5" r="3.5"></circle>
          <circle cx="18.5" cy="17.5" r="3.5"></circle>
          <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"></path>
        </svg>
      ),
    },
  ]

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar />

      <div className="active-challenges-container">
        <div className="ac-hero" data-aos="zoom-in">
          <h1 className="ac-hero-title">
            Aktív <span style={{ color: 'var(--accent-red)' }}>Kihívások</span>
          </h1>
          <div className="ac-hero-subtitle">Mozogj. Küzdj. Győzz.</div>
        </div>

        <div className="challenges-grid">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.id}
              className="challenge-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="challenge-icon">{challenge.icon}</div>
              <div className="challenge-info">
                <h3 className="challenge-name">{challenge.name}</h3>
                <div className="challenge-meta">
                  <span className="meta-chip xp">+{challenge.xp} XP</span>
                  <div className="coin-reward-pill">
                    <span className="coin-icon-small">🪙</span>
                    <span>+{challenge.coin}</span>
                  </div>
                  <span className="meta-chip difficulty">
                    {challenge.difficulty}
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
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ActiveChallenges
