
import ibuprofeno from "../assets/img/ibuprofeno.png";
import paracetamol from "../assets/img/paracetamol.png";
import vitaminaC from "../assets/img/vitaminaC.png";
import alcoholgel from "../assets/img/alcoholgel.png";
import mascarilla from "../assets/img/mascarilla.png";

const productosData = [
  {
    id: 1,
    nombre: "Ibuprofeno 400mg",
    descripcion: "Analgésico y antiinflamatorio para dolores musculares y de cabeza.",
    precio: 3500,
    imagen: ibuprofeno,
    categoria: "analgésicos",
  },
  {
    id: 2,
    nombre: "Paracetamol 500mg",
    descripcion: "Medicamento eficaz para reducir fiebre y aliviar dolores leves o moderados.",
    precio: 2800,
    imagen: paracetamol,
    categoria: "analgésicos",
  },
  {
    id: 3,
    nombre: "Vitamina C 1000mg",
    descripcion: "Refuerza tu sistema inmunológico y mejora la absorción de hierro.",
    precio: 5200,
    imagen: vitaminaC,
    categoria: "vitaminas",
  },
  {
    id: 4,
    nombre: "Alcohol Gel 250ml",
    descripcion: "Desinfectante de manos con aloe vera. Ideal para uso diario.",
    precio: 1800,
    imagen: alcoholgel,
    categoria: "protección",
  },
  {
    id: 5,
    nombre: "Mascarilla KN95 (pack x10)",
    descripcion: "Protección respiratoria de alta eficiencia, cómoda y segura.",
    precio: 8900,
    imagen: mascarilla,
    categoria: "protección",
  },
];

export default productosData;