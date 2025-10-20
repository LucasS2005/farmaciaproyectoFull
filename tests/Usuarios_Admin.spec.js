import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import Usuarios_Admin from "../src/paginas/administrador/Usuarios_Admin.jsx";

describe("Pruebas unitarias de Usuarios_Admin.jsx", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
    document.body.appendChild(div);
  });

  afterEach(() => {
    document.body.removeChild(div);
  });

  it("Debe renderizar el titulo principal", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Usuarios_Admin />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toMatch(/Gestion de Usuarios|Usuarios/i);
      done();
    }, 50);
  });

  it("Debe mostrar lista de usuarios registrados", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Usuarios_Admin />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toMatch(/Jose|Matias|Camila/i);
      done();
    }, 50);
  });

  it("Debe tener opciones de edicion o eliminacion", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Usuarios_Admin />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toMatch(/Editar|Eliminar|✏️|🗑️/i);
      done();
    }, 50);
  });


  it("Falla intencionalmente para comprobar cobertura", (done) => {
    ReactDOM.createRoot(div).render(
      <MemoryRouter>
        <Usuarios_Admin />
      </MemoryRouter>
    );
    setTimeout(() => {
      expect(div.textContent).toContain("Error inesperado");
      done();
    }, 50);
  });
});
