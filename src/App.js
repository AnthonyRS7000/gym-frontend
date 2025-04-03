import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registro from "./components/Registro";
import AsistenciaForm from "./components/AsistenciaForm";
import AsistenciaTabla from './components/AsistenciaTabla';  // Importa el componente de la tabla

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/registrar-asistencia" element={<AsistenciaForm />} />
        <Route path="/asistencias" element={<AsistenciaTabla />} /> {/* Nueva ruta para la tabla */}
      </Routes>
    </Router>
  );
}

export default App;
