import { useEffect, useState } from "react";

const Header = () => {
    const [nombre, setNombre] = useState("");

    useEffect(() => {
        // Verificamos si hay un nombre guardado en localStorage
        const nombreGuardado = localStorage.getItem("nombre");

        if (nombreGuardado) {
            setNombre(nombreGuardado);  // Si hay un nombre guardado, lo mostramos
        }
    }, []);  // El useEffect se ejecuta solo una vez al montar el componente

    const cerrarSesion = () => {
        localStorage.clear();  // Limpiar el localStorage
        window.location.href = "/login";  // Redirigir al login
    };

    return (
        <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#f0f0f0" }}>
            <h3>🏋️‍♂️ GYM System</h3>
            {nombre ? (
                <div>
                    👋 Bienvenido, <strong>{nombre}</strong>
                    <button style={{ marginLeft: "1rem" }} onClick={cerrarSesion}>Cerrar sesión</button>
                </div>
            ) : (
                <span>No has iniciado sesión</span>
            )}
        </header>
    );
};

export default Header;
