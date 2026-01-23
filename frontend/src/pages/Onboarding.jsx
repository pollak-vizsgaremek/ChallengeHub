import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Onboarding.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const Onboarding = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [activityLevel, setActivityLevel] = useState(null);

  const activityLevels = [
    {
      id: 'casual',
      name: 'Laza',
      desc: 'Napi 1 kihívás. Csak lazán, semmi stressz.',
      icon: '☕',
      color: '#2ed573',
    },
    {
      id: 'active',
      name: 'Aktív',
      desc: 'Napi 3 kihívás. Fejlődni szeretnék.',
      icon: '🔥',
      color: '#ffa502',
    },
    {
      id: 'hardcore',
      name: 'Megszállott',
      desc: 'Napi 5+ kihívás. A határ a csillagos ég!',
      icon: '⚡',
      color: '#ff4757',
    },
  ];

  useEffect(() => {
    AOS.init({ once: true });
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3300/api/v1/categories', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handleFinish = async () => {
    const userStr = localStorage.getItem('user');
    if (!userStr) return;

    const user = JSON.parse(userStr);

    try {
      const response = await fetch(
        'http://localhost:3300/api/v1/users/erdelokdes',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify({
            userId: user.userId,
            categories: selectedCategories,
            activityLevel: activityLevel,
          }),
        }
      );

      if (response.ok) {
        navigate('/');
      } else {
        alert('Hiba történt a mentés során!');
      }
    } catch (error) {
      console.error('Save error:', error);
      alert('Hálózati hiba!');
    }
  };

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar />

      <div className="main-container onboarding-page">
        <div
          className="onboarding-card"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {step === 1 ? (
            <>
              <h1 className="onboarding-title">Üdv a Csapatban!</h1>
              <p className="onboarding-subtitle">
                Válassz ki legalább 3 témakört, ami érdekel, hogy személyre
                szabhassuk a kihívásaidat!
              </p>

              <div className="categories-grid">
                {categories.map((category) => {
                  const isSport = [
                    'sport',
                    'active',
                    'physical',
                    'movement',
                    'aktív',
                    'aktiv',
                  ].includes(category.type?.toLowerCase() || '');
                  const typeLabel = isSport ? 'Aktív' : 'Egyéni';
                  const typeClass = isSport ? 'tag-active' : 'tag-custom';

                  return (
                    <div
                      key={category.uuid}
                      className={`category-card ${
                        selectedCategories.includes(category.uuid)
                          ? 'selected'
                          : ''
                      }`}
                      onClick={() => toggleCategory(category.uuid)}
                    >
                      <div
                        className="category-type-badge ${typeClass}"
                        style={{
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          fontSize: '0.7rem',
                          padding: '2px 8px',
                          borderRadius: '10px',
                          background: isSport
                            ? 'rgba(255, 71, 87, 0.2)'
                            : 'rgba(46, 213, 115, 0.2)',
                          color: isSport
                            ? 'var(--accent-red)'
                            : 'var(--accent-green)',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                        }}
                      >
                        {typeLabel}
                      </div>
                      <div className="category-icon">🎯</div>
                      <div className="category-name">{category.name}</div>
                    </div>
                  );
                })}
              </div>

              <div className="onboarding-actions">
                <button
                  className="btn btn-continue"
                  onClick={handleNextStep}
                  disabled={selectedCategories.length < 3}
                  style={{
                    opacity: selectedCategories.length < 3 ? 0.5 : 1,
                    cursor:
                      selectedCategories.length < 3 ? 'not-allowed' : 'pointer',
                  }}
                >
                  <span>Tovább</span>
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="onboarding-title">
                Milyen aktív szeretnél lenni?
              </h1>
              <p className="onboarding-subtitle">
                Ezt később bármikor megváltoztathatod a profilodnál.
              </p>

              <div className="activity-grid">
                {activityLevels.map((level) => (
                  <div
                    key={level.id}
                    className={`activity-card ${
                      activityLevel === level.id ? 'selected' : ''
                    }`}
                    onClick={() => setActivityLevel(level.id)}
                    style={{ '--level-color': level.color }}
                  >
                    <div className="activity-icon">{level.icon}</div>
                    <h3 className="activity-name">{level.name}</h3>
                    <p className="activity-desc">{level.desc}</p>
                  </div>
                ))}
              </div>

              <div className="onboarding-actions">
                <button
                  className="btn btn-secondary"
                  onClick={() => setStep(1)}
                >
                  Vissza
                </button>
                <button
                  className="btn btn-continue"
                  onClick={handleFinish}
                  disabled={!activityLevel}
                  style={{
                    opacity: !activityLevel ? 0.5 : 1,
                    cursor: !activityLevel ? 'not-allowed' : 'pointer',
                  }}
                >
                  <span>Befejezés</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Onboarding;
