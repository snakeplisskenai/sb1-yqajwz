export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  groups: [
    { name: 'basic', title: 'Basic Information' },
    { name: 'pricing', title: 'Pricing & Inventory' },
    { name: 'media', title: 'Media' },
    { name: 'variants', title: 'Variants' },
    { name: 'seo', title: 'SEO' },
    { name: 'attributes', title: 'Attributes' }
  ],
  fields: [
    {
      name: 'title',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'basic'
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'basic'
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required(),
      group: 'basic'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Active', value: 'active' },
          { title: 'Archived', value: 'archived' }
        ]
      },
      initialValue: 'draft',
      group: 'basic'
    },
    {
      name: 'pricing',
      title: 'Pricing',
      type: 'object',
      group: 'pricing',
      fields: [
        {
          name: 'basePrice',
          title: 'Base Price',
          type: 'number',
          validation: Rule => Rule.required().positive()
        },
        {
          name: 'salePrice',
          title: 'Sale Price',
          type: 'number'
        },
        {
          name: 'saleStartDate',
          title: 'Sale Start Date',
          type: 'datetime'
        },
        {
          name: 'saleEndDate',
          title: 'Sale End Date',
          type: 'datetime'
        },
        {
          name: 'taxClass',
          title: 'Tax Class',
          type: 'string',
          options: {
            list: [
              { title: 'Standard', value: 'standard' },
              { title: 'Reduced', value: 'reduced' },
              { title: 'Zero', value: 'zero' }
            ]
          }
        }
      ]
    },
    {
      name: 'inventory',
      title: 'Inventory',
      type: 'object',
      group: 'pricing',
      fields: [
        {
          name: 'sku',
          title: 'SKU',
          type: 'string'
        },
        {
          name: 'quantity',
          title: 'Quantity',
          type: 'number',
          validation: Rule => Rule.required().min(0)
        },
        {
          name: 'lowStockThreshold',
          title: 'Low Stock Threshold',
          type: 'number'
        },
        {
          name: 'allowBackorder',
          title: 'Allow Backorder',
          type: 'boolean'
        }
      ]
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required(),
      group: 'media'
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ],
      group: 'media'
    },
    {
      name: 'variants',
      title: 'Product Variants',
      type: 'array',
      group: 'variants',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Variant Title',
              type: 'string'
            },
            {
              name: 'sku',
              title: 'SKU',
              type: 'string'
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number'
            },
            {
              name: 'attributes',
              title: 'Attributes',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'name',
                      title: 'Name',
                      type: 'string'
                    },
                    {
                      name: 'value',
                      title: 'Value',
                      type: 'string'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      group: 'basic'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      group: 'basic'
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      group: 'basic'
    },
    {
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      group: 'attributes',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string'
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        {
          name: 'title',
          title: 'SEO Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Meta Description',
          type: 'text'
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }]
        }
      ]
    },
    {
      name: 'relatedProducts',
      title: 'Related Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      group: 'basic'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      status: 'status',
      price: 'pricing.basePrice'
    },
    prepare({ title, media, status, price }) {
      return {
        title,
        subtitle: `${status} - £${price}`,
        media
      };
    }
  }
};