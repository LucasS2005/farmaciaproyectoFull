import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import Login from "../src/paginas/Login.jsx";

describe("Pruebas unitarias de Login.jsx", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
    document.body.appendChild(div);
  });

  afterEach(() => {
    document.body.removeChild(div);
  });

  it("Debe renderizar el texto 'Iniciar sesion'", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toMatch(/Iniciar sesi[oó]n/i);
      done();
    }, 50);
  });

  it("Debe contener un campo para correo o usuario", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toMatch(/correo|usuario/i);
      done();
    }, 50);
  });

  it("Debe contener un campo para contrasena", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toMatch(/contrase[nñ]a/i);
      done();
    }, 50);
  });

  // Falla intencional
  it("Falla intencionalmente para comprobar cobertura", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toContain("Carrito");
      done();
    }, 50);
  });
});
