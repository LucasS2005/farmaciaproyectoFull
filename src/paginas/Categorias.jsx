import React, { useState, useEffect } from "react";

export default function Categorias({ productos }) {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [categoriaSeleccionada]);

  
  const categorias = ["todos", ...new Set(productos.map((p) => p.categoria))];

  
  const productosFiltrados =
    categoriaSeleccionada === "todos"
      ? productos
      : productos.filter((p) => p.categoria === categoriaSeleccionada);

  return (
    <div className="container my-5">
      <h2 className="text-center text-success mb-4">Categorías de Productos 💊</h2>

     
      <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
        {categorias.map((cat) => (
          <button
            key={cat}
            type="button" 
            className={`btn ${
              categoriaSeleccionada === cat
                ? "btn-success"
                : "btn-outline-success"
            }`}
            onClick={(e) => {
              e.preventDefault(); 
              setCategoriaSeleccionada(cat);
            }}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productosFiltrados.map((p) => (
          <div className="col" key={p.id}>
            <div className="card h-100 text-center shadow-sm">
              <img
                src={p.imagen}
                className="card-img-top"
                alt={p.nombre}
                style={{
                  height: "200px",
                  objectFit: "contain",
                  padding: "10px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{p.nombre}</h5>
                <p className="text-muted">{p.descripcion}</p>
                <p className="fw-bold text-success fs-5"> ${p.precio}</p>
              </div>
            </div>
          </div>
        ))}

        {productosFiltrados.length === 0 && (
          <div className="text-center py-5">
            <h5 className="text-muted">
              No hay productos disponibles en esta categoría.
            </h5>
          </div>
        )}
      </div>
    </div>
  );
}
