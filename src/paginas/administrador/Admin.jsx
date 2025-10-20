import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin.jsx";
import Footer from "../../components/Footer.jsx";
import Home_Admin from "./Home_Admin.jsx";
import Productos_Admin from "./Productos_Admin.jsx";
import Categorias_Admin from "./Categorias_Admin.jsx";
import Usuarios_Admin from "./Usuarios_Admin.jsx";
import Reportes_Admin from "./Reportes_Admin.jsx";
import Boletas from "./Boletas.jsx";
import Perfil_Admin from "./Perfil_Admin.jsx";

export default function Admin() {
  return (
    <>
      <NavbarAdmin />

      <section className="seccion seccion-clara">
        <div className="panel-admin">
          
          <p>
            Desde aquí puedes gestionar productos, usuarios, boletas, reportes y más.
          </p>

          <Routes>
            <Route path="home" element={<Home_Admin />} />
            <Route path="productos" element={<Productos_Admin />} />
            <Route path="categorias" element={<Categorias_Admin />} />
            <Route path="usuarios" element={<Usuarios_Admin />} />
            <Route path="boletas" element={<Boletas />} />
            <Route path="reportes" element={<Reportes_Admin />} />
            <Route path="perfil" element={<Perfil_Admin />} />
            <Route index element={<Home_Admin />} /> {/* Página por defecto */}
          </Routes>
        </div>
      </section>

    </>
  );
}
