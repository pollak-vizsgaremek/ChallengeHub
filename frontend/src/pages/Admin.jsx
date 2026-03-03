import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import './Admin.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaUsers,
  FaTasks,
  FaEye,
  FaTrophy,
  FaSearch,
  FaTrash,
  FaEdit,
  FaEnvelope,
  FaFileExport,
} from 'react-icons/fa';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  //! Ez alakítani kell
  const [dashboardData, setDashboardData] = useState({
    totalUsers: {
      value: '...',
      trend: 'Betöltés...',
      trendDirection: 'neutral',
    },
    pageViews: {
      value: '...',
      trend: 'Betöltés...',
      trendDirection: 'neutral',
    },
    completions: {
      value: '...',
      trend: 'Betöltés...',
      trendDirection: 'neutral',
    },
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const fetchStats = async () => {
      try {
        const response = await fetch(
          'http://localhost:3300/api/v1/admin/stats',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setDashboardData({
            totalUsers: {
              value: data.totalUsers.value,
              trend: `${data.totalUsers.trend > 0 ? '+' : ''}${data.totalUsers.trend}% az elmúlt 7 napban`,
              trendDirection:
                data.totalUsers.trend > 0
                  ? 'positive'
                  : data.totalUsers.trend < 0
                    ? 'negative'
                    : 'neutral',
            },
            pageViews: {
              value: '124',
              trend: '+12% tegnaphoz képest',
              trendDirection: 'positive',
            },
            completions: {
              value: data.todayCompletions.value,
              trend: `${data.todayCompletions.trend > 0 ? '+' : ''}${data.todayCompletions.trend}% tegnaphoz képest`,
              trendDirection:
                data.todayCompletions.trend > 0
                  ? 'positive'
                  : data.todayCompletions.trend < 0
                    ? 'negative'
                    : 'neutral',
            },
          });
        }
      } catch (error) {
        console.error('Error fetching admin stats:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
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
              {/* Összes Felhasználó Kártya */}
              <div className="stat-card" data-aos="zoom-in" data-aos-delay="0">
                <div className="stat-icon-wrapper users">
                  <FaUsers />
                </div>
                <div className="stat-info">
                  <h3>{dashboardData.totalUsers.value}</h3>
                  <p className="stat-label">Összes Felhasználó</p>
                  <span
                    className={`stat-trend ${dashboardData.totalUsers.trendDirection}`}
                  >
                    {dashboardData.totalUsers.trend}
                  </span>
                </div>
              </div>

              {/* Mai Oldal Megtekintések Kártya */}
              <div
                className="stat-card"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="stat-icon-wrapper views">
                  <FaEye />
                </div>
                <div className="stat-info">
                  <h3>{dashboardData.pageViews.value}</h3>
                  <p className="stat-label">Mai oldal megtekintések</p>
                  <span
                    className={`stat-trend ${dashboardData.pageViews.trendDirection}`}
                  >
                    {dashboardData.pageViews.trend}
                  </span>
                </div>
              </div>

              {/* Mai Teljesítések Kártya */}
              <div
                className="stat-card"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="stat-icon-wrapper completions">
                  <FaTrophy />
                </div>
                <div className="stat-info">
                  <h3>{dashboardData.completions.value}</h3>
                  <p className="stat-label">Mai Teljesítések</p>
                  <span
                    className={`stat-trend ${dashboardData.completions.trendDirection}`}
                  >
                    {dashboardData.completions.trend}
                  </span>
                </div>
              </div>
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
