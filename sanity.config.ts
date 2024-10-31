import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './schemas';

export default defineConfig({
  name: 'default',
  title: 'ARTANNA Luxury Decor',
  projectId: 'xms8qor0',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
});