import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/adminPanel/bootstrap.min.css";
import "../styles/adminPanel/bootstrap-material-design.min.css";
import "../styles/adminPanel/material-design-iconic-font.min.css";
import "../styles/adminPanel/sweetalert2.css";
import "../styles/adminPanel/jquery.mCustomScrollbar.css";
import "../styles/adminPanel/ripples.min.css";
import "../styles/adminPanel/main.css";

const NavbarAdministrador = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioJSON = localStorage.getItem("usuario");
    if (usuarioJSON) {
      setUsuario(JSON.parse(usuarioJSON));
    }
  }, []);

  const cerrarSesion = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="full-box cover dashboard-sideBar">
      <div className="full-box dashboard-sideBar-bg btn-menu-dashboard"></div>
      <div className="full-box dashboard-sideBar-ct">
        <div className="full-box text-uppercase text-center text-titles dashboard-sideBar-title">
          GYM SYSTEM <i className="zmdi zmdi-close btn-menu-dashboard visible-xs"></i>
        </div>
        <div className="full-box dashboard-sideBar-UserInfo">
          <figure className="full-box">
            <img src="/assets/img/avatar.jpg" alt="UserIcon" />
            <figcaption className="text-center text-titles">
              {usuario ? usuario.nombre : "Administrador"}
            </figcaption>
          </figure>
          <ul className="full-box list-unstyled text-center">
            <li>
              <Link to="/perfil-usuario">
                <i className="zmdi zmdi-settings"></i>
              </Link>
            </li>
            <li>
              <button onClick={cerrarSesion} className="btn-exit-system">
                <i className="zmdi zmdi-power"></i>
              </button>
            </li>
          </ul>
        </div>

        <ul className="list-unstyled full-box dashboard-sideBar-Menu">
          <li>
            <Link to="/admin">
              <i className="zmdi zmdi-view-dashboard zmdi-hc-fw"></i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/clientes">
              <i className="zmdi zmdi-accounts-list zmdi-hc-fw"></i> Clientes
            </Link>
          </li>
          <li>
            <Link to="/asistencias">
              <i className="zmdi zmdi-calendar-check zmdi-hc-fw"></i> Asistencias
            </Link>
          </li>
          <li>
            <Link to="/membresias">
              <i className="zmdi zmdi-card zmdi-hc-fw"></i> Membresías
            </Link>
          </li>
          <li>
            <Link to="/notificaciones">
              <i className="zmdi zmdi-notifications-active zmdi-hc-fw"></i> Notificaciones
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarAdministrador;
