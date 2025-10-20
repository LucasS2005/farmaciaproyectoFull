import React from "react";
import ReactDOM from "react-dom/client";
import Productos from "../src/paginas/Productos.jsx";
import productosData from "../src/data/productos.js";

describe(" Pruebas unitarias de <Productos />", () => {
  let div;
  beforeEach(() => {
    div = document.createElement("div");
    document.body.appendChild(div);
  });
  afterEach(() => document.body.removeChild(div));

  it("Renderiza el título principal 'Nuestros Productos'", (done) => {
    ReactDOM.createRoot(div).render(<Productos productos={productosData} />);
    setTimeout(() => {
      expect(div.textContent).toContain("Nuestros Productos");
      done();
    }, 50);
  });

  it(" Muestra los nombres de los productos del catálogo", (done) => {
    ReactDOM.createRoot(div).render(<Productos productos={productosData} />);
    setTimeout(() => {
      productosData.forEach((p) => expect(div.textContent).toContain(p.nombre));
      done();
    }, 50);
  });

  it("Contiene botones con la palabra 'Agregar al carrito'", (done) => {
    ReactDOM.createRoot(div).render(<Productos productos={productosData} />);
    setTimeout(() => {
      expect(div.textContent).toMatch(/Agregar al carrito/i);
      done();
    }, 50);
  });

  it("No debería mostrar productos inexistentes", (done) => {
    ReactDOM.createRoot(div).render(<Productos productos={productosData} />);
    setTimeout(() => {
      expect(div.textContent).not.toContain("Producto Fantasma");
      done();
    }, 50);
  });
});
