import { useEffect, useState } from "react";

const NotificacionesCliente = () => {
    const [notificaciones, setNotificaciones] = useState([]);
    const [clienteId, setClienteId] = useState(null);

    // Obtener clienteId desde localStorage al cargar
    useEffect(() => {
        const id = localStorage.getItem("clienteId");
        if (id) {
            console.log("🔍 clienteId:", id);
            setClienteId(id);
        }
    }, []);

    // Llamar al backend para obtener notificaciones
    useEffect(() => {
        const obtenerNotificaciones = async () => {
            if (!clienteId) return;

            try {
                const res = await fetch(`http://localhost:5000/api/notificaciones/cliente/${clienteId}`);
                const data = await res.json();
                setNotificaciones(data);
            } catch (error) {
                console.error("❌ Error al cargar notificaciones:", error);
            }
        };

        obtenerNotificaciones();
    }, [clienteId]);

    return (
        <div style={{ padding: "2rem" }}>
            <h2>🔔 Tus Notificaciones</h2>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Mensaje</th>
                        <th>Estado</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {notificaciones.length === 0 ? (
                        <tr>
                            <td colSpan="3" style={{ textAlign: "center" }}>
                                No hay notificaciones
                            </td>
                        </tr>
                    ) : (
                        notificaciones.map((n, index) => (
                            <tr key={index}>
                                <td>{n.mensaje}</td>
                                <td>{n.estado}</td>
                                <td>{new Date(n.fecha_creacion).toLocaleDateString()}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default NotificacionesCliente;
