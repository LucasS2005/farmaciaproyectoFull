import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./paginas/Home.jsx";
import Productos from "./paginas/Productos.jsx";
import Carrito from "./paginas/Carrito.jsx";
import Categorias from "./paginas/Categorias.jsx";
import S_Nosotros from "./paginas/S_Nosotros.jsx";
import Login from "./paginas/Login.jsx";
import Compra_Exito from "./paginas/Compra_Exito.jsx";
import Finalizar_Compra from "./paginas/Finalizar_Compra.jsx";
import Error_Pago from "./paginas/Error_Pago.jsx";
import Admin from "./paginas/administrador/Admin.jsx";
import productosData from "./data/productos.js";

export default function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <Router>
      <div id="root-layout">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/productos"
              element={
                <Productos
                  productos={productosData}
                  agregarAlCarrito={agregarAlCarrito}
                />
              }
            />
            <Route
              path="/carrito"
              element={<Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />}
            />
            <Route
              path="/categorias"
              element={<Categorias productos={productosData} />}
            />
            <Route path="/nosotros" element={<S_Nosotros />} />
            <Route path="/login" element={<Login />} />
            <Route path="/compra-exito" element={<Compra_Exito />} />
            <Route path="/finalizar-compra" element={<Finalizar_Compra />} />
            <Route path="/error-pago" element={<Error_Pago />} />
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
