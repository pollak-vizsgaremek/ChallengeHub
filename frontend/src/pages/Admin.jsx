import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import './Admin.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-hot-toast';
import { decodeJwt } from '../utils/jwt';
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
  FaTicketAlt,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [tickets, setTickets] = useState([]);
  const [expandedTicketId, setExpandedTicketId] = useState(null);

  // Users tab state
  const [users, setUsers] = useState([]);
  const [initialUsers, setInitialUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Challenges & Categories tab state
  const [categories, setCategories] = useState([]);
  const [challenges, setChallenges] = useState([]);

  // Modals for Category
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [categoryForm, setCategoryForm] = useState({ name: '', type: '' });

  // Modals for Challenge
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);
  const [editingChallenge, setEditingChallenge] = useState(null);
  const [challengeForm, setChallengeForm] = useState({
    name: '',
    description: '',
    xp: '',
    coin: '',
    difficulty: 'medium',
    categories_id: '',
  });

  // Delete Confirmation Modal
  const [deleteConfirmDialog, setDeleteConfirmDialog] = useState({
    isOpen: false,
    type: null,
    id: null,
  });

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
    recentActivities: [],
  });

  useEffect(() => {
    // Admin check
    const token = localStorage.getItem('accessToken');
    const decoded = decodeJwt(token);
    if (!decoded || !decoded.isAdmin) {
      toast.error('Hozzáférés megtagadva!');
      navigate('/', { replace: true });
      return;
    }

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
              value: data.pageViews?.value || 'N/A',
              trend: data.pageViews?.trend
                ? `${data.pageViews.trend > 0 ? '+' : ''}${data.pageViews.trend}% tegnaphoz képest`
                : 'Adat nem elérhető',
              trendDirection:
                parseInt(data.pageViews?.trend || 0) > 0
                  ? 'positive'
                  : parseInt(data.pageViews?.trend || 0) < 0
                    ? 'negative'
                    : 'neutral',
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
            recentActivities: data.recentActivities || [],
          });
        }

        // Fetch tickets
        const ticketsResponse = await fetch(
          'http://localhost:3300/api/v1/admin/tickets',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );

        if (ticketsResponse.ok) {
          const ticketsData = await ticketsResponse.json();
          setTickets(ticketsData);
        }

        // Fetch users
        const usersResponse = await fetch(
          'http://localhost:3300/api/v1/admin/users',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );

        if (usersResponse.ok) {
          const usersData = await usersResponse.json();
          setUsers(usersData);
          setInitialUsers(usersData);
        }

        // Fetch categories
        const categoriesResponse = await fetch(
          'http://localhost:3300/api/v1/categories',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );

        if (categoriesResponse.ok) {
          const categoriesData = await categoriesResponse.json();
          setCategories(categoriesData);
        }

        // Fetch challenges
        const challengesResponse = await fetch(
          'http://localhost:3300/api/v1/challenges',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );

        if (challengesResponse.ok) {
          const challengesData = await challengesResponse.json();
          setChallenges(challengesData);
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
          user.username.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
      );
      setUsers(filtered);
    }
  };

  const handleTicketStatusToggle = async (id, currentStatus) => {
    const newStatus = currentStatus === 'fixed' ? 'open' : 'fixed';

    try {
      const response = await fetch(
        `http://localhost:3300/api/v1/admin/tickets/${id}/status`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (response.ok) {
        setTickets(
          tickets.map((ticket) =>
            ticket.uuid === id ? { ...ticket, status: newStatus } : ticket
          )
        );
      }
    } catch (error) {
      console.error('Hiba a hibajegy frissítésekor:', error);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditingUser(null);
  };

  const handleUpdateRole = async (userId, isAdmin) => {
    try {
      const response = await fetch(
        `http://localhost:3300/api/v1/admin/users/${userId}/role`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify({ admin: isAdmin }),
        }
      );

      if (response.ok) {
        setUsers(
          users.map((u) => (u.uuid === userId ? { ...u, admin: isAdmin } : u))
        );
        setEditingUser((prev) => ({ ...prev, admin: isAdmin }));
      }
    } catch (error) {
      console.error('Hiba a szerepkör frissítésekor:', error);
    }
  };

  const handleUpdateBan = async (userId, isBanned) => {
    try {
      const response = await fetch(
        `http://localhost:3300/api/v1/admin/users/${userId}/ban`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
          body: JSON.stringify({ is_banned: isBanned }),
        }
      );

      if (response.ok) {
        setUsers(
          users.map((u) =>
            u.uuid === userId ? { ...u, is_banned: isBanned } : u
          )
        );
        setEditingUser((prev) => ({ ...prev, is_banned: isBanned }));
      }
    } catch (error) {
      console.error('Hiba a kitiltás frissítésekor:', error);
    }
  };

  // Category Handlers
  const handleSaveCategory = async (e) => {
    e.preventDefault();
    try {
      const isEdit = !!editingCategory;
      const url = isEdit
        ? `http://localhost:3300/api/v1/categories/${editingCategory.uuid}`
        : 'http://localhost:3300/api/v1/categories';
      const method = isEdit ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(categoryForm),
      });

      if (response.ok) {
        const savedCategory = await response.json();
        if (isEdit) {
          setCategories(
            categories.map((c) =>
              c.uuid === savedCategory.uuid ? savedCategory : c
            )
          );
        } else {
          setCategories([...categories, savedCategory]);
        }
        setIsCategoryModalOpen(false);
        setEditingCategory(null);
        setCategoryForm({ name: '', type: '' });
        toast.success(
          isEdit
            ? 'Kategória sikeresen frissítve!'
            : 'Kategória sikeresen létrehozva!'
        );
      } else {
        const err = await response.json();
        toast.error(err.message || 'Hiba mentés során');
      }
    } catch (error) {
      console.error('Hiba a kategória mentésekor:', error);
      toast.error('Váratlan hiba történt a kategória mentésekor.');
    }
  };

  const executeDeleteCategory = async (uuid) => {
    try {
      const response = await fetch(
        `http://localhost:3300/api/v1/categories/${uuid}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      if (response.ok) {
        setCategories(categories.filter((c) => c.uuid !== uuid));
        // Also remove challenges that belonged to this category
        setChallenges(challenges.filter((ch) => ch.categories_id !== uuid));
        toast.success(
          'Kategória és a hozzá tartozó kihívások sikeresen törölve!'
        );
      } else {
        const err = await response.json();
        toast.error(err.message || 'Hiba törlés során');
      }
    } catch (error) {
      console.error('Hiba a kategória törlésekor:', error);
      toast.error('Váratlan hiba történt a kategória törlésekor.');
    }
  };

  // Challenge Handlers
  const handleSaveChallenge = async (e) => {
    e.preventDefault();
    try {
      const isEdit = !!editingChallenge;
      const url = isEdit
        ? `http://localhost:3300/api/v1/challenges/${editingChallenge.uuid}`
        : 'http://localhost:3300/api/v1/challenges';
      const method = isEdit ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify(challengeForm),
      });

      if (response.ok) {
        setIsChallengeModalOpen(false);
        setEditingChallenge(null);
        setChallengeForm({
          name: '',
          description: '',
          xp: '',
          coin: '',
          difficulty: 'medium',
          categories_id: '',
        });

        // Refresh full lists to include nested relationships
        const challengesRes = await fetch(
          'http://localhost:3300/api/v1/challenges',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        );
        if (challengesRes.ok) setChallenges(await challengesRes.json());
        toast.success(
          isEdit
            ? 'Kihívás sikeresen frissítve!'
            : 'Kihívás sikeresen létrehozva!'
        );
      } else {
        const err = await response.json();
        toast.error(err.message || 'Hiba mentés során');
      }
    } catch (error) {
      console.error('Hiba a kihívás mentésekor:', error);
      toast.error('Váratlan hiba történt a kihívás mentésekor.');
    }
  };

  const executeDeleteChallenge = async (uuid) => {
    try {
      const response = await fetch(
        `http://localhost:3300/api/v1/challenges/${uuid}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      if (response.ok) {
        setChallenges(challenges.filter((c) => c.uuid !== uuid));
        toast.success('Kihívás sikeresen törölve!');
      } else {
        const err = await response.json();
        toast.error(err.message || 'Hiba törlés során');
      }
    } catch (error) {
      console.error('Hiba a kihívás törlésekor:', error);
      toast.error('Váratlan hiba történt a kihívás törlésekor.');
    }
  };

  const confirmDelete = () => {
    if (deleteConfirmDialog.type === 'category') {
      executeDeleteCategory(deleteConfirmDialog.id);
    } else if (deleteConfirmDialog.type === 'challenge') {
      executeDeleteChallenge(deleteConfirmDialog.id);
    }
    setDeleteConfirmDialog({ isOpen: false, type: null, id: null });
  };

  const openCategoryModal = (category = null) => {
    if (category) {
      setEditingCategory(category);
      setCategoryForm({ name: category.name, type: category.type });
    } else {
      setEditingCategory(null);
      setCategoryForm({ name: '', type: '' });
    }
    setIsCategoryModalOpen(true);
  };

  const openChallengeModal = (challenge = null) => {
    if (challenge) {
      setEditingChallenge(challenge);
      setChallengeForm({
        name: challenge.name,
        description: challenge.description,
        xp: challenge.xp,
        coin: challenge.coin,
        difficulty: challenge.difficulty || 'medium',
        categories_id: challenge.categories_id,
      });
    } else {
      setEditingChallenge(null);
      setChallengeForm({
        name: '',
        description: '',
        xp: '',
        coin: '',
        difficulty: 'medium',
        categories_id: '',
      });
    }
    setIsChallengeModalOpen(true);
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
              <div
                className="stat-card"
                data-aos="zoom-in"
                data-aos-delay="0"
                onClick={() => setActiveTab('users')}
                style={{ cursor: 'pointer' }}
              >
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
                  {dashboardData.recentActivities.length > 0 ? (
                    dashboardData.recentActivities.map((activity) => {
                      const dateObj = new Date(activity.timestamp);
                      const timeString = dateObj.toLocaleString('hu-HU', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      });

                      const handleActivityClick = () => {
                        if (activity.type === 'TICKET_CREATED') {
                          setActiveTab('tickets');
                        }
                      };

                      return (
                        <li
                          key={activity.id}
                          className={`activity-item ${activity.type === 'TICKET_CREATED' ? 'clickable' : ''}`}
                          onClick={handleActivityClick}
                          style={
                            activity.type === 'TICKET_CREATED'
                              ? { cursor: 'pointer' }
                              : {}
                          }
                        >
                          <span className="activity-time">{timeString}</span>
                          <div className="activity-content">
                            {activity.content}
                          </div>
                          <span
                            className={`activity-status ${activity.statusClass}`}
                          >
                            {activity.status}
                          </span>
                        </li>
                      );
                    })
                  ) : (
                    <li className="activity-item">Nincs friss tevékenység.</li>
                  )}
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
                    users.map((user, index) => {
                      const role = user.admin ? 'Admin' : 'User';
                      const status = user.is_banned ? 'banned' : 'active';
                      const statusDisplay = user.is_banned
                        ? 'Kitiltva'
                        : 'Aktív';
                      const avatarLetter = user.username
                        ? user.username.charAt(0).toUpperCase()
                        : '?';

                      return (
                        <tr
                          key={user.uuid}
                          data-aos="fade-up"
                          data-aos-delay={index * 50}
                        >
                          <td data-label="Felhasználó">
                            <div className="user-cell">
                              <div className="user-avatar">{avatarLetter}</div>
                              <div className="user-details">
                                <span className="user-name">
                                  {user.username}
                                </span>
                                <span className="user-email">{user.email}</span>
                              </div>
                            </div>
                          </td>
                          <td data-label="Szerepkör">
                            <span
                              className={`role-badge ${role.toLowerCase()}`}
                            >
                              {role}
                            </span>
                          </td>
                          <td data-label="Státusz">
                            <span className={`status-dot ${status}`}></span>
                            {statusDisplay}
                          </td>
                          <td data-label="Műveletek">
                            <div className="action-buttons">
                              <button
                                className="btn-icon edit"
                                onClick={() => handleEditUser(user)}
                                title="Jogosultságok Szerkesztése"
                              >
                                <FaEdit />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td
                        colSpan="4"
                        className="no-results"
                        style={{
                          textAlign: 'center',
                          padding: '2rem',
                          color: 'var(--text-muted)',
                        }}
                      >
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
              Kihívások és Kategóriák Kezelése
            </h2>

            <div className="challenges-grid">
              {/* Categories Section */}
              <div className="admin-section" data-aos="fade-up">
                <div className="section-header">
                  <h3>Kategóriák</h3>
                  <button
                    className="btn-primary"
                    onClick={() => openCategoryModal()}
                  >
                    Új Kategória
                  </button>
                </div>
                <div className="table-responsive">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Név</th>
                        <th>Típus</th>
                        <th>Műveletek</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((cat) => {
                        const isAktív = cat.type.toLowerCase() === 'aktív';
                        const isEgyéni = cat.type.toLowerCase() === 'egyéni';
                        const badgeColor = isAktív
                          ? 'var(--accent-green)'
                          : isEgyéni
                            ? 'var(--accent-red)'
                            : 'var(--text-gray)';
                        const badgeBg = isAktív
                          ? 'rgba(46, 213, 115, 0.2)'
                          : isEgyéni
                            ? 'rgba(255, 71, 87, 0.2)'
                            : 'rgba(255, 255, 255, 0.1)';
                        const badgeBorder = isAktív
                          ? '1px solid rgba(46, 213, 115, 0.3)'
                          : isEgyéni
                            ? '1px solid rgba(255, 71, 87, 0.3)'
                            : '1px solid rgba(255, 255, 255, 0.2)';

                        return (
                          <tr key={cat.uuid}>
                            <td data-label="Név">{cat.name}</td>
                            <td data-label="Típus">
                              <span
                                className="role-badge"
                                style={{
                                  background: badgeBg,
                                  color: badgeColor,
                                  border: badgeBorder,
                                }}
                              >
                                {cat.type}
                              </span>
                            </td>
                            <td data-label="Műveletek">
                              <div className="action-buttons">
                                <button
                                  className="btn-icon edit"
                                  onClick={() => openCategoryModal(cat)}
                                >
                                  <FaEdit />
                                </button>
                                <button
                                  className="btn-icon delete"
                                  onClick={() =>
                                    setDeleteConfirmDialog({
                                      isOpen: true,
                                      type: 'category',
                                      id: cat.uuid,
                                    })
                                  }
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                      {categories.length === 0 && (
                        <tr>
                          <td colSpan="3" className="no-results">
                            Nincsenek kategóriák.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Challenges Section */}
              <div
                className="admin-section"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="section-header">
                  <h3>Kihívások</h3>
                  <button
                    className="btn-primary"
                    onClick={() => openChallengeModal()}
                  >
                    Új Kihívás
                  </button>
                </div>
                <div className="table-responsive">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Név</th>
                        <th>Kategória</th>
                        <th>Nehézség</th>
                        <th>Jutalom</th>
                        <th>Műveletek</th>
                      </tr>
                    </thead>
                    <tbody>
                      {challenges.map((challenge) => (
                        <tr key={challenge.uuid}>
                          <td data-label="Kihívás">
                            <div className="user-cell">
                              <div className="user-details">
                                <span className="user-name">
                                  {challenge.name}
                                </span>
                                <span
                                  className="user-email"
                                  style={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '200px',
                                  }}
                                >
                                  {challenge.description}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td data-label="Kategória">
                            {challenge.categories?.name || 'Ismeretlen'}
                          </td>
                          <td data-label="Nehézség">
                            <span
                              className={`difficulty-badge difficulty-${challenge.difficulty || 'medium'}`}
                            >
                              {challenge.difficulty === 'easy'
                                ? 'Könnyű'
                                : challenge.difficulty === 'hard'
                                  ? 'Nehéz'
                                  : 'Közepes'}
                            </span>
                          </td>
                          <td data-label="Jutalom">
                            <div style={{ display: 'flex', gap: '10px' }}>
                              <span
                                style={{ color: '#ffaa00', fontWeight: 'bold' }}
                              >
                                {challenge.coin} Coin
                              </span>
                              <span
                                style={{ color: '#00ccff', fontWeight: 'bold' }}
                              >
                                {challenge.xp} XP
                              </span>
                            </div>
                          </td>
                          <td data-label="Műveletek">
                            <div className="action-buttons">
                              <button
                                className="btn-icon edit"
                                onClick={() => openChallengeModal(challenge)}
                              >
                                <FaEdit />
                              </button>
                              <button
                                className="btn-icon delete"
                                onClick={() =>
                                  setDeleteConfirmDialog({
                                    isOpen: true,
                                    type: 'challenge',
                                    id: challenge.uuid,
                                  })
                                }
                              >
                                <FaTrash />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {challenges.length === 0 && (
                        <tr>
                          <td colSpan="5" className="no-results">
                            Nincsenek kihívások.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );

      case 'tickets':
        return (
          <div className="tab-content tickets-tab">
            <div className="tab-header" data-aos="fade-down">
              <h2>Hibajegyek Kezelése</h2>
            </div>

            <div className="tickets-list" data-aos="fade-up">
              {tickets.length > 0 ? (
                tickets.map((ticket, index) => (
                  <div
                    key={ticket.uuid}
                    className="ticket-card"
                    data-status={ticket.status}
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <div
                      className="ticket-header"
                      onClick={() =>
                        setExpandedTicketId(
                          expandedTicketId === ticket.uuid ? null : ticket.uuid
                        )
                      }
                    >
                      <div className="ticket-info">
                        <span className="ticket-id">
                          #{ticket.uuid.substring(0, 8)}
                        </span>
                        <h4 className="ticket-title">{ticket.title}</h4>
                        <span className="ticket-user">
                          Beküldte: {ticket.users.username}
                        </span>
                        <span className="ticket-date">
                          {new Date(ticket.created_at).toLocaleString('hu-HU', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                      </div>
                      <div className="ticket-actions">
                        <span className={`status-badge ${ticket.status}`}>
                          {ticket.status === 'fixed'
                            ? 'Javítva'
                            : ticket.status === 'open'
                              ? 'Nyitva'
                              : ticket.status}
                        </span>
                        {expandedTicketId === ticket.uuid ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </div>
                    </div>

                    {expandedTicketId === ticket.uuid && (
                      <div className="ticket-body">
                        <div className="ticket-description">
                          <strong>Leírás:</strong>
                          <p>{ticket.description}</p>
                        </div>
                        <div className="ticket-controls">
                          <button
                            className={`btn-toggle-status ${ticket.status === 'fixed' ? 'fixed-btn' : ''}`}
                            onClick={() =>
                              handleTicketStatusToggle(
                                ticket.uuid,
                                ticket.status
                              )
                            }
                          >
                            {ticket.status === 'fixed' ? (
                              <>
                                <FaCheck /> Visszanyitás
                              </>
                            ) : (
                              <>
                                <FaCheck /> Megjelölés Javítvaként
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="no-tickets">
                  <FaTicketAlt className="empty-state-icon" />
                  <p>Nincsenek hibajegyek a rendszerben.</p>
                </div>
              )}
            </div>
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
            <h1 className="admin-logo">ChallengeHub</h1>
            <span className="admin-subtitle">Vezérlőpult</span>
          </div>

          <nav className="sidebar-menu">
            <button
              className={`sidebar-item ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <FaEye className="menu-icon" />
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
            <button
              className={`sidebar-item ${activeTab === 'tickets' ? 'active' : ''}`}
              onClick={() => setActiveTab('tickets')}
            >
              <FaTicketAlt className="menu-icon" />
              <span>Hibajegyek</span>
            </button>
          </nav>

          <div className="sidebar-footer">
            <div className="admin-profile">
              <div className="admin-avatar">A</div>
              <div className="admin-info">
                <span className="name">Admin</span>
                <span className="role">Rendszergazda</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="admin-main">
          <h1 className="mobile-header">Vezérlőpult</h1>
          {renderContent()}

          {/* User Edit Modal */}
          {isEditModalOpen && editingUser && (
            <div className="modal-overlay" onClick={closeEditModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h3>Felhasználó Szerkesztése: {editingUser.username}</h3>
                  <button className="close-btn" onClick={closeEditModal}>
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <div className="setting-row">
                    <label>E-mail Cím:</label>
                    <input type="text" value={editingUser.email} disabled />
                  </div>
                  <div className="setting-row toggle-row">
                    <label>Adminisztrátori Jogosultság:</label>
                    <button
                      className={`toggle-btn ${editingUser.admin ? 'active' : ''}`}
                      onClick={() =>
                        handleUpdateRole(
                          editingUser.uuid,
                          editingUser.admin === 1 ? 0 : 1
                        )
                      }
                    >
                      {editingUser.admin
                        ? 'Igen (Lefokozás)'
                        : 'Nem (Előléptetés)'}
                    </button>
                  </div>
                  <div className="setting-row toggle-row">
                    <label>Kitiltás (Ban) Státusz:</label>
                    <button
                      className={`toggle-btn danger ${editingUser.is_banned ? 'active' : ''}`}
                      onClick={() =>
                        handleUpdateBan(
                          editingUser.uuid,
                          !editingUser.is_banned
                        )
                      }
                    >
                      {editingUser.is_banned
                        ? 'Kitiltva (Visszaenged)'
                        : 'Aktív (Kitiltás)'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Category Edit Modal */}
          {isCategoryModalOpen && (
            <div
              className="modal-overlay"
              onClick={() => setIsCategoryModalOpen(false)}
            >
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h3>
                    {editingCategory
                      ? 'Kategória Szerkesztése'
                      : 'Új Kategória'}
                  </h3>
                  <button
                    className="close-btn"
                    onClick={() => setIsCategoryModalOpen(false)}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSaveCategory} className="admin-form">
                    <div className="form-group">
                      <label>Kategória Neve</label>
                      <input
                        type="text"
                        value={categoryForm.name}
                        onChange={(e) =>
                          setCategoryForm({
                            ...categoryForm,
                            name: e.target.value,
                          })
                        }
                        required
                        placeholder="Pl. Napi séta"
                      />
                    </div>
                    <div className="form-group">
                      <label>Típus</label>
                      <input
                        type="text"
                        value={categoryForm.type}
                        onChange={(e) =>
                          setCategoryForm({
                            ...categoryForm,
                            type: e.target.value,
                          })
                        }
                        required
                        placeholder="Pl. sport, health, stb."
                      />
                    </div>
                    <div className="modal-actions">
                      <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => setIsCategoryModalOpen(false)}
                      >
                        Mégse
                      </button>
                      <button type="submit" className="btn-primary">
                        Mentés
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Challenge Edit Modal */}
          {isChallengeModalOpen && (
            <div
              className="modal-overlay"
              onClick={() => setIsChallengeModalOpen(false)}
            >
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h3>
                    {editingChallenge ? 'Kihívás Szerkesztése' : 'Új Kihívás'}
                  </h3>
                  <button
                    className="close-btn"
                    onClick={() => setIsChallengeModalOpen(false)}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSaveChallenge} className="admin-form">
                    <div className="form-group">
                      <label>Kihívás Neve</label>
                      <input
                        type="text"
                        value={challengeForm.name}
                        onChange={(e) =>
                          setChallengeForm({
                            ...challengeForm,
                            name: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Leírás</label>
                      <textarea
                        value={challengeForm.description}
                        onChange={(e) =>
                          setChallengeForm({
                            ...challengeForm,
                            description: e.target.value,
                          })
                        }
                        required
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>XP Jutalom</label>
                        <input
                          type="number"
                          value={challengeForm.xp}
                          onChange={(e) =>
                            setChallengeForm({
                              ...challengeForm,
                              xp: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Coin Jutalom</label>
                        <input
                          type="number"
                          value={challengeForm.coin}
                          onChange={(e) =>
                            setChallengeForm({
                              ...challengeForm,
                              coin: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Nehézség</label>
                      <select
                        value={challengeForm.difficulty}
                        onChange={(e) =>
                          setChallengeForm({
                            ...challengeForm,
                            difficulty: e.target.value,
                          })
                        }
                        required
                      >
                        <option value="easy">Könnyű</option>
                        <option value="medium">Közepes</option>
                        <option value="hard">Nehéz</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Kategória</label>
                      <select
                        value={challengeForm.categories_id}
                        onChange={(e) =>
                          setChallengeForm({
                            ...challengeForm,
                            categories_id: e.target.value,
                          })
                        }
                        required
                      >
                        <option value="">-- Válassz Kategóriát --</option>
                        {categories.map((c) => (
                          <option key={c.uuid} value={c.uuid}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="modal-actions">
                      <button
                        type="button"
                        className="btn-secondary"
                        onClick={() => setIsChallengeModalOpen(false)}
                      >
                        Mégse
                      </button>
                      <button type="submit" className="btn-primary">
                        Mentés
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Delete Confirm Modal */}
          {deleteConfirmDialog.isOpen && (
            <div
              className="modal-overlay"
              onClick={() =>
                setDeleteConfirmDialog({ isOpen: false, type: null, id: null })
              }
            >
              <div
                className="modal-content delete-confirm-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-btn delete-close-btn"
                  onClick={() =>
                    setDeleteConfirmDialog({
                      isOpen: false,
                      type: null,
                      id: null,
                    })
                  }
                >
                  &times;
                </button>
                <div className="delete-modal-body">
                  <div className="delete-icon-wrapper">
                    <FaTrash className="delete-icon" />
                  </div>
                  <h3 className="delete-title">Törlés megerősítése</h3>
                  <p className="delete-message">
                    Biztosan törölni szeretnéd ezt a{' '}
                    {deleteConfirmDialog.type === 'category'
                      ? 'kategóriát'
                      : 'kihívást'}
                    ?
                  </p>
                  {deleteConfirmDialog.type === 'category' && (
                    <p className="delete-warning">
                      ⚠️ A kategóriához tartozó összes kihívás is törlésre
                      kerül!
                    </p>
                  )}
                  <p className="delete-subtitle">
                    Ez a művelet végleges és nem vonható vissza.
                  </p>
                  <div className="delete-actions">
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() =>
                        setDeleteConfirmDialog({
                          isOpen: false,
                          type: null,
                          id: null,
                        })
                      }
                    >
                      Mégse
                    </button>
                    <button
                      type="button"
                      className="btn-delete"
                      onClick={confirmDelete}
                    >
                      Törlés
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
