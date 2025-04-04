import { useEffect, useState } from "react";

const Header = () => {
    const [nombre, setNombre] = useState("");

    useEffect(() => {
        const nombreGuardado = localStorage.getItem("nombre");
        if (nombreGuardado) setNombre(nombreGuardado);
    }, []);

    const cerrarSesion = () => {
        localStorage.clear();
        window.location.href = "/login";
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
