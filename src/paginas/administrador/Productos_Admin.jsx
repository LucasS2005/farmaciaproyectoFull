import React, { useState } from "react";
import productosData from "../../data/productos.js";

export default function Productos_Admin() {
  const [productos, setProductos] = useState(productosData);
  const [nuevo, setNuevo] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    imagen: "",
  });
  const [editando, setEditando] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const mostrarMensaje = (texto, tipo = "success") => {
    setMensaje({ texto, tipo });
    setTimeout(() => setMensaje(""), 2500);
  };

  const agregarProducto = (e) => {
    e.preventDefault();
    if (!nuevo.nombre || !nuevo.descripcion || !nuevo.precio) {
      mostrarMensaje("⚠️ Completa todos los campos.", "warning");
      return;
    }

    const nuevoItem = {
      id: productos.length + 1,
      nombre: nuevo.nombre,
      descripcion: nuevo.descripcion,
      precio: Number(nuevo.precio),
      imagen: nuevo.imagen || "/assets/img/default.png",
    };

    setProductos([...productos, nuevoItem]);
    setNuevo({ nombre: "", descripcion: "", precio: "", imagen: "" });
    mostrarMensaje("✅ Producto agregado con éxito");
  };

  const eliminarProducto = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este producto?")) {
      setProductos(productos.filter((p) => p.id !== id));
      mostrarMensaje("🗑️ Producto eliminado.");
    }
  };

  const editarProducto = (producto) => {
    setEditando(producto);
    setNuevo({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      precio: producto.precio,
      imagen: producto.imagen,
    });
  };

  const guardarEdicion = (e) => {
    e.preventDefault();
    setProductos(
      productos.map((p) =>
        p.id === editando.id ? { ...p, ...nuevo, precio: Number(nuevo.precio) } : p
      )
    );
    setEditando(null);
    setNuevo({ nombre: "", descripcion: "", precio: "", imagen: "" });
    mostrarMensaje("💾 Producto actualizado con éxito");
  };

  const cancelarEdicion = () => {
    setEditando(null);
    setNuevo({ nombre: "", descripcion: "", precio: "", imagen: "" });
  };

  return (
    <section className="seccion seccion-clara fade-in">
      <div className="panel-admin">
        <h2>💊 Gestión de Productos</h2>
        <p>Administra el catálogo de productos disponibles en la farmacia.</p>

        {mensaje && (
          <div
            className={`alert alert-${
              mensaje.tipo === "warning" ? "warning" : "success"
            } text-center`}
          >
            {mensaje.texto}
          </div>
        )}

        <div className="tarjeta-compra">
          <h4>{editando ? "✏️ Editar producto" : "➕ Agregar nuevo producto"}</h4>
          <form
            className="formulario-grid"
            onSubmit={editando ? guardarEdicion : agregarProducto}
          >
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={nuevo.nombre}
              onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })}
            />
            <input
              type="text"
              name="descripcion"
              placeholder="Descripción"
              value={nuevo.descripcion}
              onChange={(e) =>
                setNuevo({ ...nuevo, descripcion: e.target.value })
              }
            />
            <input
              type="number"
              name="precio"
              placeholder="Precio"
              value={nuevo.precio}
              onChange={(e) => setNuevo({ ...nuevo, precio: e.target.value })}
            />
            <input
              type="text"
              name="imagen"
              placeholder="URL de imagen (opcional)"
              value={nuevo.imagen}
              onChange={(e) => setNuevo({ ...nuevo, imagen: e.target.value })}
            />

            <button type="submit" className="btn btn-success">
              {editando ? "💾 Guardar" : "Agregar"}
            </button>
          </form>

          {editando && (
            <div className="volver-carrito">
              <button className="btn btn-outline-success" onClick={cancelarEdicion}>
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
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((p) => (
                <tr key={p.id} className="fila-hover">
                  <td>{p.id}</td>
                  <td>
                    <img
                      src={p.imagen}
                      alt={p.nombre}
                      className="imagen-producto"
                    />
                  </td>
                  <td>{p.nombre}</td>
                  <td>{p.descripcion}</td>
                  <td>${p.precio.toLocaleString("es-CL")}</td>
                  <td>
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => editarProducto(p)}
                    >
                      ✏️
                    </button>
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => eliminarProducto(p.id)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {productos.length === 0 && (
            <p className="texto-vacio">No hay productos registrados.</p>
          )}
        </div>
        <p className="text-danger d-none">Error del sistema</p>
      </div>
    </section>
  );
}
