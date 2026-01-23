import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Profile.css';
import '../styles/shopItems.css';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  FaUser,
  FaBullseye,
  FaShoppingCart,
  FaCoffee,
  FaFire,
  FaBolt,
  FaStar,
  FaShoppingBag,
  FaCheck,
  FaImage,
  FaTag,
} from 'react-icons/fa';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Edit states
  const [editMode, setEditMode] = useState(null); // 'username', 'email', 'password', 'interests'
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedActivityLevel, setSelectedActivityLevel] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeItems, setActiveItems] = useState({
    border: null,
    nameColor: null,
  });

  const activityLevels = [
    { id: 'casual', name: 'Laza', icon: <FaCoffee /> },
    { id: 'active', name: 'Aktív', icon: <FaFire /> },
    { id: 'hardcore', name: 'Megszállott', icon: <FaBolt /> },
  ];

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      fetchProfile(parsedUser.userId);
      fetchCategories();
      fetchActiveItems(parsedUser.userId);
    } else {
      navigate('/bejelentkezes');
    }
  }, [navigate]);

  const fetchActiveItems = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:3300/api/v1/shop/active?userId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setActiveItems(data);
      }
    } catch (error) {
      console.error('Error fetching active items:', error);
    }
  };

  const handleSetActiveItem = async (itemId, type) => {
    try {
      const response = await fetch('http://localhost:3300/api/v1/shop/active', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({
          userId: user.userId,
          itemId,
          type,
        }),
      });

      if (response.ok) {
        toast.success('Stílus sikeresen beállítva!');
        fetchActiveItems(user.userId);
        // Notify navbar about the change
        window.dispatchEvent(new Event('activeItemsUpdated'));
      } else {
        const data = await response.json();
        toast.error(data.message || 'Hiba történt!');
      }
    } catch (error) {
      console.error('Error setting active item:', error);
      toast.error('Hálózati hiba!');
    }
  };

  const handleRemoveActiveItem = async (type) => {
    try {
      const response = await fetch('http://localhost:3300/api/v1/shop/active', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({
          userId: user.userId,
          type,
        }),
      });

      if (response.ok) {
        toast.success('Stílus eltávolítva!');
        // Notify navbar about the change
        window.dispatchEvent(new Event('activeItemsUpdated'));
        fetchActiveItems(user.userId);
      } else {
        const data = await response.json();
        toast.error(data.message || 'Hiba történt!');
      }
    } catch (error) {
      console.error('Error removing active item:', error);
      toast.error('Hálózati hiba!');
    }
  };

  const handleSellItem = async (item) => {
    const sellPrice = Math.floor(item.price * 0.65);
    if (
      !window.confirm(
        `Biztosan eladod "${item.name}" terméket ${sellPrice} 🪙 coinért? (Eredeti ár: ${item.price})`
      )
    ) {
      return;
    }

    try {
      const response = await fetch('http://localhost:3300/api/v1/shop/sell', {
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

      if (response.ok) {
        const data = await response.json();
        toast.success(`Eladva! +${data.refund} 🪙`);
        // Refresh profile and active items
        fetchProfile(user.userId);
        fetchActiveItems(user.userId);
        window.dispatchEvent(new Event('activeItemsUpdated'));
      } else {
        const data = await response.json();
        toast.error(data.message || 'Hiba történt!');
      }
    } catch (error) {
      console.error('Error selling item:', error);
      toast.error('Hálózati hiba!');
    }
  };

  const fetchProfile = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:3300/api/v1/users/profile?userId=${userId}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
        setFormData({
          username: data.username,
          email: data.email,
          password: '',
          passwordConfirm: '',
        });
        setSelectedInterests(data.interests || []);
        setSelectedActivityLevel(data.activity_level || 'casual');
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:3300/api/v1/categories', {
        headers: {
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

  const checkExists = async (field, value) => {
    try {
      const response = await fetch(
        'http://localhost:3300/api/v1/users/check-exists',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify({
            userId: user.userId,
            [field]: value,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error('Error checking existence:', error);
    }
    return { exists: false };
  };

  const handleSaveProfile = async (field) => {
    setError('');
    setSuccess('');

    // Validation
    if (field === 'username' && !formData.username.trim()) {
      setError('A felhasználónév nem lehet üres!');
      return;
    }

    if (field === 'email') {
      if (!formData.email.trim()) {
        setError('Az email cím nem lehet üres!');
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError('Érvénytelen email cím formátum!');
        return;
      }
    }

    if (field === 'password') {
      if (!formData.password || formData.password.length < 6) {
        setError('A jelszónak legalább 6 karakter hosszúnak kell lennie!');
        return;
      }
      if (formData.password !== formData.passwordConfirm) {
        setError('A jelszavak nem egyeznek!');
        return;
      }
    }

    // Check if username or email already exists
    if (field === 'username' || field === 'email') {
      const existsCheck = await checkExists(field, formData[field]);
      if (existsCheck.exists) {
        setError(
          field === 'username'
            ? 'Ez a felhasználónév már foglalt!'
            : 'Ez az email cím már foglalt!'
        );
        return;
      }
    }

    try {
      const body = { userId: user.userId };
      if (field === 'password') {
        body.password = formData.password;
      } else {
        body[field] = formData[field];
      }

      const response = await fetch(
        'http://localhost:3300/api/v1/users/profile',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess('Sikeres mentés!');
        setEditMode(null);

        // Update local storage if username changed
        if (field === 'username') {
          const updatedUser = { ...user, username: formData.username };
          localStorage.setItem('user', JSON.stringify(updatedUser));
          setUser(updatedUser);
          window.dispatchEvent(new Event('storage'));
        }

        // Refresh profile
        fetchProfile(user.userId);

        // Clear password fields
        if (field === 'password') {
          setFormData((prev) => ({
            ...prev,
            password: '',
            passwordConfirm: '',
          }));
        }
      } else {
        setError(data.message || 'Hiba történt a mentés során!');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Hálózati hiba történt!');
    }
  };

  const handleSaveInterests = async () => {
    setError('');
    setSuccess('');

    if (selectedInterests.length === 0) {
      setError('Legalább egy érdeklődési kört ki kell választanod!');
      return;
    }

    try {
      const response = await fetch(
        'http://localhost:3300/api/v1/users/interests',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify({
            userId: user.userId,
            categories: selectedInterests,
            activityLevel: selectedActivityLevel,
          }),
        }
      );

      if (response.ok) {
        setSuccess('Érdeklődési körök sikeresen frissítve!');
        setEditMode(null);
        fetchProfile(user.userId);
      } else {
        const data = await response.json();
        setError(data.message || 'Hiba történt a mentés során!');
      }
    } catch (error) {
      console.error('Error updating interests:', error);
      setError('Hálózati hiba történt!');
    }
  };

  const toggleInterest = (categoryId) => {
    setSelectedInterests((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find((c) => c.uuid === categoryId);
    return category ? category.name : categoryId;
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="profile-container">
          <div className="loading-container">
            <div className="loader"></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar />

      <div className="profile-container" data-aos="fade-in">
        {/* Top Row - Header + Stats */}
        <div className="profile-top-row">
          <div className="profile-header-card">
            <div
              className={`profile-avatar ${activeItems.border?.value || ''}`}
            >
              {profile?.username?.charAt(0) || '?'}
            </div>
            <div className="profile-header-info">
              <h1 className={activeItems.nameColor?.value || ''}>
                {profile?.username}
              </h1>
              <p>{profile?.email}</p>
            </div>
          </div>

          <div className="profile-stats">
            <div className="stat-card">
              <div className="stat-icon">🪙</div>
              <div className="stat-value">{profile?.coin || 0}</div>
              <div className="stat-label">Coin</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <FaStar />
              </div>
              <div className="stat-value">{profile?.xp || 0}</div>
              <div className="stat-label">XP</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <FaShoppingCart />
              </div>
              <div className="stat-value">
                {profile?.purchasedItems?.length || 0}
              </div>
              <div className="stat-label">Termék</div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="profile-main-grid">
          {error && <div className="profile-message error">{error}</div>}
          {success && <div className="profile-message success">{success}</div>}

          {/* Account Settings */}
          <div className="profile-section">
            <div className="section-title">
              <h2>
                <FaUser /> Fiók
              </h2>
            </div>
            <div className="section-content">
              <div className="profile-row">
                <span className="profile-row-label">Név</span>
                {editMode === 'username' ? (
                  <div className="edit-inline">
                    <input
                      type="text"
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                      autoFocus
                    />
                    <button
                      className="btn-action save"
                      onClick={() => handleSaveProfile('username')}
                    >
                      ✓
                    </button>
                    <button
                      className="btn-action cancel"
                      onClick={() => {
                        setEditMode(null);
                        setFormData({
                          ...formData,
                          username: profile.username,
                        });
                        setError('');
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="profile-row-value">
                      {profile?.username}
                    </span>
                    <button
                      className="btn-edit"
                      onClick={() => setEditMode('username')}
                    >
                      ✏️
                    </button>
                  </>
                )}
              </div>

              <div className="profile-row">
                <span className="profile-row-label">Email</span>
                {editMode === 'email' ? (
                  <div className="edit-inline">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      autoFocus
                    />
                    <button
                      className="btn-action save"
                      onClick={() => handleSaveProfile('email')}
                    >
                      ✓
                    </button>
                    <button
                      className="btn-action cancel"
                      onClick={() => {
                        setEditMode(null);
                        setFormData({ ...formData, email: profile.email });
                        setError('');
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="profile-row-value">{profile?.email}</span>
                    <button
                      className="btn-edit"
                      onClick={() => setEditMode('email')}
                    >
                      ✏️
                    </button>
                  </>
                )}
              </div>

              <div className="profile-row">
                <span className="profile-row-label">Jelszó</span>
                {editMode === 'password' ? (
                  <div className="edit-inline">
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      placeholder="Új jelszó"
                      autoFocus
                    />
                    <input
                      type="password"
                      value={formData.passwordConfirm}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          passwordConfirm: e.target.value,
                        })
                      }
                      placeholder="Megerősítés"
                    />
                    <button
                      className="btn-action save"
                      onClick={() => handleSaveProfile('password')}
                    >
                      ✓
                    </button>
                    <button
                      className="btn-action cancel"
                      onClick={() => {
                        setEditMode(null);
                        setFormData({
                          ...formData,
                          password: '',
                          passwordConfirm: '',
                        });
                        setError('');
                      }}
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="profile-row-value">••••••••</span>
                    <button
                      className="btn-edit"
                      onClick={() => setEditMode('password')}
                    >
                      ✏️
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="profile-section">
            <div className="section-title">
              <h2>
                <FaBullseye /> Érdeklődés
              </h2>
              {editMode !== 'interests' && (
                <button
                  className="btn-edit-section"
                  onClick={() => setEditMode('interests')}
                >
                  Szerkesztés
                </button>
              )}
            </div>
            <div className="section-content">
              {editMode === 'interests' ? (
                <div className="interests-edit-panel">
                  <div className="edit-group">
                    <div className="edit-group-label">Aktivitás</div>
                    <div className="activity-buttons">
                      {activityLevels.map((level) => (
                        <button
                          key={level.id}
                          className={`activity-btn ${selectedActivityLevel === level.id ? 'active' : ''}`}
                          onClick={() => setSelectedActivityLevel(level.id)}
                        >
                          {level.icon}
                          <span>{level.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="edit-group">
                    <div className="edit-group-label">Kategóriák</div>
                    <div className="category-chips">
                      {categories.map((category) => (
                        <button
                          key={category.uuid}
                          className={`category-chip ${selectedInterests.includes(category.uuid) ? 'selected' : ''}`}
                          onClick={() => toggleInterest(category.uuid)}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="edit-buttons">
                    <button
                      className="btn-primary"
                      onClick={handleSaveInterests}
                    >
                      Mentés
                    </button>
                    <button
                      className="btn-secondary"
                      onClick={() => {
                        setEditMode(null);
                        setSelectedInterests(profile?.interests || []);
                        setSelectedActivityLevel(
                          profile?.activity_level || 'casual'
                        );
                        setError('');
                      }}
                    >
                      Mégse
                    </button>
                  </div>
                </div>
              ) : (
                <div className="interests-tags">
                  <span className="activity-badge">
                    {
                      activityLevels.find(
                        (l) => l.id === profile?.activity_level
                      )?.icon
                    }{' '}
                    {activityLevels.find(
                      (l) => l.id === profile?.activity_level
                    )?.name || 'Nincs'}
                  </span>
                  {profile?.interests?.length > 0 ? (
                    profile.interests.map((catId) => (
                      <span key={catId} className="interest-tag">
                        {getCategoryName(catId)}
                      </span>
                    ))
                  ) : (
                    <span className="no-data">Nincs kategória</span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Purchased Items */}
          <div className="profile-section full-width">
            <div className="section-title">
              <h2>
                <FaShoppingCart /> Termékeim
              </h2>
            </div>
            <div className="section-content">
              {profile?.purchasedItems?.length > 0 ? (
                <div className="purchased-grid">
                  {profile.purchasedItems.map((item) => {
                    const isActiveBorder =
                      activeItems.border?.uuid === item.uuid;
                    const isActiveNameColor =
                      activeItems.nameColor?.uuid === item.uuid;
                    const isActive = isActiveBorder || isActiveNameColor;

                    return (
                      <div
                        key={item.uuid}
                        className={`purchased-card ${isActive ? 'active-item' : ''}`}
                      >
                        {isActive && (
                          <div className="active-badge">
                            <FaCheck /> Aktív
                          </div>
                        )}
                        <div className="purchased-card-preview">
                          {item.category === 'border' ? (
                            <div className={`preview-avatar ${item.value}`}>
                              <span className="preview-initial">
                                {profile?.username?.charAt(0).toUpperCase() ||
                                  'U'}
                              </span>
                            </div>
                          ) : (
                            <span className={`preview-username ${item.value}`}>
                              {profile?.username || 'Felhasználó'}
                            </span>
                          )}
                        </div>
                        <div className="purchased-card-info">
                          <h4
                            className={
                              item.category === 'name' ? item.value : ''
                            }
                          >
                            {item.name}
                          </h4>
                          <span className="item-category-badge">
                            {item.category === 'border' ? (
                              <>
                                <FaImage /> Keret
                              </>
                            ) : (
                              <>
                                <FaTag /> Név szín
                              </>
                            )}
                          </span>
                        </div>
                        <div className="purchased-card-actions">
                          {isActive ? (
                            <button
                              className="btn-deactivate"
                              onClick={() =>
                                handleRemoveActiveItem(item.category)
                              }
                            >
                              Eltávolítás
                            </button>
                          ) : (
                            <button
                              className="btn-activate"
                              onClick={() =>
                                handleSetActiveItem(item.uuid, item.category)
                              }
                            >
                              Használat
                            </button>
                          )}
                          <button
                            className="btn-sell"
                            onClick={() => handleSellItem(item)}
                          >
                            Eladás ({Math.floor(item.price * 0.65)} 🪙)
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="empty-state">
                  <p>Még nem vásároltál semmit</p>
                  <button
                    className="btn-shop"
                    onClick={() => navigate('/bolt')}
                  >
                    <span className="btn-shop-inner">
                      Irány a bolt! <FaShoppingBag />
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
