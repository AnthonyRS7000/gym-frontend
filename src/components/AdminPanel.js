import { Outlet, Link } from "react-router-dom";
import React, { useEffect } from 'react';
import '../styles/adminPanel/main.css';

const AdminPanel = () => {
  useEffect(() => {
    const scripts = [
      '/js/jquery-3.1.1.min.js',
      '/js/sweetalert2.min.js',
      '/js/bootstrap.min.js',
      '/js/material.min.js',
      '/js/ripples.min.js',
      '/js/jquery.mCustomScrollbar.concat.min.js',
      '/js/main.js',
    ];

    scripts.forEach((src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    });

    const initMaterial = () => {
      if (window.$ && window.$.material && window.$.material.init) {
        window.$.material.init();
      }
    };
    setTimeout(initMaterial, 1000);
  }, []);

  return (
    <div>
      {/* Sidebar */}
      <section className="full-box cover dashboard-sideBar">
        <div className="full-box dashboard-sideBar-bg btn-menu-dashboard"></div>
        <div className="full-box dashboard-sideBar-ct">
          <div className="full-box text-uppercase text-center text-titles dashboard-sideBar-title">
            company <i className="zmdi zmdi-close btn-menu-dashboard visible-xs"></i>
          </div>

          <div className="full-box dashboard-sideBar-UserInfo">
            <figure className="full-box">
              <img src="/assets/img/senior.png" alt="UserIcon" />
              <figcaption className="text-center text-titles">Dr. Rivera Camila Contreras</figcaption>
            </figure>
            <ul className="full-box list-unstyled text-center">
              <li><a href="#!"><i className="zmdi zmdi-settings"></i></a></li>
              <li><a href="#!" className="btn-exit-system"><i className="zmdi zmdi-power"></i></a></li>
            </ul>
          </div>

          <ul className="list-unstyled full-box dashboard-sideBar-Menu">
            <li>
              <Link to="/" className="full-box"><i className="zmdi zmdi-view-dashboard zmdi-hc-fw"></i> Dashboard</Link>
            </li>
            <li>
              <a href="#!" className="btn-sideBar-SubMenu">
                <i className="zmdi zmdi-case zmdi-hc-fw"></i> Usuarios <i className="zmdi zmdi-caret-down pull-right"></i>
              </a>
              <ul className="list-unstyled full-box">
                <li><Link to="/clientes" className="full-box"><i className="zmdi zmdi-book zmdi-hc-fw"></i> Clientes</Link></li>
                <li><a href="#"><i className="zmdi zmdi-book zmdi-hc-fw"></i> Entrenador</a></li>
                <li><a href="#"><i className="zmdi zmdi-graduation-cap zmdi-hc-fw"></i> Administrador</a></li>
              </ul>
            </li>
            <li>
              <a href="#!" className="btn-sideBar-SubMenu">
                <i className="zmdi zmdi-account-add zmdi-hc-fw"></i> Users <i className="zmdi zmdi-caret-down pull-right"></i>
              </a>
              <ul className="list-unstyled full-box">
                <li><a href="#"><i className="zmdi zmdi-account zmdi-hc-fw"></i> Admin</a></li>
                <li><a href="#"><i className="zmdi zmdi-male-alt zmdi-hc-fw"></i> Teacher</a></li>
                <li><a href="#"><i className="zmdi zmdi-face zmdi-hc-fw"></i> Student</a></li>
                <li><a href="#"><i className="zmdi zmdi-male-female zmdi-hc-fw"></i> Representative</a></li>
              </ul>
            </li>
            <li>
              <a href="#!" className="btn-sideBar-SubMenu">
                <i className="zmdi zmdi-card zmdi-hc-fw"></i> Payments <i className="zmdi zmdi-caret-down pull-right"></i>
              </a>
              <ul className="list-unstyled full-box">
                <li><a href="#"><i className="zmdi zmdi-money-box zmdi-hc-fw"></i> Registration</a></li>
                <li><a href="#"><i className="zmdi zmdi-money zmdi-hc-fw"></i> Payments</a></li>
              </ul>
            </li>
            <li>
              <a href="#!" className="btn-sideBar-SubMenu">
                <i className="zmdi zmdi-shield-security zmdi-hc-fw"></i> Settings School <i className="zmdi zmdi-caret-down pull-right"></i>
              </a>
              <ul className="list-unstyled full-box">
                <li><a href="#"><i className="zmdi zmdi-balance zmdi-hc-fw"></i> School Data</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      {/* Content area where pages like ClientesTabla render */}
      <section className="full-box dashboard-contentPage">
        <nav className="full-box dashboard-Navbar">
          <ul className="full-box list-unstyled text-right">
            <li className="pull-left">
              <a href="#!" className="btn-menu-dashboard"><i className="zmdi zmdi-more-vert"></i></a>
            </li>
            <li>
              <a href="#!" className="btn-Notifications-area">
                <i className="zmdi zmdi-notifications-none"></i>
                <span className="badge">7</span>
              </a>
            </li>
            <li>
              <a href="#!" className="btn-search"><i className="zmdi zmdi-search"></i></a>
            </li>
            <li>
              <a href="#!" className="btn-modal-help"><i className="zmdi zmdi-help-outline"></i></a>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          {/* AQUI se renderizan los componentes hijos */}
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
