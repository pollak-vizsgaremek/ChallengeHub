import React, { useState, useRef } from 'react';
import {
  FaRobot,
  FaTimes,
  FaCheckCircle,
  FaTimesCircle,
  FaRocket,
  FaSyncAlt,
} from 'react-icons/fa';
import { BsImageFill } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi';
import './ChallengeProofModal.css';
import { buildApiUrl } from '../utils/api';

const ChallengeProofModal = ({ challenge, userTaskId, onClose, onSuccess }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('A fájl túl nagy! Maximum 10MB engedélyezett.');
        return;
      }
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
      setResult(null);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setResult(null);

    try {
      const userStr = localStorage.getItem('user');
      if (!userStr) throw new Error('Nem vagy bejelentkezve!');

      const token = localStorage.getItem('accessToken');
      if (!token) throw new Error('Nem vagy bejelentkezve!');

      const formData = new FormData();
      formData.append('proof', selectedFile);
      formData.append('userTaskId', userTaskId);

      const response = await fetch(
        buildApiUrl('/api/v1/challenges/submit-proof'),
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await response.json();
      setResult(data);

      if (data.verdict === 'approved' && onSuccess) {
        // Ne zárjuk be automatikusan, a user maga zárja be a gombbal
      }
    } catch (error) {
      console.error('Submit error:', error);
      setResult({
        verdict: 'rejected',
        message: 'Hiba történt a küldés során. Próbáld újra!',
        reasoning: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const fakeEvent = { target: { files: [file] } };
      handleFileSelect(fakeEvent);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="proof-modal-overlay" onClick={onClose}>
      <div className="proof-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="proof-modal-header">
          <div className="proof-modal-title-section">
            <div className="proof-modal-ai-badge">
              <span className="proof-ai-icon">
                <FaRobot />
              </span>
              <span>AI Validálás</span>
            </div>
            <h2 className="proof-modal-title">Bizonyíték beküldése</h2>
          </div>
          <button className="proof-modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Challenge info */}
        <div className="proof-challenge-info">
          <h3>{challenge.name}</h3>
          <p>{challenge.description}</p>
          <div className="proof-rewards">
            <span className="proof-reward-chip xp">+{challenge.xp} XP</span>
            <span className="proof-reward-chip coin">🪙 +{challenge.coin}</span>
          </div>
        </div>

        {/* Upload area */}
        {!result && (
          <div
            className={`proof-upload-area ${preview ? 'has-preview' : ''}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => !preview && fileInputRef.current?.click()}
          >
            {preview ? (
              <div className="proof-preview-container">
                <img
                  src={preview}
                  alt="Preview"
                  className="proof-preview-img"
                />
                <button
                  className="proof-change-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(null);
                    setPreview(null);
                    fileInputRef.current.value = '';
                  }}
                >
                  Másik kép
                </button>
              </div>
            ) : (
              <div className="proof-upload-placeholder">
                <div className="proof-upload-icon">
                  <BsImageFill />
                </div>
                <p className="proof-upload-text">
                  Húzd ide a képet vagy kattints a feltöltéshez
                </p>
                <p className="proof-upload-hint">
                  Készíts screenshotot a futó appodról, vagy fotózd le az
                  eredményed!
                </p>
                <p className="proof-upload-formats">
                  JPEG, PNG, WebP, GIF • Max 10MB
                </p>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              onChange={handleFileSelect}
              className="proof-file-input"
            />
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="proof-loading">
            <div className="proof-loading-spinner"></div>
            <div className="proof-loading-text">
              <p className="proof-loading-title">
                <FaRobot
                  style={{
                    display: 'inline',
                    verticalAlign: 'middle',
                    marginRight: '6px',
                  }}
                />{' '}
                AI elemzi a képedet...
              </p>
              <p className="proof-loading-subtitle">
                A mesterséges intelligencia ellenőrzi, hogy a kép bizonyítja-e a
                kihívás teljesítését.
              </p>
            </div>
          </div>
        )}

        {/* Result */}
        {result && !loading && (
          <div
            className={`proof-result ${
              result.verdict === 'approved'
                ? 'proof-result-approved'
                : 'proof-result-rejected'
            }`}
          >
            <div className="proof-result-icon">
              {result.verdict === 'approved' ? (
                <FaCheckCircle />
              ) : (
                <FaTimesCircle />
              )}
            </div>
            <h3 className="proof-result-title">
              {result.verdict === 'approved' ? (
                <>
                  <HiSparkles
                    style={{
                      display: 'inline',
                      verticalAlign: 'middle',
                      marginRight: '4px',
                    }}
                  />{' '}
                  Kihívás teljesítve!
                </>
              ) : (
                'Nem el fogadva'
              )}
            </h3>
            <p className="proof-result-message">{result.message}</p>
            {result.reasoning && (
              <div className="proof-result-reasoning">
                <span className="proof-reasoning-label">
                  <FaRobot
                    style={{
                      display: 'inline',
                      verticalAlign: 'middle',
                      marginRight: '4px',
                    }}
                  />{' '}
                  AI indoklás:
                </span>
                <p>{result.reasoning}</p>
              </div>
            )}
            {result.verdict === 'approved' && (
              <div className="proof-result-rewards">
                <div className="proof-earned-badge xp">
                  +{result.xpEarned} XP
                </div>
                <div className="proof-earned-badge coin">
                  🪙 +{result.coinEarned}
                </div>
              </div>
            )}
            {result.confidence > 0 && (
              <div className="proof-confidence">
                <div className="proof-confidence-bar">
                  <div
                    className="proof-confidence-fill"
                    style={{ width: `${result.confidence}%` }}
                  ></div>
                </div>
                <span className="proof-confidence-text">
                  AI bizonyosság: {result.confidence}%
                </span>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="proof-modal-actions">
          {!result && (
            <button
              className="proof-submit-btn"
              onClick={handleSubmit}
              disabled={!selectedFile || loading}
            >
              {loading ? (
                <>
                  <span className="proof-btn-spinner"></span>
                  Elemzés folyamatban...
                </>
              ) : (
                <>
                  <FaRocket />
                  Beküldés AI validálásra
                </>
              )}
            </button>
          )}
          {result && result.verdict === 'rejected' && (
            <button
              className="proof-retry-btn"
              onClick={() => {
                setResult(null);
                setSelectedFile(null);
                setPreview(null);
                if (fileInputRef.current) fileInputRef.current.value = '';
              }}
            >
              <FaSyncAlt /> Újrapróbálkozás másik képpel
            </button>
          )}
          {result && result.verdict === 'approved' && (
            <button
              className="proof-submit-btn"
              onClick={() => {
                if (onSuccess) onSuccess(result);
                onClose();
              }}
            >
              <HiSparkles /> Szuper, tovább!
            </button>
          )}
          <button className="proof-cancel-btn" onClick={onClose}>
            {result ? 'Bezárás' : 'Mégse'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeProofModal;
