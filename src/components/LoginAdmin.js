// src/components/LoginAdmin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/auth/login-admin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.error || "Error en inicio de sesión");
                return;
            }

            // Verificar si 'usuario' está definido
            if (!data.usuario || !data.usuario.rol) {
                alert("Error: Rol de usuario no encontrado.");
                return;
            }

            // Validar que sea administrador
            if (data.usuario.rol !== "administrador") {
                alert("Acceso denegado. No eres administrador.");
                return;
            }

            // Guardar token y nombre en localStorage
            localStorage.setItem("token", data.token);
            localStorage.setItem("nombre", data.usuario.nombre);  // Guardar el nombre

            // Redirigir al navbar exclusivo
            navigate("/admin");

        } catch (error) {
            console.error("Error en login:", error);
            alert("Error en el servidor");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login Administrador</h2>
            <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Ingresar</button>
        </form>
    );
};

export default LoginAdmin;
