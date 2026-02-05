import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { decodeJwt } from '../utils/jwt';

export default function ProtectedRoute() {
  const accessToken = localStorage.getItem('accessToken');
  const location = useLocation();

  if (!accessToken) {
    return <Navigate to="/bejelentkezes" replace />;
  }
  const decoded = decodeJwt(accessToken);

  if (!decoded) {
    return <Navigate to="/bejelentkezes" replace />;
  }

  // If the user is not admin and trying to access admin page, redirect to home page
  if (!decoded.isAdmin && location.pathname.startsWith('/admin')) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
