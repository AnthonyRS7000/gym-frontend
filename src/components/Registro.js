import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Registro = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        password: "",
        confirm_password: "",
        telefono: "",
        direccion: "",
        fecha_nacimiento: "",
        genero: "masculino",  
        peso: "",
        estatura: "",
        rol: "cliente",
    });

    useEffect(() => {
        console.log("📌 Estado actualizado:", formData);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Convertir peso y estatura a número o dejar vacío si el campo está vacío
        const parsedValue = ["peso", "estatura"].includes(name)
            ? value === "" ? "" : parseFloat(value)
            : value;

        setFormData((prev) => ({ ...prev, [name]: parsedValue }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("🔍 Comparando contraseñas:", formData.password, formData.confirm_password);
        
        if (formData.password.trim() !== formData.confirm_password.trim()) {
            alert("Las contraseñas no coinciden");
            return;
        }

        console.log("📩 Enviando datos...", formData);

        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData), // ✅ Ya no eliminamos confirm_password
            });

            const data = await response.json();
            if (!response.ok) {
                console.error("❌ Error en el registro:", data);
                alert("Error en el registro: " + (data.error || "Intenta nuevamente"));
                return;
            }

            console.log("✅ Registro exitoso", data);
            alert("Registro exitoso");
            navigate("/login");  

        } catch (error) {
            console.error("❌ Error en la solicitud:", error.message);
            alert("Error en la solicitud al servidor");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            
            <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} required />
            <input type="password" name="confirm_password" placeholder="Confirmar Contraseña" value={formData.confirm_password} onChange={handleChange} required />
            
            <input type="text" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} required />
            <input type="text" name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} required />
            <input type="date" name="fecha_nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} required />

            <select name="genero" value={formData.genero} onChange={handleChange} required>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
            </select>

            <input type="number" name="peso" placeholder="Peso (kg)" value={formData.peso} onChange={handleChange} />
            <input type="number" name="estatura" placeholder="Estatura (cm)" value={formData.estatura} onChange={handleChange} />

            <button type="submit">Registrarse</button>
        </form>
    );
};

export default Registro;
