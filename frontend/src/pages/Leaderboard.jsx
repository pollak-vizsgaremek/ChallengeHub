import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Leaderboard.css';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { FaTrophy, FaMedal, FaCrown, FaBolt } from 'react-icons/fa';
import { buildApiUrl } from '../utils/api';

const Leaderboard = () => {
  const [user, setUser] = useState(null);
  const [top10, setTop10] = useState([]);
  const [currentUserRank, setCurrentUserRank] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      fetchLeaderboard(parsedUser.userId);
    }
  }, []);

  const fetchLeaderboard = async (userId) => {
    try {
      const response = await fetch(
        buildApiUrl(`/api/v1/users/leaderboard?userId=${userId}`),
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTop10(data.top10);
        setCurrentUserRank(data.currentUser);
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <FaCrown className="rank-icon gold" />;
      case 2:
        return <FaMedal className="rank-icon silver" />;
      case 3:
        return <FaMedal className="rank-icon bronze" />;
      default:
        return <span className="rank-number">{rank}</span>;
    }
  };

  const getRankClass = (rank) => {
    switch (rank) {
      case 1:
        return 'rank-gold';
      case 2:
        return 'rank-silver';
      case 3:
        return 'rank-bronze';
      default:
        return '';
    }
  };

  const formatXP = (xp) => {
    if (xp >= 1000000) {
      return (xp / 1000000).toFixed(1) + 'M';
    } else if (xp >= 1000) {
      return (xp / 1000).toFixed(1) + 'K';
    }
    return xp.toString();
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="leaderboard-page">
          <div className="loading-container">
            <div className="loader"></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <Navbar />
      <div className="leaderboard-page">
        <div className="leaderboard-container">
          {/* Header */}
          <div className="leaderboard-header" data-aos="fade-down">
            <div className="header-icon-wrapper">
              <FaTrophy className="header-icon" />
            </div>
            <h1 className="leaderboard-title">Bajnokok Ligája</h1>
            <p className="leaderboard-subtitle">A ChallengeHub legjobbjai</p>
          </div>

          {/* Top 3 Podium */}
          <div className="podium-section">
            {top10.length >= 3 ? (
              <div className="podium">
                {/* 2nd Place */}
                <div
                  className="podium-item second"
                  data-aos="fade-up-right"
                  data-aos-delay="200"
                >
                  <div className="rank-badge silver">2</div>
                  <div className="podium-content">
                    <div className="podium-avatar">
                      {top10[1]?.username?.charAt(0).toUpperCase()}
                    </div>
                    <h3 className="podium-name">{top10[1]?.username}</h3>
                    <div className="podium-xp">
                      <FaBolt className="bolt-icon" /> {formatXP(top10[1]?.xp)}
                    </div>
                  </div>
                  <div className="podium-stand second-stand"></div>
                </div>

                {/* 1st Place */}
                <div
                  className="podium-item first"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                >
                  <div className="crown-container">
                    <FaCrown className="crown-icon" />
                  </div>
                  <div className="rank-badge gold">1</div>
                  <div className="podium-content">
                    <div className="podium-avatar gold-avatar">
                      {top10[0]?.username?.charAt(0).toUpperCase()}
                    </div>
                    <h3 className="podium-name">{top10[0]?.username}</h3>
                    <div className="podium-xp">
                      <FaBolt className="bolt-icon" /> {formatXP(top10[0]?.xp)}
                    </div>
                  </div>
                  <div className="podium-stand first-stand"></div>
                </div>

                {/* 3rd Place */}
                <div
                  className="podium-item third"
                  data-aos="fade-up-left"
                  data-aos-delay="400"
                >
                  <div className="rank-badge bronze">3</div>
                  <div className="podium-content">
                    <div className="podium-avatar">
                      {top10[2]?.username?.charAt(0).toUpperCase()}
                    </div>
                    <h3 className="podium-name">{top10[2]?.username}</h3>
                    <div className="podium-xp">
                      <FaBolt className="bolt-icon" /> {formatXP(top10[2]?.xp)}
                    </div>
                  </div>
                  <div className="podium-stand third-stand"></div>
                </div>
              </div>
            ) : (
              // Fallback if less than 3 players
              <div className="empty-state">
                <p>Még nincs elég adat a dobogóhoz.</p>
              </div>
            )}
          </div>

          {/* Leaderboard Table / List */}
          <div
            className="leaderboard-list-section"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="leaderboard-list-header">
              <span>Helyezés</span>
              <span>Játékos</span>
              <span className="right-align">Tapasztalat</span>
            </div>

            <div className="leaderboard-list">
              {top10.map(
                (player, index) =>
                  index > 2 && (
                    <div
                      key={player.uuid}
                      className={`leaderboard-item ${
                        player.uuid === user?.userId ? 'current-user-item' : ''
                      }`}
                      data-aos="fade-up"
                      data-aos-delay={index * 50}
                    >
                      <div className="item-rank">{player.rank}</div>
                      <div className="item-user">
                        <div className="item-avatar">
                          {player.username?.charAt(0).toUpperCase()}
                        </div>
                        <span className="item-username">{player.username}</span>
                      </div>
                      <div className="item-xp">
                        <FaBolt className="bolt-icon" />
                        {formatXP(player.xp)}
                      </div>
                    </div>
                  )
              )}
            </div>

            {currentUserRank && currentUserRank.rank > 10 && (
              <div className="current-user-floating">
                <div className="leaderboard-item current-user-item">
                  <div className="item-rank">{currentUserRank.rank}</div>
                  <div className="item-user">
                    <div className="item-avatar">
                      {currentUserRank.username?.charAt(0).toUpperCase()}
                    </div>
                    <span className="item-username">
                      {currentUserRank.username} (Te)
                    </span>
                  </div>
                  <div className="item-xp">
                    <FaBolt className="bolt-icon" />
                    {formatXP(currentUserRank.xp)}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Leaderboard;
