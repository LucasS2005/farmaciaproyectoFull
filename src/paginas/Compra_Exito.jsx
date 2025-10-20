import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import "../style.css";

export default function Compra_Exito() {
  return (
    <div className="seccion seccion-clara">
      <div className="contenedor">
        <div className="tarjeta tarjeta-exito">
          <div className="icono-exito">
            <i className="bi bi-check-circle-fill"></i>
          </div>

          <h1>¡Compra Exitosa!</h1>

          <p>
            Tu pedido ha sido procesado con éxito.  
            Pronto recibirás un correo de confirmación con los detalles de tu compra.
          </p>

          <hr />

          <p>
            Gracias por confiar en <strong>FarmaCom</strong>.
          </p>

          <div className="acciones">
            <Link to="/" className="btn btn-success">
              Volver al inicio
            </Link>
            <Link to="/productos" className="btn btn-outline-success">
              Seguir comprando
            </Link>
          </div>
        </div>
      </div>

      
    </div>
  );
}