import React, { useState, useEffect } from "react";
import usuariosData from "../../data/usuarios.js";
import administrador from "../../assets/img/administrador.png";

export default function Perfil_Admin() {
  const adminOriginal = usuariosData.find((u) => u.rol === "admin");

  const [admin, setAdmin] = useState(adminOriginal);
  const [editando, setEditando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const mostrarMensaje = (texto, tipo = "success") => {
    setMensaje({ texto, tipo });
    setTimeout(() => setMensaje(""), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin({ ...admin, [name]: value });
  };

  const guardarCambios = (e) => {
    e.preventDefault();
    setEditando(false);
    mostrarMensaje("💾 Perfil actualizado correctamente.");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="seccion seccion-clara fade-in">
      <div className="panel-admin tarjeta-compra">
        <h2>👤 Perfil del Administrador</h2>
        <p>Administra tu información personal y de contacto.</p>

        {mensaje && (
          <div
            className={`alert alert-${
              mensaje.tipo === "warning" ? "warning" : "success"
            } text-center`}
          >
            {mensaje.texto}
          </div>
        )}

        {!editando ? (
          <>
            <div className="text-center mb-3">
<img src={administrador} alt="Admin del año" />
            </div>

            <ul className="perfil-lista">
              <li><strong>Nombre:</strong> {admin.nombre}</li>
              <li><strong>Correo:</strong> {admin.email}</li>
              <li><strong>Teléfono:</strong> {admin.telefono}</li>
              <li><strong>Dirección:</strong> {admin.direccion}</li>
            </ul>

            <div className="text-center mt-3">
              <button className="btn btn-success" onClick={() => setEditando(true)}>
                ✏️ Editar perfil
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={guardarCambios} className="fade-in">
            <div className="formulario-grid">
              <input
                type="text"
                name="nombre"
                value={admin.nombre}
                onChange={handleChange}
                placeholder="Nombre"
              />
              <input
                type="email"
                name="email"
                value={admin.email}
                onChange={handleChange}
                placeholder="Correo"
              />
              <input
                type="text"
                name="telefono"
                value={admin.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
              />
              <input
                type="text"
                name="direccion"
                value={admin.direccion}
                onChange={handleChange}
                placeholder="Dirección"
              />
            </div>

            <div className="resumen-total">
              <button type="submit" className="btn btn-success">
                💾 Guardar cambios
              </button>
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={() => setEditando(false)}
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
