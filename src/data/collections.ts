export const collections = {
  'modern-elegance': {
    title: 'Modern Elegance',
    description: 'Contemporary pieces with a luxurious twist',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80'
  },
  'classic-luxury': {
    title: 'Classic Luxury',
    description: 'Timeless designs that never go out of style',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80'
  },
  'art-deco-inspired': {
    title: 'Art Deco Inspired',
    description: 'Geometric patterns and bold statements',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&q=80'
  },
  'contemporary-chic': {
    title: 'Contemporary Chic',
    description: 'Modern sophistication meets practical luxury',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1200&q=80'
  }
} as const;

export type CollectionSlug = keyof typeof collections;