import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import Home_Admin from "../src/paginas/administrador/Home_Admin.jsx";

describe("Pruebas unitarias de Home_Admin.jsx", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
    document.body.appendChild(div);
  });

  afterEach(() => {
    document.body.removeChild(div);
  });

  it("Debe renderizar correctamente el título principal del panel admin", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Home_Admin />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toContain("Gestión");
      done();
    }, 50);
  });

  it("Debe mostrar productos del panel admin", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Home_Admin />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent.length).toBeGreaterThan(20);
      done();
    }, 50);
  });

  it("Falla intencionalmente para comprobar cobertura", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Home_Admin />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toContain("Error crítico");
      done();
    }, 50);
  });
});
