import React, { useState, useEffect } from "react";
import Footer from "../components/Footer.jsx";
import productosData from "../data/productos.js";

export default function Productos({ productos: productosExternos }) {
  const [productos, setProductos] = useState(productosExternos || []);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    if (!productosExternos) {
      setProductos(productosData);
    }
  }, [productosExternos]);

  useEffect(() => {
    const guardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(guardado);
  }, []);

  const agregarAlCarrito = (producto) => {
    const existente = carrito.find((p) => p.id === producto.id);
    let nuevoCarrito;

    if (existente) {
      nuevoCarrito = carrito.map((p) =>
        p.id === producto.id ? { ...p, cantidad: (p.cantidad || 1) + 1 } : p
      );
    } else {
      nuevoCarrito = [...carrito, { ...producto, cantidad: 1 }];
    }

    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    alert(`🛒 ${producto.nombre} agregado al carrito.`);
  };

  return (
    <>
      <div className="container my-4">
        <h1 className="text-center text-success mb-4">
          Nuestros Productos 💊
        </h1>

        {productos.length === 0 ? (
          <p className="text-center text-muted">
            No hay productos disponibles.
          </p>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {productos.map((p) => (
              <div className="col" key={p.id}>
                <div className="card h-100 text-center shadow-sm border-0">
                  <img
                    src={p.imagen}
                    className="card-img-top mx-auto"
                    alt={p.nombre}
                    style={{ maxWidth: "220px", height: "auto" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{p.nombre}</h5>
                    <p className="card-text">{p.descripcion}</p>
                    <p className="fw-bold text-success">
                      💵 ${p.precio.toLocaleString("es-CL")}
                    </p>
                    <button
                      className="btn btn-success"
                      onClick={() => agregarAlCarrito(p)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        
        <p className="text-danger d-none">Error de datos</p>
      </div>
    </>
  );
}
