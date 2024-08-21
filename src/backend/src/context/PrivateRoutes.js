import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider.js';

const PrivateRoute = ({ element, roles }) => {
  const { user } = useAuth();

  // Si aún no se ha determinado el estado del usuario, muestra una pantalla de carga
  if (user === undefined) {
    return <div>Loading...</div>;
  }

  // Si no hay usuario autenticado, redirige a login
  if (!user) {
    return <Navigate to="/" />;
  }

  // Si el usuario no tiene el rol requerido, redirige a login
  if (roles && !roles.includes(user.rol)) {
    return <Navigate to="/" />;
  }

  // Si todo está bien, renderiza el componente solicitado
  return element;
};

export default PrivateRoute;
