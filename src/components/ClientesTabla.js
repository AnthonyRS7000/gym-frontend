import { useState } from "react";

const ClientesTabla = () => {
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [clientesFiltrados, setClientesFiltrados] = useState([]);
  const [buscando, setBuscando] = useState(false);

  const handleBuscar = async () => {
    setBuscando(true);
    try {
      const res = await fetch("http://localhost:5000/api/clientes");
      const data = await res.json();

      console.log("Clientes desde backend:", data); // para revisar la estructura real de los datos

      const filtrados = data.filter((cliente) => {
        // Ahora accedes correctamente al dni directamente en cliente
        const nombreCliente = cliente?.usuario?.nombre?.toLowerCase().trim() || "";
        const dniCliente = cliente?.dni?.trim() || ""; // Cambiado para acceder correctamente al dni

        // Realiza los filtros
        const coincideNombre =
          nombre.trim() === "" || nombreCliente.includes(nombre.toLowerCase().trim());
        const coincideDni =
          dni.trim() === "" || dniCliente.includes(dni.trim());

        return coincideNombre && coincideDni; // Filtra por ambos campos
      });

      setClientesFiltrados(filtrados); // Establece los clientes filtrados
    } catch (error) {
      console.error("❌ Error al buscar clientes:", error);
    } finally {
      setBuscando(false); // Cambia el estado de 'buscando' a false
    }
  };

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h1 className="text-titles">Buscar <small>Clientes</small></h1>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleBuscar();
        }}
        style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "20px" }}
      >
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          {buscando ? "Buscando..." : "Buscar"}
        </button>
      </form>

      {clientesFiltrados.length > 0 ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>DNI</th>
              <th>Membresía</th>
              <th>Fecha de Inicio</th>
              <th>Fecha de Fin</th>
            </tr>
          </thead>
          <tbody>
            {clientesFiltrados.map((cliente, i) => (
              <tr key={i}>
                <td>{cliente.usuario?.nombre || "-"}</td>
                <td>{cliente.dni || "-"}</td> {/* DNI accedido directamente desde cliente */}
                <td>{cliente.tipoMembresia?.nombre || "-"}</td>
                <td>{cliente.fecha_inicio || "-"}</td>
                <td>{cliente.fecha_fin || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !buscando && (
          <p style={{ marginTop: "10px", fontStyle: "italic" }}>
            No se encontraron clientes.
          </p>
        )
      )}
    </div>
  );
};

export default ClientesTabla;
