import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/user/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      setUserData(res.data);
      setForm({ ...res.data, ...res.data.datosExtra });
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Enviar solo los campos editables. Si querés, lo separamos por rol.
    axios.put('http://localhost:5000/api/user/profile', form, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(() => alert('Perfil actualizado correctamente'))
    .catch(() => alert('Error al actualizar perfil'));
  };

  if (loading) return <p>Cargando perfil...</p>;
  if (!userData) return <p>Error cargando perfil.</p>;

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Mi Perfil ({userData.rol})</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input name="nombre" value={form.nombre || ''} onChange={handleChange} />

        <label>Email:</label>
        <input name="email" value={form.email || ''} disabled />

        {userData.rol === 'cliente' && (
          <>
            <label>Teléfono:</label>
            <input name="telefono" value={form.telefono || ''} onChange={handleChange} />

            <label>Dirección:</label>
            <input name="direccion" value={form.direccion || ''} onChange={handleChange} />

            <label>Fecha de nacimiento:</label>
            <input type="date" name="fecha_nacimiento" value={form.fecha_nacimiento || ''} onChange={handleChange} />

            <label>Género:</label>
            <select name="genero" value={form.genero || ''} onChange={handleChange}>
              <option value="">Seleccionar</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
            </select>

            <label>Peso (kg):</label>
            <input name="peso" value={form.peso || ''} onChange={handleChange} />

            <label>Estatura (cm):</label>
            <input name="estatura" value={form.estatura || ''} onChange={handleChange} />
          </>
        )}

        {userData.rol === 'entrenador' && (
          <>
            <label>Teléfono:</label>
            <input name="telefono" value={form.telefono || ''} onChange={handleChange} />

            <label>Especialidad:</label>
            <input name="especialidad" value={form.especialidad || ''} onChange={handleChange} />

            <label>Experiencia:</label>
            <input name="experiencia" value={form.experiencia || ''} onChange={handleChange} />
          </>
        )}

        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default UserProfile;
