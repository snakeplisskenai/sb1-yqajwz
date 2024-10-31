export interface Product {
  _id: string;
  title: string;
  slug: string;
  price: number;
  mainImage: string;
  category: string;
  subcategory?: string;
  collection?: string;
  description?: string;
  images?: string[];
  specifications?: Record<string, string>;
  inStock: boolean;
  featured?: boolean;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  image?: string;
}

export interface Collection {
  title: string;
  description: string;
  image: string;
}