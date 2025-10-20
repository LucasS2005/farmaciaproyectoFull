import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer.jsx";
import productos from "../../data/productos.js";

export default function Home_Admin() {
  return (
    <div className="home fade-in text-center">
      <div className="container my-5">
        <h1 className="text-success fw-bold">Panel del Administrador</h1>
        <p className="lead text-muted">
          Desde aquí puedes gestionar los productos, usuarios y el sistema de
          FarmaCom 🩺
        </p>

        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <Link to="/admin/productos" className="btn btn-outline-success btn-lg">
            Gestionar Productos
          </Link>
          <Link to="/admin/usuarios" className="btn btn-outline-primary btn-lg">
            Gestionar Usuarios
          </Link>
          <Link to="/productos" className="btn btn-outline-secondary btn-lg">
            Ver Tienda
          </Link>
        </div>
      </div>

      <section className="container my-5">
        <h3 className="text-success mb-4">Resumen de Productos</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {productos.slice(0, 3).map((p) => (
            <div className="col" key={p.id}>
              <div className="card h-100 shadow-sm border-0 text-center">
                <img
                  src={p.imagen}
                  className="card-img-top mx-auto"
                  alt={p.nombre}
                  style={{ maxWidth: "200px", height: "auto" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{p.nombre}</h5>
                  <p className="card-text text-muted">{p.descripcion}</p>
                  <p className="fw-bold text-success">
                    💵 ${p.precio.toLocaleString("es-CL")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ⚠️ Falla intencional para pruebas unitarias */}
      <p className="text-danger d-none">Error crítico</p>

      
      
    </div>
  );
}
