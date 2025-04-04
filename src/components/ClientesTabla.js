import { useEffect, useState } from "react";

const ClientesTabla = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/clientes");
                const data = await res.json();
                setClientes(data);
            } catch (error) {
                console.error("❌ Error cargando clientes:", error);
            }
        };

        fetchClientes();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Membresía</th>
                    <th>Fecha de Inicio</th>
                    <th>Fecha de Fin</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map((cliente, index) => (
                    <tr key={index}>
                        <td>{cliente.usuario?.nombre}</td>
                        <td>{cliente.tipoMembresia?.nombre}</td>
                        <td>{cliente.fecha_inicio}</td>
                        <td>{cliente.fecha_fin}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ClientesTabla;
