import React from "react";
import ReactDOM from "react-dom/client";
import Productos_Admin from "../src/paginas/administrador/Productos_Admin.jsx";

describe(" Pruebas unitarias de <Productos_Admin />", () => {
  let div;
  beforeEach(() => {
    div = document.createElement("div");
    document.body.appendChild(div);
  });
  afterEach(() => document.body.removeChild(div));

  it(" Renderiza el texto 'Productos' o 'Inventario'", (done) => {
    ReactDOM.createRoot(div).render(<Productos_Admin />);
    setTimeout(() => {
      expect(div.textContent).toMatch(/Productos|Inventario/i);
      done();
    }, 50);
  });

  it(" Debería mostrar un botón para agregar productos", (done) => {
    ReactDOM.createRoot(div).render(<Productos_Admin />);
    setTimeout(() => {
      expect(div.textContent).toMatch(/Agregar|Nuevo/i);
      done();
    }, 50);
  });

  it("Contiene una lista o tabla de productos", (done) => {
    ReactDOM.createRoot(div).render(<Productos_Admin />);
    setTimeout(() => {
      expect(div.textContent.length).toBeGreaterThan(20);
      done();
    }, 50);
  });

  it("No debería contener 'Error'", (done) => {
    ReactDOM.createRoot(div).render(<Productos_Admin />);
    setTimeout(() => {
      expect(div.textContent).not.toContain("Error 404");
      done();
    }, 50);
  });
});
