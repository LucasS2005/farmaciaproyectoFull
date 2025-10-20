import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import Home from "../src/paginas/Home.jsx";

describe("Pruebas unitarias de Home.jsx", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
    document.body.appendChild(div);
  });

  afterEach(() => {
    document.body.removeChild(div);
  });

  it("Debe renderizar el título principal", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toContain("Bienvenido a FarmaCom");
      done();
    }, 100);
  });

  it("Debe contener el botón para ver productos", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toContain("Ver productos");
      done();
    }, 100);
  });

  it("Debe contener una descripción de bienvenida", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent.length).toBeGreaterThan(30);
      done();
    }, 100);
  });

  it("Falla intencionalmente para comprobar cobertura", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toContain("Error de interfaz");
      done();
    }, 250); 
  });
});
