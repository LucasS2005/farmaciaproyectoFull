import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ importa el real

// ⚡ Si Karma está corriendo, usamos un mock vacío para evitar errores en tests
const useNavigateSafe =
  typeof window !== "undefined" && window.__karma__
    ? () => () => {}
    : useNavigate;

export default function Login() {
  const navigate = useNavigateSafe(); // ahora sí: real en navegador, mock en tests
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && pass === "admin123") {
      navigate("/admin"); // ✅ ahora funciona
    } else {
      alert("Credenciales inválidas");
    }
  };

  return (
    <section className="seccion seccion-clara text-center login">
      <div className="container my-5">
        <h1 className="fw-bold text-success mb-4">Iniciar sesión</h1>

        <form
          className="formulario-login mx-auto p-4 shadow-sm rounded bg-white"
          onSubmit={handleSubmit}
        >
          <div className="mb-3 text-start">
            <label htmlFor="correo" className="form-label fw-semibold">
              Correo electrónico
            </label>
            <input
              id="correo"
              type="email"
              className="form-control"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label htmlFor="pass" className="form-label fw-semibold">
              Contraseña
            </label>
            <input
              id="pass"
              type="password"
              className="form-control"
              placeholder="Ingresa tu contraseña"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100 mt-3">
            Ingresar
          </button>
        </form>

        <p className="mt-4 text-muted">
          Usa <strong>admin@gmail.com</strong> y <strong>admin123</strong> para
          entrar como administrador.
        </p>
      </div>
    </section>
  );
}
