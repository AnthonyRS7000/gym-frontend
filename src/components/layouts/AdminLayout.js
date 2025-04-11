// src/components/layouts/AdminLayout.js
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar"; // asegúrate que tengas un componente Sidebar

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        <Outlet /> {/* Aquí se mostrará lo que corresponde a cada ruta */}
      </div>
    </div>
  );
};

export default AdminLayout;
