import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Shop.css';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const Shop = () => {
  const [coins, setCoins] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [shopItems, setShopItems] = useState([]);
  const [user, setUser] = useState(null);
  const [purchasedItems, setPurchasedItems] = useState(new Set());

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });

    // Check login status
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      fetchUserBalance(parsedUser.userId);
      fetchPurchasedItems(parsedUser.userId);
    }
  }, []);

  // Fetch user balance
  const fetchUserBalance = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:3300/api/v1/users/balance?userId=${userId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setCoins(data.coin);
      }
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  // Fetch purchased items
  const fetchPurchasedItems = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:3300/api/v1/shop/purchased?userId=${userId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setPurchasedItems(new Set(data));
      }
    } catch (error) {
      console.error('Error fetching purchased items:', error);
    }
  };

  // Fetch shop items
  useEffect(() => {
    const fetchShopItems = async () => {
      try {
        const response = await fetch(
          `http://localhost:3300/api/v1/shop?category=${activeCategory}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );
        console.log(response);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setShopItems(data);
      } catch (error) {
        console.error('Error fetching shop items:', error);
      }
    };

    fetchShopItems();
  }, [activeCategory]);

  // Handle buy
  const handleBuy = async (item) => {
    if (!user) {
      alert('Kérlek jelentkezz be a vásárláshoz!');
      return;
    }

    // Check if user has enough coins
    if (item.price > coins) {
      alert('Nincs elég pénzed!');
      return;
    }

    // Buy item
    try {
      const response = await fetch('http://localhost:3300/api/v1/shop/buy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({
          userId: user.userId,
          itemId: item.uuid,
        }),
      });

      const data = await response.json();

      // Update coins and purchased items
      if (response.ok) {
        setCoins((prev) => prev - item.price);
        setPurchasedItems((prev) => new Set(prev).add(item.uuid));
        alert('Sikeres vásárlás!');
      } else {
        alert(data.message || 'Hiba történt a vásárlás során');
      }
    } catch (error) {
      console.error('Error buying item:', error);
      alert('Hálózati hiba történt');
    }
  };

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar />

      {/* Shop */}
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
              activeCategory === 'border' ? 'active' : ''
            }`}
            onClick={() => setActiveCategory('border')}
          >
            Keret
          </button>
          <button
            className={`category-btn ${
              activeCategory === 'name' ? 'active' : ''
            }`}
            onClick={() => setActiveCategory('name')}
          >
            Név szín
          </button>
        </div>

        <div className="shop-grid">
          {shopItems.map((item, index) => {
            const itemKey = item.uuid || `shop-item-${index}`;
            // Debug warning for missing UUID
            if (!item.uuid) {
              console.warn(
                `Shop item at index ${index} is missing UUID:`,
                item
              );
            }
            return (
              <div
                key={itemKey}
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
                    {purchasedItems.has(item.uuid) ? (
                      <button className="buy-btn purchased" disabled>
                        Megvásárolva
                      </button>
                    ) : (
                      <button
                        className="buy-btn"
                        onClick={() => handleBuy(item)}
                      >
                        Vásárlás
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
