import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import "../style.css";

export default function Finalizar_Compra() {
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [datos, setDatos] = useState({
    nombre: "",
    direccion: "",
    metodoPago: "",
  });


  useEffect(() => {
    const guardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(guardado);
    calcularTotal(guardado);
  }, []);

  useEffect(() => {
    const actualizar = () => {
      const guardado = JSON.parse(localStorage.getItem("carrito")) || [];
      setCarrito(guardado);
      calcularTotal(guardado);
    };
    window.addEventListener("storage", actualizar);
    return () => window.removeEventListener("storage", actualizar);
  }, []);

 
  const calcularTotal = (carritoActual) => {
    const totalCalc = carritoActual.reduce(
      (acc, item) => acc + (item.precio * (item.cantidad || 1)),
      0
    );
    setTotal(totalCalc);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!datos.nombre || !datos.direccion || !datos.metodoPago) {
      alert("Completa todos los campos antes de continuar.");
      return;
    }

    if (carrito.length === 0) {
      alert("Tu carrito está vacío. Agrega productos antes de comprar.");
      navigate("/productos");
      return;
    }


    localStorage.removeItem("carrito");
    setCarrito([]);
    alert(`Gracias por tu compra, ${datos.nombre}. Tu pedido ha sido procesado.`);
    navigate("/compra-exito", { state: { nombre: datos.nombre, total } });
  };

  return (
    <>
      <div className="seccion seccion-clara finalizar-compra">
        <div className="container">
          <h1 className="titulo-principal">Finalizar Compra</h1>
          <p className="texto-descriptivo">
            Completa tus datos y confirma tu pedido para finalizar la compra.
          </p>

          <div className="tarjeta-compra">
            <form onSubmit={handleSubmit} className="formulario-compra">
              <div className="formulario-grid">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre completo"
                  value={datos.nombre}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="direccion"
                  placeholder="Dirección de entrega"
                  value={datos.direccion}
                  onChange={handleChange}
                  required
                />
                <select
                  name="metodoPago"
                  value={datos.metodoPago}
                  onChange={handleChange}
                  required
                >
                  <option value="">Seleccionar método de pago...</option>
                  <option value="tarjeta">Tarjeta de crédito / débito</option>
                  <option value="transferencia">Transferencia bancaria</option>
                  <option value="efectivo">Pago en efectivo</option>
                </select>
              </div>

              <hr className="separador" />

              <h4 className="subtitulo">Resumen de tu pedido:</h4>
              {carrito.length === 0 ? (
                <p className="texto-vacio">No hay productos en el carrito.</p>
              ) : (
                <ul className="resumen-lista">
                  {carrito.map((item) => (
                    <li key={item.id} className="resumen-item">
                      <span className="nombre-item">
                        {item.nombre} <strong>x{item.cantidad || 1}</strong>
                      </span>
                      <span className="precio-item">
                        ${ (item.precio * (item.cantidad || 1)).toLocaleString("es-CL") }
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="resumen-total">
                <h4>Total: ${total.toLocaleString("es-CL")}</h4>
                <button type="submit" className="btn btn-success">
                  Confirmar compra
                </button>
              </div>
            </form>

            <div className="volver-carrito">
              <Link to="/carrito" className="btn btn-outline-success">
                ← Volver al carrito
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
