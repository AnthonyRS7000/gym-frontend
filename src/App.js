// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registro from "./components/Registro";
import AsistenciaForm from "./components/AsistenciaForm";
import AsistenciaTabla from './components/AsistenciaTabla'; 
import Gym from './components/Gym'; // Importamos el componente Gym
import Header from './components/Header'; // Importamos el Header

function App() {
  return (
    <Router>
      <Header /> {/* El Header está aquí para que se muestre en todas las rutas */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/registrar-asistencia" element={<AsistenciaForm />} />
        <Route path="/asistencias" element={<AsistenciaTabla />} />
        <Route path="/gym" element={<Gym />} />
      </Routes>
    </Router>
  );
}

export default App;
