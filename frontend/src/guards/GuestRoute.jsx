import React from 'react';
import { Navigate } from 'react-router-dom';
import { decodeJwt } from '../utils/jwt';

export default function GuestRoute({ children }) {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    const decoded = decodeJwt(accessToken);
    if (decoded && decoded.exp * 1000 > Date.now()) {
      return <Navigate to="/" replace />;
    }
  }

  return children;
}
