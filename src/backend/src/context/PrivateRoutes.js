import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider.js';

const PrivateRoute = ({ element, roles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (roles && roles.indexOf(user.rol) === -1) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default PrivateRoute;
