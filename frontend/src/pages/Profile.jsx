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
import { buildApiUrl } from '../utils/api';

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

  // Modal states
  const [sellModalOpen, setSellModalOpen] = useState(false);
  const [itemToSell, setItemToSell] = useState(null);

  // Filter state
  const [filter, setFilter] = useState('all');

  const activityLevels = [
    { id: 'casual', name: 'Laza', icon: <FaCoffee /> },
    { id: 'active', name: 'Aktív', icon: <FaFire /> },
    { id: 'hardcore', name: 'Megszállott', icon: <FaBolt /> },
  ];

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      offset: 50,
      easing: 'ease-out-cubic',
    });

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
        buildApiUrl(`/api/v1/shop/active?userId=${userId}`),
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
      const response = await fetch(buildApiUrl('/api/v1/shop/active'), {
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
      const response = await fetch(buildApiUrl('/api/v1/shop/active'), {
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

  const handleSellItem = (item) => {
    setItemToSell(item);
    setSellModalOpen(true);
  };

  const confirmSell = async () => {
    if (!itemToSell) return;

    try {
      const response = await fetch(buildApiUrl('/api/v1/shop/sell'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({
          userId: user.userId,
          itemId: itemToSell.uuid,
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
    } finally {
      setSellModalOpen(false);
      setItemToSell(null);
    }
  };

  const fetchProfile = async (userId) => {
    try {
      const response = await fetch(
        buildApiUrl(`/api/v1/users/profile?userId=${userId}`),
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
      const response = await fetch(buildApiUrl('/api/v1/categories'), {
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
      const response = await fetch(buildApiUrl('/api/v1/users/check-exists'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({
          userId: user.userId,
          [field]: value,
        }),
      });
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
    // Validation
    if (field === 'username' && !formData.username.trim()) {
      toast.error('A felhasználónév nem lehet üres!');
      return;
    }

    if (field === 'email') {
      if (!formData.email.trim()) {
        toast.error('Az email cím nem lehet üres!');
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error('Érvénytelen email cím formátum!');
        return;
      }
    }

    if (field === 'password') {
      if (formData.password.length < 8) {
        toast.error('A jelszónak legalább 8 karakter hosszúnak kell lennie!');
        return;
      }
      if (!/[A-Z]/.test(formData.password)) {
        toast.error('A jelszónak tartalmaznia kell legalább egy nagybetűt!');
        return;
      }
      if (!/[a-z]/.test(formData.password)) {
        toast.error('A jelszónak tartalmaznia kell legalább egy kisbetűt!');
        return;
      }
      if (!/[0-9]/.test(formData.password)) {
        toast.error('A jelszónak tartalmaznia kell legalább egy számot!');
        return;
      }
      if (formData.password !== formData.passwordConfirm) {
        toast.error('A jelszavak nem egyeznek!');
        return;
      }
    }

    // Check if username or email already exists
    if (field === 'username' || field === 'email') {
      const existsCheck = await checkExists(field, formData[field]);
      if (existsCheck.exists) {
        toast.error(
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

      const response = await fetch(buildApiUrl('/api/v1/users/profile'), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Sikeres mentés!');
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
        toast.error(data.message || 'Hiba történt a mentés során!');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Hálózati hiba történt!');
    }
  };

  const handleSaveInterests = async () => {
    if (selectedInterests.length === 0) {
      toast.error('Legalább egy érdeklődési kört ki kell választanod!');
      return;
    }

    try {
      const response = await fetch(buildApiUrl('/api/v1/users/interests'), {
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
      });

      if (response.ok) {
        toast.success('Érdeklődési körök sikeresen frissítve!');
        setEditMode(null);
        fetchProfile(user.userId);
      } else {
        const data = await response.json();
        toast.error(data.message || 'Hiba történt a mentés során!');
      }
    } catch (error) {
      console.error('Error updating interests:', error);
      toast.error('Hálózati hiba történt!');
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

  const getCategoryType = (categoryId) => {
    const category = categories.find((c) => c.uuid === categoryId);
    if (!category) return { label: '', isSport: false };

    const isSport = [
      'sport',
      'active',
      'physical',
      'movement',
      'aktív',
      'aktiv',
    ].includes(category.type?.toLowerCase() || '');

    return {
      label: isSport ? 'Aktív' : 'Egyéni',
      isSport,
      style: isSport
        ? {
            background: 'rgba(255, 71, 87, 0.2)',
            color: '#ff4757',
            border: '1px solid rgba(255, 71, 87, 0.4)',
          }
        : {
            background: 'rgba(46, 213, 115, 0.2)',
            color: '#2ed573',
            border: '1px solid rgba(46, 213, 115, 0.4)',
          },
    };
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

      <div className="profile-container">
        {/* Top Row - Header + Stats */}
        <div className="profile-top-row">
          <div
            className="profile-header-card"
            data-aos="zoom-in"
            data-aos-delay="0"
          >
            <div
              className={`profile-avatar ${activeItems.border?.value || 'default-border'}`}
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
            <div
              className="stat-card"
              data-aos="flip-left"
              data-aos-delay="200"
            >
              <div className="stat-icon">🪙</div>
              <div className="stat-value">{profile?.coin || 0}</div>
              <div className="stat-label">Coin</div>
            </div>
            <div
              className="stat-card"
              data-aos="flip-left"
              data-aos-delay="400"
            >
              <div className="stat-icon">
                <FaStar />
              </div>
              <div className="stat-value">{profile?.xp || 0}</div>
              <div className="stat-label">XP</div>
            </div>
            <div
              className="stat-card"
              data-aos="flip-left"
              data-aos-delay="600"
            >
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
          {/* Account Settings */}
          <div
            className="profile-section"
            data-aos="fade-right"
            data-aos-delay="400"
          >
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
          <div
            className="profile-section"
            data-aos="fade-left"
            data-aos-delay="600"
          >
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
                      {categories.map((category) => {
                        const typeInfo = getCategoryType(category.uuid);
                        return (
                          <button
                            key={category.uuid}
                            className={`category-chip ${selectedInterests.includes(category.uuid) ? 'selected' : ''}`}
                            onClick={() => toggleInterest(category.uuid)}
                          >
                            <span>{category.name}</span>
                            <span
                              className="chip-type-badge"
                              style={typeInfo.style}
                            >
                              {typeInfo.label}
                            </span>
                          </button>
                        );
                      })}
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
                    profile.interests.map((catId) => {
                      const typeInfo = getCategoryType(catId);
                      return (
                        <span key={catId} className="interest-tag">
                          {getCategoryName(catId)}
                          <span
                            className="tag-type-badge"
                            style={typeInfo.style}
                          >
                            {typeInfo.label}
                          </span>
                        </span>
                      );
                    })
                  ) : (
                    <span className="no-data">Nincs kategória</span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Purchased Items */}
          <div
            className="profile-section full-width"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="section-title">
              <h2>
                <FaShoppingCart /> Termékeim
              </h2>
              <div className="profile-filter-buttons">
                <button
                  className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                  onClick={() => setFilter('all')}
                >
                  Összes
                </button>
                <button
                  className={`filter-btn ${filter === 'border' ? 'active' : ''}`}
                  onClick={() => setFilter('border')}
                >
                  Keret
                </button>
                <button
                  className={`filter-btn ${filter === 'name' ? 'active' : ''}`}
                  onClick={() => setFilter('name')}
                >
                  Név szín
                </button>
              </div>
            </div>
            <div className="section-content">
              {profile?.purchasedItems?.length > 0 ? (
                <div className="purchased-grid">
                  {profile.purchasedItems
                    .filter(
                      (item) => filter === 'all' || item.category === filter
                    )
                    .map((item) => {
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
                              <span
                                className={`preview-username ${item.value}`}
                              >
                                {profile?.username || 'Felhasználó'}
                              </span>
                            )}
                          </div>
                          <div className="purchased-card-info">
                            <h4>{item.name}</h4>
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

      {/* Confirmation Modal */}
      {sellModalOpen && itemToSell && (
        <div className="modal-overlay" onClick={() => setSellModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">⚠️</div>
            <h3 className="modal-title">Tárgy eladása</h3>
            <p className="modal-message">
              Biztosan eladod a(z){' '}
              <span className="modal-highlight">{itemToSell.name}</span>{' '}
              tárgyat?
              <br />
              <br />
              Visszakapsz:{' '}
              <span className="modal-highlight">
                {Math.floor(itemToSell.price * 0.65)} 🪙
              </span>
            </p>
            <div className="modal-actions">
              <button
                className="btn-modal cancel"
                onClick={() => setSellModalOpen(false)}
              >
                Mégse
              </button>
              <button className="btn-modal confirm" onClick={confirmSell}>
                Eladás
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
