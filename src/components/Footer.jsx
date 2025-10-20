import React from "react";

export default function Footer() {
  return (
    <footer className="footer text-center text-white py-4 bg-success shadow-lg">
      <div className="container">
        <h5 className="fw-bold mb-3">FarmaCom 💊</h5>

        <p className="mb-1">
           <strong>Dirección:</strong> Antonio Varas 666, Providencia, Santiago, Chile
        </p>
        <p className="mb-1">
           <strong>Teléfono:</strong> +56 9 8765 4321
        </p>
        <p className="mb-1">
           <strong>Correo:</strong> contacto@farmacom.cl
        </p>
        <p className="mb-3">
           <strong>Horario:</strong> Lunes a Viernes de 9:00 a 20:00 hrs — Sábado de 9:00 a 140:00 hrs
        </p>

        <hr className="opacity-50" />
        <p className="mb-0">
          © 2077 <strong>FarmaCom</strong> — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
