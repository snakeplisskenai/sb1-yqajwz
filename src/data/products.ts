import type { Product } from '../types';

export const products: Product[] = [
  // Living Room Products
  {
    _id: 'velvet-sofa-1',
    title: 'Velvet Tufted Sofa',
    slug: 'velvet-tufted-sofa',
    price: 2499.99,
    mainImage: 'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&q=80',
    category: 'living-room',
    subcategory: 'sofas',
    collection: 'modern-elegance',
    description: 'Luxurious velvet tufted sofa with gold-finished legs.',
    inStock: true,
    featured: true
  },
  {
    _id: 'leather-armchair-1',
    title: 'Leather Wing Armchair',
    slug: 'leather-wing-armchair',
    price: 1299.99,
    mainImage: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80',
    category: 'living-room',
    subcategory: 'armchairs',
    collection: 'classic-luxury',
    description: 'Classic leather wing armchair with brass studs.',
    inStock: true
  },

  // Dining Room Products
  {
    _id: 'marble-dining-table-1',
    title: 'Marble Dining Table',
    slug: 'marble-dining-table',
    price: 3499.99,
    mainImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    category: 'dining-room',
    subcategory: 'tables',
    collection: 'modern-elegance',
    description: 'Elegant marble dining table with brass base.',
    inStock: true
  },
  {
    _id: 'velvet-dining-chair-1',
    title: 'Velvet Dining Chair',
    slug: 'velvet-dining-chair',
    price: 499.99,
    mainImage: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80',
    category: 'dining-room',
    subcategory: 'chairs',
    collection: 'classic-luxury',
    description: 'Luxurious dining chair with velvet upholstery.',
    inStock: true
  },

  // Kitchen Products
  {
    _id: 'kitchen-island-1',
    title: 'Marble Kitchen Island',
    slug: 'marble-kitchen-island',
    price: 4999.99,
    mainImage: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
    category: 'kitchen',
    subcategory: 'islands',
    collection: 'modern-elegance',
    description: 'Luxury marble kitchen island with storage.',
    inStock: true
  },
  {
    _id: 'bar-stool-1',
    title: 'Leather Bar Stool',
    slug: 'leather-bar-stool',
    price: 399.99,
    mainImage: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80',
    category: 'kitchen',
    subcategory: 'seating',
    collection: 'contemporary-chic',
    description: 'Modern leather bar stool with brass accents.',
    inStock: true
  },

  // Entrance Hall Products
  {
    _id: 'console-table-1',
    title: 'Marble Console Table',
    slug: 'marble-console-table',
    price: 1299.99,
    mainImage: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=800&q=80',
    category: 'entrance-hall',
    subcategory: 'console-tables',
    collection: 'art-deco-inspired',
    description: 'Art deco inspired console table with marble top.',
    inStock: true
  },
  {
    _id: 'entrance-mirror-1',
    title: 'Gold Frame Mirror',
    slug: 'gold-frame-mirror',
    price: 899.99,
    mainImage: 'https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?w=800&q=80',
    category: 'entrance-hall',
    subcategory: 'mirrors',
    collection: 'classic-luxury',
    description: 'Elegant gold frame mirror for entrance halls.',
    inStock: true
  },

  // Lighting Products
  {
    _id: 'crystal-chandelier-1',
    title: 'Crystal Chandelier',
    slug: 'crystal-chandelier',
    price: 2999.99,
    mainImage: 'https://images.unsplash.com/photo-1543198126-377c6b373d04?w=800&q=80',
    category: 'lighting',
    subcategory: 'chandeliers',
    collection: 'classic-luxury',
    description: 'Stunning crystal chandelier with multiple tiers.',
    inStock: true
  },
  {
    _id: 'table-lamp-1',
    title: 'Art Deco Table Lamp',
    slug: 'art-deco-table-lamp',
    price: 499.99,
    mainImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    category: 'lighting',
    subcategory: 'table-lamps',
    collection: 'art-deco-inspired',
    description: 'Geometric art deco table lamp with brass finish.',
    inStock: true
  },
  {
    _id: 'floor-lamp-1',
    title: 'Modern Floor Lamp',
    slug: 'modern-floor-lamp',
    price: 799.99,
    mainImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    category: 'lighting',
    subcategory: 'floor-lamps',
    collection: 'contemporary-chic',
    description: 'Contemporary floor lamp with adjustable arm.',
    inStock: true
  },
  {
    _id: 'wall-sconce-1',
    title: 'Brass Wall Sconce',
    slug: 'brass-wall-sconce',
    price: 299.99,
    mainImage: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    category: 'lighting',
    subcategory: 'wall-lamps',
    collection: 'art-deco-inspired',
    description: 'Art deco inspired brass wall sconce.',
    inStock: true
  },

  // Accessories Products
  {
    _id: 'decorative-vase-1',
    title: 'Ceramic Vase',
    slug: 'ceramic-vase',
    price: 199.99,
    mainImage: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80',
    category: 'accessories',
    subcategory: 'vases',
    collection: 'contemporary-chic',
    description: 'Modern ceramic vase with unique texture.',
    inStock: true
  },
  {
    _id: 'wall-mirror-1',
    title: 'Decorative Wall Mirror',
    slug: 'decorative-wall-mirror',
    price: 699.99,
    mainImage: 'https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?w=800&q=80',
    category: 'accessories',
    subcategory: 'mirrors',
    collection: 'art-deco-inspired',
    description: 'Art deco inspired wall mirror with geometric pattern.',
    inStock: true
  },
  {
    _id: 'cushion-set-1',
    title: 'Velvet Cushion Set',
    slug: 'velvet-cushion-set',
    price: 149.99,
    mainImage: 'https://images.unsplash.com/photo-1579656381226-5fc0f0100c3b?w=800&q=80',
    category: 'accessories',
    subcategory: 'cushions',
    collection: 'modern-elegance',
    description: 'Set of 3 luxury velvet cushions.',
    inStock: true
  }
];