import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, rolesPermitidos = [] }) => {
  const token = localStorage.getItem('token');
  const usuarioJSON = localStorage.getItem('usuario'); // Supongamos que guardás el usuario también
  const usuario = usuarioJSON ? JSON.parse(usuarioJSON) : null;

  if (!token || !usuario) {
    // Si no está logueado, lo mandamos al login
    return <Navigate to="/login" replace />;
  }

  if (rolesPermitidos.length > 0 && !rolesPermitidos.includes(usuario.rol)) {
    // Si no tiene el rol permitido, lo mandamos a una página de acceso denegado o a inicio
    return <Navigate to="/" replace />;
  }

  return <Component />;
};

export default ProtectedRoute;
