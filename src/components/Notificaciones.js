import { useEffect, useState } from "react";

const Notificaciones = () => {
    const [notificaciones, setNotificaciones] = useState([]);
    const [filtro, setFiltro] = useState("todas");

    const fetchNotificaciones = async (estado = "") => {
        try {
            const url = estado && estado !== "todas"
                ? `http://localhost:5000/api/notificaciones/listar?estado=${estado}`
                : `http://localhost:5000/api/notificaciones/listar`;

            const res = await fetch(url);
            const data = await res.json();
            setNotificaciones(data);
        } catch (error) {
            console.error("❌ Error cargando notificaciones:", error);
        }
    };

    useEffect(() => {
        fetchNotificaciones(filtro);
    }, [filtro]);

    return (
        <div>
            <h2>📢 Notificaciones de Todos los Clientes</h2>

            <label>Filtrar por estado: </label>
            <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                <option value="todas">Todas</option>
                <option value="pendiente">Pendientes</option>
                <option value="vista">Vistas</option>
            </select>

            <table>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Mensaje</th>
                        <th>Estado</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {notificaciones.map((n, index) => (
                        <tr key={index}>
                            <td>{n.cliente?.usuario?.nombre}</td>
                            <td>{n.mensaje}</td>
                            <td>{n.estado}</td>
                            <td>{new Date(n.fecha_creacion).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Notificaciones;
