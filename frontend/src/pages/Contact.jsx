import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  const [activeTab, setActiveTab] = useState('contact');

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <Navbar />

      <div className="main-container contact-page">
        <div className="contact-card" data-aos="fade-up">
          <div className="contact-header">
            <h1 className="contact-title" data-aos="fade-down">
              Lépj Kapcsolatba Velünk
            </h1>
            <p
              className="contact-subtitle"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              Kérdésed van vagy hibát találtál? Itt elérsz minket!
            </p>
          </div>

          <div className="tab-switcher" data-aos="fade-up" data-aos-delay="200">
            <button
              className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => setActiveTab('contact')}
            >
              Kapcsolat
            </button>
            <button
              className={`tab-btn ${activeTab === 'bug' ? 'active' : ''}`}
              onClick={() => setActiveTab('bug')}
            >
              Hibabejelentés
            </button>
          </div>

          <div className="content-area">
            {activeTab === 'contact' ? (
              <div className="contact-grid">
                <div
                  className="info-card"
                  data-aos="zoom-in"
                  data-aos-delay="0"
                >
                  <div className="info-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <h3 className="info-title">Email</h3>
                  <p className="info-text">
                    <a
                      href="mailto:support@challengehub.hu"
                      className="email-link"
                    >
                      support@challengehub.hu
                    </a>
                  </p>
                  <p className="info-text">
                    <a
                      href="mailto:info@challengehub.hu"
                      className="email-link"
                    >
                      info@challengehub.hu
                    </a>
                  </p>
                </div>

                <div
                  className="info-card"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="info-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="info-title">Discord</h3>
                  <p className="info-text">Csatlakozz közösségünkhöz!</p>
                  <a href="#" className="discord-join-link">
                    ChallengeHub Server
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginLeft: '5px' }}
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>

                <div
                  className="info-card"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="info-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </div>
                  <h3 className="info-title">Social Média</h3>
                  <div className="social-links">
                    <a
                      href="#"
                      className="contact-social-link"
                      title="Facebook"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="contact-social-link"
                      title="Instagram"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="contact-social-link"
                      title="X / Twitter"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <form className="bug-form" onSubmit={(e) => e.preventDefault()}>
                <div
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  <label className="form-label">Hiba Típusa</label>
                  <div className="input-group">
                    <select className="modern-input form-select">
                      <option>Válassz típust...</option>
                      <option>Kinézeti hiba (Design)</option>
                      <option>Működési hiba (Bug)</option>
                      <option>Fiók probléma</option>
                      <option>Egyéb</option>
                    </select>
                  </div>
                </div>

                <div
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <label className="form-label">Rövid Leírás</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="modern-input"
                      placeholder="pl. Nem tölt be a Shop oldal..."
                    />
                  </div>
                </div>

                <div
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <label className="form-label">
                    Részletes Leírás & Lépések
                  </label>
                  <div className="input-group">
                    <textarea
                      className="modern-input form-textarea"
                      placeholder="Írd le pontosan hogyan jött elő a hiba..."
                    ></textarea>
                  </div>
                </div>

                <div
                  className="form-group"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <label className="form-label">Sürgősség</label>
                  <div className="input-group">
                    <select className="modern-input form-select">
                      <option>Alacsony</option>
                      <option>Közepes</option>
                      <option>Magas</option>
                      <option>Kritikus</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-submit"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Beküldés
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
