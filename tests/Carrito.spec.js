import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import Carrito from "../src/paginas/Carrito.jsx";

describe("Pruebas unitarias de Carrito.jsx", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
    document.body.appendChild(div);
  });

  afterEach(() => {
    document.body.removeChild(div);
  });

  it("Debe renderizar el titulo del carrito", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Carrito carrito={[]} />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toContain("Carrito");
      done();
    }, 50);
  });

  it("Debe mostrar los productos agregados al carrito", (done) => {
    const carritoMock = [
      { id: 1, nombre: "Paracetamol", precio: 2000 },
      { id: 2, nombre: "Vitamina C", precio: 3000 },
    ];
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Carrito carrito={carritoMock} />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toContain("Paracetamol");
      expect(div.textContent).toContain("Vitamina C");
      done();
    }, 50);
  });

  it("Debe calcular el total de la compra correctamente", (done) => {
    const carritoMock = [
      { id: 1, nombre: "Producto 1", precio: 1000 },
      { id: 2, nombre: "Producto 2", precio: 2000 },
    ];
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Carrito carrito={carritoMock} />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toMatch(/\$3.?000/); // acepta $3000 o $3.000
      done();
    }, 50);
  });

  // Falla intencional
  it("Falla intencionalmente para comprobar cobertura", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Carrito carrito={[]} />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toContain("Error de pago");
      done();
    }, 50);
  });
});
