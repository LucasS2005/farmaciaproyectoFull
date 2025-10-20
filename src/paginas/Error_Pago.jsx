import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import "../style.css";

export default function Error_Pago() {
  return (
    <div className="seccion seccion-clara">
      <div className="contenedor">
        <div className="tarjeta tarjeta-error">
          <div className="icono-error">
            <i className="bi bi-x-circle-fill"></i>
          </div>

          <h1>Error en el Pago </h1>

          <p>
            Hubo un problema al procesar tu pago.  
            Puede que tu conexión haya fallado o los datos de tu método de pago sean incorrectos.
          </p>

          <hr />

          <p>
            Te recomendamos intentar nuevamente o elegir otro método de pago.
          </p>

          <div className="acciones">
            <Link to="/checkout" className="btn btn-outline-danger">
              Reintentar pago
            </Link>
            <Link to="/" className="btn btn-success">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}