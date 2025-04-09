import React, { useState } from 'react';
import '../styles//NavbarAdministrador.css'; // Importamos el archivo CSS

const NavbarAdministrador = () => {
  return (
    <div className="admin-panel">
      <div className="sidebar">
        <div className="logo">MiApp</div>
        <ul className="nav-links">
          <li><a href="#clientes">Clientes</a></li>
          <li><a href="#entrenadores">Entrenadores</a></li>
          <li><a href="#empleados">Empleados</a></li>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#historial-economico">Historial Económico</a></li>
          <li><a href="#asistencias">Asistencias</a></li>
        </ul>
      </div>
      <div className="main-content">
        <header>
          <span className="welcome-message">Bienvenido, Adrián</span>
          <button className="logout-btn">Cerrar sesión</button>
        </header>
        <div className="content">
          <div className="overview">
            <div className="card">
              <h3>Total Clientes</h3>
              <p>200</p>
            </div>
            <div className="card">
              <h3>Total Entrenadores</h3>
              <p>10</p>
            </div>
            <div className="card">
              <h3>Total Empleados</h3>
              <p>5</p>
            </div>
          </div>
          <div className="chart">
            <h2>Historial Económico</h2>
            <div className="chart-area">
              {/* Aquí iría un gráfico representando el historial económico */}
              <p>Gráfico de historial económico (por implementar)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdministrador;
