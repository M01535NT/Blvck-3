import { Property } from './types';

export const PROPERTIES_DATA: Property[] = [
  {
    id: 1,
    titulo: "Residencia Zenith",
    categoria: "residencial",
    tipo: "venta",
    destacada: true,
    precio: 12500000,
    ubicacion: "Valle Real, Zapopan",
    descripcion: "Obra maestra de la arquitectura contemporánea. Espacios diseñados para el flujo de luz y aire, con acabados en mármol y maderas finas.",
    specs: { construccion: 420, terreno: 350, recamaras: 4, banos: 4.5, estacionamientos: 3 },
    amenidades: ["Alberca Infinity", "Smart Home", "Cava", "Seguridad 24/7"],
    imagenes: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    titulo: "Penthouse Skyline",
    categoria: "residencial",
    tipo: "venta",
    destacada: true,
    precio: 18400000,
    ubicacion: "Andares, Jalisco",
    descripcion: "Vistas inigualables de la ciudad desde este penthouse de doble altura. Lujo vertical en su máxima expresión.",
    specs: { construccion: 310, terreno: 0, recamaras: 3, banos: 3, estacionamientos: 2 },
    amenidades: ["Roof Garden", "Elevador Privado", "Gimnasio", "Concierge"],
    imagenes: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    titulo: "Villa Toscana",
    categoria: "residencial",
    tipo: "venta",
    destacada: true,
    precio: 8900000,
    ubicacion: "Ajijic, Ribera",
    descripcion: "Encanto rústico con comodidades modernas. Un refugio perfecto para el descanso y la inspiración.",
    specs: { construccion: 280, terreno: 500, recamaras: 3, banos: 3, estacionamientos: 2 },
    amenidades: ["Jardín Botánico", "Terraza Panorámica", "Chimenea", "Acceso al Lago"],
    imagenes: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-27b9042b2bb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    titulo: "Loft Industrial",
    categoria: "residencial",
    tipo: "renta",
    destacada: true,
    precio: 45000,
    ubicacion: "Col. Americana",
    descripcion: "Espacio abierto y versátil en el corazón cultural de la ciudad. Ideal para creativos y nómadas digitales.",
    specs: { construccion: 120, terreno: 120, recamaras: 1, banos: 1.5, estacionamientos: 1 },
    amenidades: ["Doble Altura", "Vigilancia", "Pet Friendly", "Balcón"],
    imagenes: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  }
];

export const formatMoney = (amount: number) => {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(amount);
};