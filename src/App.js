import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registro from "./components/Registro";
import AsistenciaForm from "./components/AsistenciaForm";
import AsistenciaTabla from './components/AsistenciaTabla';
import ClientesTabla from './components/ClientesTabla';
import Notificaciones from "./components/Notificaciones"; // ✅ Asegurate de importar esto
import NotificacionesCliente from "./components/NotificacionesCliente"; // Cliente
import Header from "./components/Header"; // Cliente
function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/registrar-asistencia" element={<AsistenciaForm />} />
        <Route path="/asistencias" element={<AsistenciaTabla />} />
        <Route path="/clientes" element={<ClientesTabla />} />
        <Route path="/notificaciones" element={<Notificaciones />} /> {/* ✅ RUTA NUEVA */}
        <Route path="/mis-notificaciones" element={<NotificacionesCliente />} /> {/* Cliente */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
