import React from "react";
import Footer from "../components/Footer.jsx";
import "../style.css";

export default function S_Nosotros() {
  return (
    <div className="seccion seccion-clara text-center">
      <div className="container">
        <h1 className="fw-bold mb-4 text-success">Sobre Nosotros</h1>
        <p className="lead text-muted">
          En <strong>FarmaCom</strong> ofrecemos productos farmacéuticos y de bienestar
          con la mejor atención, seguridad y confianza para nuestros clientes.
        </p>

        <div className="grid-tarjetas">
          <div className="tarjeta">
            <h4 className="text-success">Nuestra Misión</h4>
            <p>
              Brindar acceso fácil y rápido a medicamentos y productos de salud,
              priorizando la calidad, el servicio y el bienestar de cada persona.
            </p>
          </div>

          <div className="tarjeta">
            <h4 className="text-success">Nuestra Visión</h4>
            <p>
              Ser una farmacia digital líder en innovación, servicio humano y
              responsabilidad con la comunidad y el medio ambiente.
            </p>
          </div>

          <div className="tarjeta">
            <h4 className="text-success">Nuestros Valores</h4>
            <p>
              Compromiso, empatía, ética profesional y confianza en cada
              servicio que ofrecemos a nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
