import {defineField, defineType} from 'sanity'

export const macroCategory = defineType({
  name: 'macroCategory',
  title: 'Macrocategoria',
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
              {title: 'Normal', value: 'normal'},
              {title: 'H1', value: 'h1'},
              {title: 'H2', value: 'h2'},
              {title: 'H3', value: 'h3'},
              {title: 'Quote', value: 'blockquote'}
            ],
            lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Number', value: 'number'}],
            marks: {
              decorators: [
                {title: 'Strong', value: 'strong'},
                {title: 'Emphasis', value: 'em'},
                {title: 'Underline', value: 'underline'}
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
      })
  ],
})