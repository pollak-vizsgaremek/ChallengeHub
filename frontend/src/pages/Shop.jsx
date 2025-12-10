import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Shop.css'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

// ! Idegilenesen egy tömből híom be amíg nincs backedünk!

const SHOP_ITEMS = [
  {
    id: 1,
    name: 'Mesteri Keret',
    price: 500,
    category: 'profile',
    description: 'Egy elegáns arany keret a profilképed köré.',
    gradient: 'linear-gradient(135deg, #f1c40f, #e67e22)',
  },
  {
    id: 2,
    name: 'Neon Név',
    price: 1000,
    category: 'profile',
    description: 'Ragyogó neon effekt a felhasználónevednek.',
    gradient: 'linear-gradient(135deg, #c44569, #e66767)',
  },
  {
    id: 3,
    name: '2x XP Boost',
    price: 300,
    category: 'boost',
    description: 'Dupla tapasztalati pont 24 órán keresztül.',
    gradient: 'linear-gradient(135deg, #2ecc71, #27ae60)',
  },
  {
    id: 4,
    name: 'VIP Jelvény',
    price: 5000,
    category: 'badge',
    description: 'Exkluzív VIP jelvény a profilodra.',
    gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)',
  },
  {
    id: 5,
    name: 'Sötét Téma+',
    price: 200,
    category: 'theme',
    description: 'Egy extra sötét téma a weboldalhoz.',
    gradient: 'linear-gradient(135deg, #34495e, #2c3e50)',
  },
  {
    id: 6,
    name: 'Titkos Láda',
    price: 750,
    category: 'loot',
    description: 'Egy véletlenszerű jutalom, vajon mi lehet benne?',
    gradient: 'linear-gradient(135deg, #3498db, #2980b9)',
  },
  {
    id: 7,
    name: 'Lángoló Avatár',
    price: 1500,
    category: 'profile',
    description: 'Tűz effekt az avatárod köré.',
    gradient: 'linear-gradient(135deg, #e67e22, #d35400)',
  },
  {
    id: 8,
    name: 'Napi Bónusz+',
    price: 1200,
    category: 'boost',
    description: 'Növeld meg a napi bejelentkezési bónuszodat.',
    gradient: 'linear-gradient(135deg, #f39c12, #d35400)',
  },
]

const Shop = () => {
  //TODO: Ezek az adatok később a backendről jönnek majd
  const [coins] = useState(2500)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    AOS.init({ once: true, duration: 800 })
  }, [])

  //TODO: A vásárlás logika később lesz, az is backendből!
  const handleBuy = (item) => {
    console.log(`Vásárlás kezdeményezése: ${item.name}`)
  }

  const filteredItems =
    activeCategory === 'all'
      ? SHOP_ITEMS
      : SHOP_ITEMS.filter((item) => item.category === activeCategory)

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar />

      <div className="shop-container" data-aos="fade-in">
        <header className="shop-header">
          <h1 className="main-title ml-0 text-center">
            <span>ITEM</span> SHOP
          </h1>
          <div className="coin-balance" data-aos="zoom-in" data-aos-delay="200">
            <span className="coin-icon">🪙</span>
            <span className="coin-amount">{coins}</span>
          </div>
        </header>

        {/* Shop Categories */}
        <div
          className="shop-categories"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button
            className={`category-btn ${
              activeCategory === 'all' ? 'active' : ''
            }`}
            onClick={() => setActiveCategory('all')}
          >
            Összes
          </button>
          <button
            className={`category-btn ${
              activeCategory === 'profile' ? 'active' : ''
            }`}
            onClick={() => setActiveCategory('profile')}
          >
            Profil
          </button>
          <button
            className={`category-btn ${
              activeCategory === 'boost' ? 'active' : ''
            }`}
            onClick={() => setActiveCategory('boost')}
          >
            Boostok
          </button>
          <button
            className={`category-btn ${
              activeCategory === 'badge' ? 'active' : ''
            }`}
            onClick={() => setActiveCategory('badge')}
          >
            Jelvények
          </button>
        </div>

        <div className="shop-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="shop-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="shop-card-image"
                style={{ background: item.gradient }}
              >
                {/* Placeholder for visual flair - simple geometric shapes/icon */}
                <div className="placeholder-icon">?</div>
              </div>
              <div className="shop-card-content">
                <h3 className="shop-item-title">{item.name}</h3>
                <p className="shop-item-desc">{item.description}</p>
                <div className="shop-card-footer">
                  <div className="price-tag">
                    <span className="price-icon">🪙</span>
                    {item.price}
                  </div>
                  <button className="buy-btn" onClick={() => handleBuy(item)}>
                    Vásárlás
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Shop
