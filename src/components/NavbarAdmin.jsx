import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarAdmin() {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    localStorage.removeItem("rol");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm">
      <div className="container-fluid">
        {/* Logo / Marca */}
        <Link className="navbar-brand fw-bold" to="/admin/home">
          🧑‍💼 Panel Admin — FarmaCom
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/admin/home">
                🏠 Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/productos">
                💊 Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/categorias">
                📂 Categorías
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/usuarios">
                👥 Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/boletas">
                🧾 Boletas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/reportes">
                📈 Reportes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/perfil">
                👤 Perfil
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-light ms-3"
                onClick={cerrarSesion}
              >
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
