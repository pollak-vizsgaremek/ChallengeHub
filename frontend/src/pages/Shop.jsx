import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Shop.css'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

// ! Idegilenesen egy tömből híom be amíg nincs backedünk!

const Shop = () => {
  const [coins, setCoins] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [shopItems, setShopItems] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    AOS.init({ once: true, duration: 800 })

    // Check login status
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)
      fetchUserBalance(parsedUser.userId)
    }
  }, [])

  const fetchUserBalance = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:3300/api/v1/users/balance?userId=${userId}`
      )
      if (response.ok) {
        const data = await response.json()
        setCoins(data.coin)
      }
    } catch (error) {
      console.error('Error fetching balance:', error)
    }
  }

  useEffect(() => {
    const fetchShopItems = async () => {
      try {
        const response = await fetch(
          `http://localhost:3300/api/v1/shop?category=${activeCategory}`
        )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setShopItems(data)
      } catch (error) {
        console.error('Error fetching shop items:', error)
      }
    }

    fetchShopItems()
  }, [activeCategory])

  //TODO: A vásárlás logika később lesz, az is backendből!
  const handleBuy = (item) => {
    console.log(`Vásárlás kezdeményezése: ${item.name}`)
  }

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
          {user && coins !== null && (
            <div
              className="coin-balance"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <span className="coin-icon">🪙</span>
              <span className="coin-amount">{coins}</span>
            </div>
          )}
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
              activeCategory === 'badge' ? 'active' : ''
            }`}
            onClick={() => setActiveCategory('badge')}
          >
            Jelvények
          </button>
        </div>

        <div className="shop-grid">
          {shopItems.map((item, index) => (
            <div
              key={item.id}
              className="shop-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="shop-card-image">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="shop-item-image"
                />
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
