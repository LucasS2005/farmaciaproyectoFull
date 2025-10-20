import React, { useEffect, useState } from "react";
import productosData from "../../data/productos.js";
import usuariosData from "../../data/usuarios.js";

export default function Reportes_Admin() {
  const [reporte, setReporte] = useState({
    totalProductos: 0,
    totalUsuarios: 0,
    usuariosActivos: 0,
    usuariosSuspendidos: 0,
    ventasTotales: 0,
    productosVendidos: 0,
  });

  useEffect(() => {
    const totalProductos = productosData.length;
    const totalUsuarios = usuariosData.length;
    const usuariosActivos = usuariosData.filter((u) => u.estado === "activo").length;
    const usuariosSuspendidos = usuariosData.filter((u) => u.estado === "suspendido").length;

    setReporte({
      totalProductos,
      totalUsuarios,
      usuariosActivos,
      usuariosSuspendidos,
      ventasTotales: 52,
      productosVendidos: 184,
    });
  }, []);

  return (
    <section className="seccion seccion-clara fade-in">
      <div className="panel-admin">
        <h2>📈 Reportes Generales</h2>
        <p>Visualiza un resumen general de la actividad de la farmacia.</p>

        <div className="grid-tarjetas">
          <div className="tarjeta">
            <h4>💊 Productos</h4>
            <p className="precio">{reporte.totalProductos}</p>
            <p>Registrados en catálogo</p>
          </div>

          <div className="tarjeta">
            <h4>👥 Usuarios</h4>
            <p className="precio">{reporte.totalUsuarios}</p>
            <p>
              {reporte.usuariosActivos} activos /{" "}
              {reporte.usuariosSuspendidos} suspendidos
            </p>
          </div>

          <div className="tarjeta">
            <h4>🧾 Ventas Totales</h4>
            <p className="precio">
              ${reporte.ventasTotales.toLocaleString("es-CL")}
            </p>
            <p>{reporte.productosVendidos} productos vendidos</p>
          </div>
        </div>

        <div className="tabla mt-5">
          <h4 className="subtitulo">📊 Detalle de Actividad Simulada</h4>
          <table className="tabla-estilo">
            <thead>
              <tr>
                <th>Indicador</th>
                <th>Valor</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Total de productos</td>
                <td>{reporte.totalProductos}</td>
                <td>Cantidad total de productos registrados.</td>
              </tr>
              <tr>
                <td>Total de usuarios</td>
                <td>{reporte.totalUsuarios}</td>
                <td>Número total de usuarios en la base de datos.</td>
              </tr>
              <tr>
                <td>Usuarios activos</td>
                <td>{reporte.usuariosActivos}</td>
                <td>Usuarios actualmente activos.</td>
              </tr>
              <tr>
                <td>Usuarios suspendidos</td>
                <td>{reporte.usuariosSuspendidos}</td>
                <td>Usuarios con acceso restringido.</td>
              </tr>
              <tr>
                <td>Ventas totales</td>
                <td>${reporte.ventasTotales.toLocaleString("es-CL")}</td>
                <td>Total de ventas simuladas en el sistema.</td>
              </tr>
              <tr>
                <td>Productos vendidos</td>
                <td>{reporte.productosVendidos}</td>
                <td>Total de productos vendidos (estimado).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
