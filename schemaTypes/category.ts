import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Categoria',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normale', value: 'normal'},
            {title: 'Titolo 1', value: 'h1'},
            {title: 'Titolo 2', value: 'h2'},
            {title: 'Titolo 3', value: 'h3'},
            {title: 'Citazione', value: 'blockquote'}
          ],
          lists: [
            {title: 'Elenco puntato', value: 'bullet'},
            {title: 'Elenco numerato', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Grassetto', value: 'strong'},
              {title: 'Corsivo', value: 'em'},
              {title: 'Sottolineato', value: 'underline'}
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: {hotspot: true}
        }
      ]
    }),
    defineField({
      name: 'macroCategories',
      title: 'Macro categorie',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'macroCategory'}]}],
      validation: (Rule) => Rule.unique(),
    }),
  ],
})