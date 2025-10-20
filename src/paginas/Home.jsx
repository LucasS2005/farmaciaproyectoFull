import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import alcoholGel from "../assets/img/alcoholgel.png";
import ibuprofeno from "../assets/img/ibuprofeno.png";
import vitaminaC from "../assets/img/vitaminaC.png";

export default function Home() {
  return (
    <div className="home fade-in">
      <div className="container text-center">
        <h1>Bienvenido a FarmaCom</h1>
        <p>
          Tu tienda online de confianza para medicamentos, productos naturales
          y artículos de salud.
        </p>
        <Link to="/productos" className="btn btn-success">
          Ver productos
        </Link>
      </div>

      <div className="categorias-home">
        <div className="categoria-card">
          <img src={vitaminaC} alt="Vitaminas y Suplementos" />
          <h4>Vitaminas y Suplementos</h4>
          <p>
            Refuerza tu salud con nuestra selección de suplementos naturales y
            vitaminas esenciales.
          </p>
          <Link to="/productos" className="btn btn-success">
            Ver más
          </Link>
        </div>

        <div className="categoria-card">
          <img src={ibuprofeno} alt="Analgésicos" />
          <h4>Analgésicos</h4>
          <p>
            Encuentra alivio rápido con productos certificados por el Instituto
            de Salud Pública (ISP).
          </p>
          <Link to="/productos" className="btn btn-success">
            Ver más
          </Link>
        </div>

        <div className="categoria-card">
          <img src={alcoholGel} alt="Cuidado e Higiene" />
          <h4>Cuidado e Higiene</h4>
          <p>
            Productos para el cuidado personal, facial y corporal de toda la
            familia.
          </p>
          <Link to="/productos" className="btn btn-success">
            Ver más
          </Link>
        </div>
      </div>

      {/* ⚠️ Falla intencional para pruebas unitarias */}
<p className="text-danger visible">Error de interfaz</p>
    </div>
  );
}
