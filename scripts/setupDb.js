import { createClient } from '@libsql/client';
import { products } from '../src/data/products.js';

const client = createClient({
  url: process.env.DATABASE_URL || 'file:local.db'
});

async function setupDatabase() {
  try {
    // Create products table
    await client.execute(`
      CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        slug TEXT UNIQUE NOT NULL,
        price REAL NOT NULL,
        main_image TEXT NOT NULL,
        category TEXT NOT NULL,
        subcategory TEXT,
        collection TEXT,
        description TEXT,
        specifications TEXT,
        in_stock BOOLEAN NOT NULL DEFAULT 1,
        featured BOOLEAN NOT NULL DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert example products
    for (const product of products) {
      await client.execute({
        sql: `
          INSERT OR REPLACE INTO products (
            id, title, slug, price, main_image, category, 
            subcategory, collection, description, specifications,
            in_stock, featured
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        args: [
          product._id,
          product.title,
          product.slug,
          product.price,
          product.mainImage,
          product.category,
          product.subcategory || null,
          product.collection || null,
          product.description || null,
          product.specifications ? JSON.stringify(product.specifications) : null,
          product.inStock ? 1 : 0,
          product.featured ? 1 : 0
        ]
      });
    }

    console.log('Database setup completed successfully!');
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  }
}

setupDatabase();