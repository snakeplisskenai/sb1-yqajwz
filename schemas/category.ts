export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Category Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'parent',
      title: 'Parent Category',
      type: 'reference',
      to: [{ type: 'category' }]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
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
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'parent.title',
      media: 'image'
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `Parent: ${subtitle}` : 'Top Level Category',
        media
      };
    }
  }
};