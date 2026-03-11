import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './Footer';
import './NotFound.css';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="notfound-container">
        <div className="notfound-box">
          <h1 className="notfound-title">404</h1>
          <h2 className="notfound-subtitle">A keresett oldal nem található</h2>
          <p className="notfound-desc">
            Úgy tűnik, hogy olyan hivatkozásra kattintottál, amely nem létezik, vagy az oldal áthelyezésre került.
          </p>
          <Link to="/" className="btn-notfound">
            Vissza a Főoldalra
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
