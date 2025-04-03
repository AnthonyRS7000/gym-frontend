import React, { useState } from 'react';

const AsistenciaForm = () => {
  const [clienteId, setClienteId] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/asistencia/registrar-asistencia', {
        method: 'POST',
        body: JSON.stringify({ clienteId: Number(clienteId) }), // Convertir a número por si acaso
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (response.ok) {
        setMensaje("Asistencia registrada correctamente.");
      } else {
        setMensaje(data.message);
      }
    } catch (error) {
      setMensaje("Hubo un error al registrar la asistencia.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={clienteId}
        onChange={(e) => setClienteId(e.target.value)}
        placeholder="Ingresa tu ID de cliente"
        required
      />
      <button type="submit">Registrar Asistencia</button>
      {mensaje && <p>{mensaje}</p>}
    </form>
  );
};

export default AsistenciaForm;
