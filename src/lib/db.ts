import { createClient } from '@libsql/client';
import { products } from '../data/products';
import type { Product } from '../types';

const client = createClient({
  url: process.env.DATABASE_URL || 'file:local.db'
});

export async function getProducts(): Promise<Product[]> {
  try {
    const result = await client.execute('SELECT * FROM products WHERE in_stock = 1');
    return result.rows as Product[];
  } catch (error) {
    console.error('Error fetching products:', error);
    return products;
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const result = await client.execute({
      sql: 'SELECT * FROM products WHERE category = ? AND in_stock = 1',
      args: [category]
    });
    return result.rows as Product[];
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return products.filter(p => p.category === category);
  }
}

export async function getProductsBySubcategory(category: string, subcategory: string): Promise<Product[]> {
  try {
    const result = await client.execute({
      sql: 'SELECT * FROM products WHERE category = ? AND subcategory = ? AND in_stock = 1',
      args: [category, subcategory]
    });
    return result.rows as Product[];
  } catch (error) {
    console.error('Error fetching products by subcategory:', error);
    return products.filter(p => p.category === category && p.subcategory === subcategory);
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const result = await client.execute({
      sql: 'SELECT * FROM products WHERE slug = ? LIMIT 1',
      args: [slug]
    });
    return result.rows[0] as Product || null;
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    return products.find(p => p.slug === slug) || null;
  }
}

export async function getProductsByCollection(collection: string): Promise<Product[]> {
  try {
    const result = await client.execute({
      sql: 'SELECT * FROM products WHERE collection = ? AND in_stock = 1',
      args: [collection]
    });
    return result.rows as Product[];
  } catch (error) {
    console.error('Error fetching products by collection:', error);
    return products.filter(p => p.collection === collection);
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const result = await client.execute('SELECT * FROM products WHERE featured = 1 AND in_stock = 1 LIMIT 4');
    return result.rows as Product[];
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return products.filter(p => p.featured).slice(0, 4);
  }
}