import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registro from "./components/Registro";
import AsistenciaForm from "./components/AsistenciaForm";
import AsistenciaTabla from './components/AsistenciaTabla';
import ClientesTabla from './components/ClientesTabla';
import Notificaciones from "./components/Notificaciones"; // ✅ Asegurate de importar esto
import NotificacionesCliente from "./components/NotificacionesCliente"; // Cliente
import Header from "./components/Header"; // Cliente
import LoginAdmin from './components/LoginAdmin'; // o donde esté ubicado
import NavbarAdministrador from "./components/NavbarAdministrador";
import UserProfile from "./components/UserProfile";
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <>
    <Header />
    <Router>
    <Routes>
      {/* Públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/login-admin" element={<LoginAdmin />} />

      {/* Protegidas (requieren estar logueado) */}
      <Route
        path="/perfil-usuario"
        element={<ProtectedRoute element={UserProfile} rolesPermitidos={['cliente', 'entrenador', 'administrador']} />}
      />
      <Route
        path="/registrar-asistencia"
        element={<ProtectedRoute element={AsistenciaForm} rolesPermitidos={['entrenador','cliente','administrador','empleado']} />}
      />
      <Route
        path="/asistencias"
        element={<ProtectedRoute element={AsistenciaTabla} rolesPermitidos={['administrador']} />}
      />
      <Route
        path="/clientes"
        element={<ProtectedRoute element={ClientesTabla} rolesPermitidos={['administrador']} />}
      />
      <Route
        path="/admin"
        element={<ProtectedRoute element={NavbarAdministrador} rolesPermitidos={['administrador']} />}
      />
      <Route
        path="/notificaciones"
        element={<ProtectedRoute element={Notificaciones} rolesPermitidos={['administrador']} />}
      />
      <Route
        path="/mis-notificaciones"
        element={<ProtectedRoute element={NotificacionesCliente} rolesPermitidos={['cliente']} />}
      />
    </Routes>
    </Router>
    </>
  );
}

export default App;
