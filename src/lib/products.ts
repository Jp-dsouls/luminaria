// Datos de productos para el catálogo
export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  lightColor: string;
  type: string;
  rating: number;
  discount?: number;
  badge?: string;
  gallery?: string[];
  description?: string;
  features?: string[];
  reviews?: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Spot LED Empotrable Redondo",
    price: 45,
    originalPrice: 60,
    image: "/spot-led-warm-lighting.jpg",
    category: "Spots LED",
    lightColor: "cálida" as const,
    type: "spot-led" as const,
    rating: 4.8,
    discount: 25,
    badge: "NUEVO",
  },
  {
    id: 2,
    name: "Aplique LED Moderno Negro",
    price: 89,
    image: "/wall-sconce-led-black-modern.jpg",
    category: "Apliques LED",
    lightColor: "cálida" as const,
    type: "aplique-led" as const,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Lámpara de Piso Dorada",
    price: 199,
    originalPrice: 250,
    image: "/floor-lamp-warm-gold-design.jpg",
    category: "Lámparas de Piso",
    lightColor: "amarilla" as const,
    type: "lámpara-piso" as const,
    rating: 4.7,
    discount: 20,
  },
  {
    id: 4,
    name: "Candelabro Cristal Dorado",
    price: 450,
    image: "/golden-chandelier-ceiling-light-warm.jpg",
    category: "Candelabros",
    lightColor: "cálida" as const,
    type: "candelabro" as const,
    rating: 5.0,
    badge: "PREMIUM",
  },
  {
    id: 5,
    name: "Lámpara de Mesa Nórdica",
    price: 75,
    image: "/table-lamp-nordic-warm-modern.jpg",
    category: "Lámparas de Mesa",
    lightColor: "cálida" as const,
    type: "lámpara-mesa" as const,
    rating: 4.6,
  },
  {
    id: 6,
    name: "Spot LED Cuadrado Blanco",
    price: 52,
    image: "/spot-led-warm-lighting.jpg",
    category: "Spots LED",
    lightColor: "fría" as const,
    type: "spot-led" as const,
    rating: 4.5,
  },
  {
    id: 7,
    name: "Aplique LED Vintage Bronce",
    price: 95,
    image: "/wall-sconce-led-black-modern.jpg",
    category: "Apliques LED",
    lightColor: "amarilla" as const,
    type: "aplique-led" as const,
    rating: 4.8,
  },
  {
    id: 8,
    name: "Lámpara de Piso Minimalista",
    price: 165,
    image: "/floor-lamp-warm-gold-design.jpg",
    category: "Lámparas de Piso",
    lightColor: "fría" as const,
    type: "lámpara-piso" as const,
    rating: 4.4,
  },
];
