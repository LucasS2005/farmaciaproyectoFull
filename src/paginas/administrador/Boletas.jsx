import React, { useState } from "react";
import boletasData from "../../data/boleta.js";

export default function Boletas() {
  const [boletas, setBoletas] = useState(boletasData);
  const [boletaSeleccionada, setBoletaSeleccionada] = useState(null);

  const eliminarBoleta = (id) => {
    if (window.confirm("¿Seguro que deseas eliminar esta boleta?")) {
      setBoletas(boletas.filter((b) => b.id !== id));
    }
  };

  const verDetalle = (boleta) => {
    setBoletaSeleccionada(boleta);
    document.body.classList.add("no-scroll");
  };

  const cerrarDetalle = () => {
    setBoletaSeleccionada(null);
    document.body.classList.remove("no-scroll");
  };

  return (
    <section className="seccion seccion-clara fade-in">
      <div className="panel-admin">
        <h2>🧾 Boletas registradas</h2>
        <p>Revisa el historial completo de órdenes generadas en la farmacia.</p>

        <div className="tabla">
          <table className="tabla-estilo">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Método de pago</th>
                <th>Estado</th>
                <th>Total</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {boletas.map((b) => (
                <tr key={b.id} className="fila-hover">
                  <td>{b.id}</td>
                  <td>{b.cliente}</td>
                  <td>{b.fecha}</td>
                  <td>{b.metodoPago}</td>
                  <td>
                    <span
                      className={
                        b.estado === "Completada"
                          ? "estado-exito"
                          : b.estado === "Pendiente"
                          ? "estado-pendiente"
                          : "estado-info"
                      }
                    >
                      {b.estado}
                    </span>
                  </td>
                  <td>${b.total.toLocaleString("es-CL")}</td>
                  <td>
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => verDetalle(b)}
                    >
                      👁 Ver
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => eliminarBoleta(b.id)}
                    >
                      🗑 Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {boletas.length === 0 && (
            <p className="texto-vacio">No hay boletas registradas.</p>
          )}
        </div>

        {boletaSeleccionada && (
          <div className="modal-overlay">
            <div className="modal-contenido tarjeta-compra">
              <div className="modal-header">
                <h3>Detalle Boleta #{boletaSeleccionada.id}</h3>
                <button className="cerrar-modal" onClick={cerrarDetalle}>
                  ✖
                </button>
              </div>

              <div className="modal-body">
                <p>
                  <strong>Cliente:</strong> {boletaSeleccionada.cliente} <br />
                  <strong>Fecha:</strong> {boletaSeleccionada.fecha} <br />
                  <strong>Método de pago:</strong>{" "}
                  {boletaSeleccionada.metodoPago} <br />
                  <strong>Estado:</strong> {boletaSeleccionada.estado}
                </p>

                <h4 className="subtitulo">Productos</h4>
                <table className="tabla-estilo">
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th>Precio</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {boletaSeleccionada.productos.map((p, i) => (
                      <tr key={i}>
                        <td>{p.nombre}</td>
                        <td>{p.cantidad}</td>
                        <td>${p.precio.toLocaleString("es-CL")}</td>
                        <td>
                          ${(p.cantidad * p.precio).toLocaleString("es-CL")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h4 className="precio texto-derecha">
                  Total: ${boletaSeleccionada.total.toLocaleString("es-CL")}
                </h4>
              </div>

              <div className="modal-footer">
                <button className="btn btn-success" onClick={cerrarDetalle}>
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
