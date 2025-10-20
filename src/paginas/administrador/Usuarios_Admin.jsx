import React, { useState } from "react";
import usuariosData from "../../data/usuarios.js";

export default function Usuarios_Admin() {
  const [usuarios, setUsuarios] = useState(usuariosData);
  const [editando, setEditando] = useState(null);
  const [nuevo, setNuevo] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    estado: "",
  });
  const [mensaje, setMensaje] = useState("");

  const mostrarMensaje = (texto, tipo = "success") => {
    setMensaje({ texto, tipo });
    setTimeout(() => setMensaje(""), 2500);
  };

  const eliminarUsuario = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este usuario?")) {
      setUsuarios(usuarios.filter((u) => u.id !== id));
      mostrarMensaje("Usuario eliminado correctamente.");
    }
  };

  const cambiarEstado = (id) => {
    setUsuarios(
      usuarios.map((u) =>
        u.id === id
          ? { ...u, estado: u.estado === "activo" ? "suspendido" : "activo" }
          : u
      )
    );
    mostrarMensaje("Estado del usuario actualizado.");
  };

  const editarUsuario = (usuario) => {
    setEditando(usuario);
    setNuevo({
      nombre: usuario.nombre,
      email: usuario.email,
      telefono: usuario.telefono,
      direccion: usuario.direccion,
      estado: usuario.estado,
    });
  };

  const guardarEdicion = (e) => {
    e.preventDefault();
    setUsuarios(
      usuarios.map((u) =>
        u.id === editando.id ? { ...u, ...nuevo } : u
      )
    );
    setEditando(null);
    setNuevo({
      nombre: "",
      email: "",
      telefono: "",
      direccion: "",
      estado: "",
    });
    mostrarMensaje("Usuario actualizado con éxito.");
  };

  const cancelarEdicion = () => {
    setEditando(null);
    setNuevo({
      nombre: "",
      email: "",
      telefono: "",
      direccion: "",
      estado: "",
    });
  };

  return (
    <section className="seccion seccion-clara fade-in text-center">
      <div className="panel-admin container my-5">
        <h2 className="fw-bold text-success mb-3">Gestión de Usuarios</h2>
        <p className="lead text-muted">
          Administra los usuarios registrados en la plataforma.
        </p>

        {mensaje && (
          <div
            className={`alert alert-${
              mensaje.tipo === "warning" ? "warning" : "success"
            } text-center`}
          >
            {mensaje.texto}
          </div>
        )}

        {editando && (
          <div className="tarjeta-compra mb-4">
            <h4 className="text-success">Editar usuario</h4>
            <form className="formulario-grid" onSubmit={guardarEdicion}>
              <input
                type="text"
                placeholder="Nombre"
                value={nuevo.nombre}
                onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Correo"
                value={nuevo.email}
                onChange={(e) => setNuevo({ ...nuevo, email: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Teléfono"
                value={nuevo.telefono}
                onChange={(e) =>
                  setNuevo({ ...nuevo, telefono: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Dirección"
                value={nuevo.direccion}
                onChange={(e) =>
                  setNuevo({ ...nuevo, direccion: e.target.value })
                }
              />
              <select
                value={nuevo.estado}
                onChange={(e) => setNuevo({ ...nuevo, estado: e.target.value })}
              >
                <option value="">Seleccionar estado...</option>
                <option value="activo">Activo</option>
                <option value="suspendido">Suspendido</option>
              </select>

              <div className="resumen-total">
                <button type="submit" className="btn btn-success">
                  Guardar
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={cancelarEdicion}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="tabla mt-4">
          <table className="tabla-estilo table table-bordered table-striped align-middle">
            <thead className="table-success">
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Dirección</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.length > 0 ? (
                usuarios.map((u) => (
                  <tr key={u.id} className="fila-hover">
                    <td>{u.id}</td>
                    <td>{u.nombre}</td>
                    <td>{u.email}</td>
                    <td>{u.telefono}</td>
                    <td>{u.direccion}</td>
                    <td>{u.rol}</td>
                    <td>
                      <span
                        className={`estado ${
                          u.estado === "activo"
                            ? "estado-exito"
                            : "estado-pendiente"
                        }`}
                      >
                        {u.estado}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-success btn-sm me-2"
                        onClick={() => editarUsuario(u)}
                      >
                        ✏️ Editar
                      </button>
                      <button
                        className="btn btn-outline-success btn-sm me-2"
                        onClick={() => cambiarEstado(u.id)}
                      >
                        🔄 Estado
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => eliminarUsuario(u.id)}
                      >
                        🗑️ Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center text-muted">
                    No hay usuarios registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
