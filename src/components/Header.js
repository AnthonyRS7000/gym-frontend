// src/components/Header.js
import React from 'react';
import './Header.css';  // Estilos del Header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Ruta correcta a la imagen del logo en la carpeta public/images */}
        <img src="/images/logo-dark.png" alt="Logo SmartFit" className="logo-img" />
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="/gimnasios">Gimnasios</a></li>
          <li><a href="/tu-espacio">Tu Espacio</a></li>
          <li><a href="/corporativo">Corporativo</a></li>
        </ul>
      </nav>
      <button className="signup-button">¡Inscríbete ya!</button>
      <div className="menu-icon">
        <button>☰</button>
      </div>
    </header>
  );
}

export default Header;
