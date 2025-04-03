import React, { useState, useEffect } from "react";

const AsistenciaTabla = () => {
  const [asistencias, setAsistencias] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerAsistencias = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/asistencia/asistencias");
        const data = await response.json();

        if (response.ok) {
          if (data.asistencias && data.asistencias.length > 0) {
            setAsistencias(data.asistencias);
          } else {
            setError("No se han registrado asistencias.");
          }
        } else {
          setError(data.error || "Hubo un error al obtener las asistencias.");
        }
      } catch (error) {
        setError("Error de conexión con el servidor.");
      } finally {
        setLoading(false);
      }
    };

    obtenerAsistencias();
  }, []);

  return (
    <div>
      <h2>Historial de Asistencias</h2>

      {loading && <p>Cargando asistencias...</p>}
      {error && !loading && <p>{error}</p>}

      {!loading && !error && asistencias.length > 0 && (
        <table border="1" cellPadding="8" cellSpacing="0">
          <thead>
            <tr>
              <th>ID Cliente</th>
              <th>Nombre Usuario</th>
              <th>Rol</th>
              <th>Fecha y Hora</th>
            </tr>
          </thead>
          <tbody>
            {asistencias.map((asistencia) => (
              <tr key={asistencia.id}>
                <td>{asistencia.clienteId}</td>
                <td>{asistencia.Cliente?.usuario?.nombre || "Desconocido"}</td>
                <td>{asistencia.Cliente?.usuario?.rol || "No definido"}</td>
                <td>{new Date(asistencia.fechaHora).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AsistenciaTabla;
