export default {
  name: 'attribute',
  title: 'Product Attribute',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Attribute Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'code',
      title: 'Attribute Code',
      type: 'slug',
      options: {
        source: 'name'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Input Type',
      type: 'string',
      options: {
        list: [
          { title: 'Text', value: 'text' },
          { title: 'Select', value: 'select' },
          { title: 'Multi-select', value: 'multiselect' },
          { title: 'Boolean', value: 'boolean' },
          { title: 'Number', value: 'number' }
        ]
      }
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string'
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string'
            }
          ]
        }
      ],
      hidden: ({ document }) => !['select', 'multiselect'].includes(document?.type)
    },
    {
      name: 'isRequired',
      title: 'Required',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'isFilterable',
      title: 'Use in Filtering',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'isSearchable',
      title: 'Use in Search',
      type: 'boolean',
      initialValue: false
    }
  ]
};