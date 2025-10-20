// Datos simulados de boletas / órdenes de compra
const boletas = [
  {
    id: 1,
    clienteId: 1,
    cliente: "Lucas Galindo",
    fecha: "2025-10-15",
    metodoPago: "Tarjeta de crédito",
    total: 15400,
    productos: [
      { id: 1, nombre: "Paracetamol 500mg", cantidad: 2, precio: 2800 },
      { id: 2, nombre: "Alcohol Gel 250ml", cantidad: 1, precio: 1800 },
      { id: 3, nombre: "Vitamina C 1000mg", cantidad: 1, precio: 5200 },
    ],
    estado: "Completada",
  },
  {
    id: 2,
    clienteId: 2,
    cliente: "Matías Fernández",
    fecha: "2025-10-18",
    metodoPago: "Transferencia bancaria",
    total: 8900,
    productos: [
      { id: 4, nombre: "Mascarilla KN95 (pack x10)", cantidad: 1, precio: 8900 },
    ],
    estado: "Completada",
  },
  {
    id: 3,
    clienteId: 3,
    cliente: "Camila Soto",
    fecha: "2025-10-19",
    metodoPago: "Efectivo",
    total: 7200,
    productos: [
      { id: 5, nombre: "Ibuprofeno 400mg", cantidad: 2, precio: 3500 },
    ],
    estado: "Pendiente",
  },
  {
    id: 4,
    clienteId: 1,
    cliente: "Lucas Galindo",
    fecha: "2025-10-20",
    metodoPago: "Tarjeta de débito",
    total: 10400,
    productos: [
      { id: 2, nombre: "Alcohol Gel 250ml", cantidad: 2, precio: 1800 },
      { id: 6, nombre: "Vitamina D 1000 UI", cantidad: 1, precio: 6800 },
    ],
    estado: "En proceso",
  },
];

export default boletas;
