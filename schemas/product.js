export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
        name: 'id',
        title: 'Printful Id',
        type: 'string'
    },
    {   
        name: 'featured',
        title: 'Featured',
        type: 'boolean'
    },
    {   
        name: 'raffleDrop',
        title: 'Raffle Drop',
        type: 'boolean'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Default variant',
      name: 'defaultProductVariant',
      type: 'productVariant'
    },
    {
      title: 'Variants',
      name: 'variants',
      type: 'array',
      of: [
        {
          title: 'Variant',
          type: 'productVariant'
        }
      ]
    },
    {
        title: 'Specifications',
        name: 'specifications',
        type: 'array',
        of: [
          {
            type: 'string'
          }
        ],
        options: {
          layout: 'tags'
        }
      },
    {
      title: 'Colors',
      name: 'colors',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        layout: 'tags'
      }
    },
    {
        title: 'Sizes',
        name: 'sizes',
        type: 'array',
        of: [
          {
            type: 'string'
          }
        ],
        options: {
          layout: 'tags'
        }
      },
    {
      name: 'vendor',
      title: 'Vendor',
      type: 'reference',
      to: {type: 'vendor'}
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'localeString'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'category'}
        }
      ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeBlockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'defaultProductVariant.images[0]'
    }
  }
}
