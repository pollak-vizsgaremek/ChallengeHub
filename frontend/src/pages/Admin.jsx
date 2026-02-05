import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import './Admin.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaUsers,
  FaTasks,
  FaTrophy,
  FaCog,
  FaSearch,
  FaTrash,
  FaEdit,
  FaEnvelope,
  FaFileExport,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for design purposes
  const stats = [
    {
      id: 1,
      label: 'Összes Felhasználó',
      value: '1,248',
      icon: <FaUsers />,
      color: '#4834d4',
      trend: '+12% ezen a héten',
    },
    {
      id: 2,
      label: 'Aktív Kihívások',
      value: '85',
      icon: <FaTasks />,
      color: '#6c5ce7',
      trend: '+5 új ma',
    },
    {
      id: 3,
      label: 'Mai Teljesítések',
      value: '342',
      icon: <FaTrophy />,
      color: '#f1c40f',
      trend: '+18% tegnaphoz képest',
    },
  ];

  const initialUsers = [
    {
      id: 1,
      name: 'Varga Máté',
      email: 'mate@example.com',
      role: 'Admin',
      status: 'active',
      avatar: 'M',
    },
    {
      id: 2,
      name: 'Kiss Péter',
      email: 'peter@example.com',
      role: 'User',
      status: 'active',
      avatar: 'P',
    },
    {
      id: 3,
      name: 'Nagy Anna',
      email: 'anna@example.com',
      role: 'User',
      status: 'banned',
      avatar: 'A',
    },
    {
      id: 4,
      name: 'Teszt Elek',
      email: 'elek@test.com',
      role: 'User',
      status: 'pending',
      avatar: 'T',
    },
  ];

  const [users, setUsers] = useState(initialUsers);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const query = e.target.value.toLowerCase();
    if (query === '') {
      setUsers(initialUsers);
    } else {
      const filtered = initialUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
      );
      setUsers(filtered);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="admin-loading">
          <div className="loader"></div>
          <p>Adatok betöltése...</p>
        </div>
      );
    }

    switch (activeTab) {
      case 'overview':
        return (
          <div className="tab-content overview-tab">
            <h2 className="tab-title" data-aos="fade-down">
              Vezérlőpult Áttekintés
            </h2>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div
                  className="stat-card"
                  key={stat.id}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div
                    className="stat-icon-wrapper"
                    style={{
                      backgroundColor: `${stat.color}20`,
                      color: stat.color,
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div className="stat-info">
                    <h3>{stat.value}</h3>
                    <p className="stat-label">{stat.label}</p>
                    <span className="stat-trend">{stat.trend}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="dashboard-widgets">
              <div
                className="widget activity-widget"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Legutóbbi Tevékenységek</h3>
                <ul className="activity-list">
                  <li className="activity-item">
                    <span className="activity-time">10:42</span>
                    <div className="activity-content">
                      <strong>Varga Máté</strong> teljesítette:{' '}
                      <em>Reggeli Futás (5km)</em>
                    </div>
                    <span className="activity-status success">Kész</span>
                  </li>
                  <li className="activity-item">
                    <span className="activity-time">10:30</span>
                    <div className="activity-content">
                      Új felhasználó regisztrált: <strong>Kiss Péter</strong>
                    </div>
                    <span className="activity-status info">Új</span>
                  </li>
                  <li className="activity-item">
                    <span className="activity-time">09:15</span>
                    <div className="activity-content">
                      <strong>Rendszer</strong>: Napi biztonsági mentés sikeres
                    </div>
                    <span className="activity-status system">System</span>
                  </li>
                  <li className="activity-item">
                    <span className="activity-time">08:55</span>
                    <div className="activity-content">
                      <strong>Nagy Anna</strong> jelentett egy hibát:{' '}
                      <em>Login issue</em>
                    </div>
                    <span className="activity-status warning">Hiba</span>
                  </li>
                </ul>
              </div>

              <div
                className="widget quick-actions-widget"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3>Gyors Műveletek</h3>
                <div className="quick-buttons">
                  <button
                    className="quick-btn"
                    onClick={() => console.log('Newsletter')}
                  >
                    <FaEnvelope className="quick-icon" /> Hírlevél Küldése
                  </button>
                  <button
                    className="quick-btn"
                    onClick={() => console.log('Export')}
                  >
                    <FaFileExport className="quick-icon" /> Riport Export
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="tab-content users-tab">
            <div className="tab-header" data-aos="fade-down">
              <h2>Felhasználók Kezelése</h2>
              <div className="search-wrapper">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Keresés név vagy email alapján..."
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
            </div>

            <div className="table-responsive" data-aos="fade-up">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Felhasználó</th>
                    <th>Szerepkör</th>
                    <th>Státusz</th>
                    <th>Műveletek</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user, index) => (
                      <tr
                        key={user.id}
                        data-aos="fade-up"
                        //! egyenlőre csak 50 emberik megy a aos!!
                        data-aos-delay={index * 50}
                      >
                        <td>
                          <div className="user-cell">
                            <div className="user-avatar">{user.avatar}</div>
                            <div className="user-details">
                              <span className="user-name">{user.name}</span>
                              <span className="user-email">{user.email}</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span
                            className={`role-badge ${user.role.toLowerCase()}`}
                          >
                            {user.role}
                          </span>
                        </td>
                        <td>
                          <span className={`status-dot ${user.status}`}></span>
                          {user.status.charAt(0).toUpperCase() +
                            user.status.slice(1)}
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button
                              className="btn-icon edit"
                              onClick={() => handleEditUser(user.id)}
                              title="Szerkesztés"
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="btn-icon delete"
                              onClick={() => handleDeleteUser(user.id)}
                              title="Törlés"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="no-results">
                        Nincs találat a keresésre.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'challenges':
        return (
          <div className="tab-content challenges-tab">
            <h2 className="tab-title" data-aos="fade-down">
              Kihívások Kezelése
            </h2>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="admin-page-wrapper">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar />

      <div className="admin-layout">
        {/* Sidebar */}
        <aside className="admin-sidebar" data-aos="fade-right">
          <div className="sidebar-header">
            <div className="admin-logo">AdminPanel</div>
            <p className="admin-subtitle">Menedzsment</p>
          </div>

          <nav className="sidebar-menu">
            <button
              className={`sidebar-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <FaTrophy className="menu-icon" />
              <span>Áttekintés</span>
            </button>
            <button
              className={`sidebar-item ${activeTab === 'users' ? 'active' : ''}`}
              onClick={() => setActiveTab('users')}
            >
              <FaUsers className="menu-icon" />
              <span>Felhasználók</span>
            </button>
            <button
              className={`sidebar-item ${activeTab === 'challenges' ? 'active' : ''}`}
              onClick={() => setActiveTab('challenges')}
            >
              <FaTasks className="menu-icon" />
              <span>Kihívások</span>
            </button>
          </nav>

          <div className="sidebar-footer">
            <div className="admin-profile">
              <div className="admin-avatar">A</div>
              <div className="admin-info">
                <span className="name">Admin User</span>
                <span className="role">Super Admin</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="admin-main">
          <header className="mobile-header">
            <h2>Admin Panel</h2>
          </header>

          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Admin;
