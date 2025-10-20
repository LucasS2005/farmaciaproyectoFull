import React, { useState } from "react";

export default function Categorias_Admin() {
  const [categorias, setCategorias] = useState([
    { id: 1, nombre: "Medicamentos", descripcion: "Fármacos con y sin receta médica." },
    { id: 2, nombre: "Vitaminas y Suplementos", descripcion: "Complementos nutricionales para la salud." },
    { id: 3, nombre: "Higiene y Cuidado", descripcion: "Artículos para la limpieza y cuidado personal." },
  ]);

  const [nueva, setNueva] = useState({ nombre: "", descripcion: "" });
  const [editando, setEditando] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const mostrarMensaje = (texto, tipo = "success") => {
    setMensaje({ texto, tipo });
    setTimeout(() => setMensaje(""), 2500);
  };

  const agregarCategoria = (e) => {
    e.preventDefault();
    if (!nueva.nombre || !nueva.descripcion) {
      mostrarMensaje("⚠️ Completa todos los campos.", "warning");
      return;
    }
    const nuevaCat = {
      id: categorias.length + 1,
      nombre: nueva.nombre,
      descripcion: nueva.descripcion,
    };
    setCategorias([...categorias, nuevaCat]);
    setNueva({ nombre: "", descripcion: "" });
    mostrarMensaje("✅ Categoría agregada con éxito");
  };

  const eliminarCategoria = (id) => {
    if (window.confirm("¿Eliminar esta categoría?")) {
      setCategorias(categorias.filter((c) => c.id !== id));
      mostrarMensaje("🗑️ Categoría eliminada.");
    }
  };

  const editarCategoria = (categoria) => {
    setEditando(categoria);
    setNueva({ nombre: categoria.nombre, descripcion: categoria.descripcion });
  };

  const guardarEdicion = (e) => {
    e.preventDefault();
    setCategorias(
      categorias.map((c) =>
        c.id === editando.id ? { ...c, ...nueva } : c
      )
    );
    setEditando(null);
    setNueva({ nombre: "", descripcion: "" });
    mostrarMensaje("💾 Categoría actualizada con éxito");
  };

  const cancelar = () => {
    setEditando(null);
    setNueva({ nombre: "", descripcion: "" });
  };

  return (
    <section className="seccion seccion-clara fade-in">
      <div className="panel-admin">
        <h2>📂 Gestión de Categorías</h2>
        <p>Administra las categorías de productos que aparecen en la tienda.</p>

        {mensaje && (
          <div className={`tarjeta ${mensaje.tipo === "warning" ? "seccion-gris" : ""}`}>
            <p>{mensaje.texto}</p>
          </div>
        )}

        <div className="tarjeta">
          <h4>{editando ? "✏️ Editar categoría" : "➕ Agregar nueva categoría"}</h4>
          <form onSubmit={editando ? guardarEdicion : agregarCategoria} className="formulario-grid">
            <input
              type="text"
              placeholder="Nombre"
              value={nueva.nombre}
              onChange={(e) => setNueva({ ...nueva, nombre: e.target.value })}
            />
            <input
              type="text"
              placeholder="Descripción"
              value={nueva.descripcion}
              onChange={(e) => setNueva({ ...nueva, descripcion: e.target.value })}
            />
            <button type="submit" className="btn btn-success">
              {editando ? "💾 Guardar" : "Agregar"}
            </button>
          </form>

          {editando && (
            <div className="volver-carrito">
              <button className="btn btn-outline-success" onClick={cancelar}>
                Cancelar
              </button>
            </div>
          )}
        </div>

        <div className="tabla">
          <table className="tabla-estilo">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {categorias.map((c) => (
                <tr key={c.id} className="fila-hover">
                  <td>{c.id}</td>
                  <td>{c.nombre}</td>
                  <td>{c.descripcion}</td>
                  <td>
                    <button className="btn btn-outline-success btn-sm" onClick={() => editarCategoria(c)}>
                      ✏️
                    </button>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => eliminarCategoria(c.id)}>
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {categorias.length === 0 && (
            <p className="texto-vacio">No hay categorías registradas.</p>
          )}
        </div>
      </div>
    </section>
  );
}
