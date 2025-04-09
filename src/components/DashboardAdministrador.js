import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DashboardAdministrador = () => {
  const [estadisticas, setEstadisticas] = useState({});

  useEffect(() => {
    // Fetch de estadísticas del servidor
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/dashboard/estadisticas');
        setEstadisticas(response.data);
      } catch (error) {
        console.error('Error al obtener las estadísticas', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Bienvenido al Dashboard</h2>
      <div className="summary-cards">
        <div className="card">
          <h3>Total de Clientes</h3>
          <p>{estadisticas.clientes || 0}</p>
        </div>
        <div className="card">
          <h3>Total de Entrenadores</h3>
          <p>{estadisticas.entrenadores || 0}</p>
        </div>
        <div className="card">
          <h3>Total de Empleados</h3>
          <p>{estadisticas.empleados || 0}</p>
        </div>
      </div>

      <div className="quick-links">
        <Link to="/clientes">Ver Clientes</Link>
        <Link to="/entrenadores">Ver Entrenadores</Link>
        <Link to="/empleados">Ver Empleados</Link>
        <Link to="/historial-economico">Historial Económico</Link>
        <Link to="/asistencias">Ver Asistencias</Link>
      </div>
    </div>
  );
};

export default DashboardAdministrador;
