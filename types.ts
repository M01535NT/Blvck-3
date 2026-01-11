export interface PropertySpecs {
  construccion: number;
  terreno: number;
  recamaras: number;
  banos: number;
  estacionamientos: number;
}

export interface Property {
  id: number;
  titulo: string;
  categoria: 'residencial' | 'comercial' | 'industrial';
  tipo: 'venta' | 'renta';
  destacada: boolean;
  precio: number;
  ubicacion: string;
  descripcion: string;
  specs: PropertySpecs;
  amenidades: string[];
  imagenes: string[];
}

export type InventoryFilter = {
  category: string | null;
  type: string | null;
};