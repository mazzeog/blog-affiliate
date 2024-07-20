import {defineField, defineType} from 'sanity'

export const brand = defineType({
  name: 'brand',
  title: 'Marca',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
        name: 'tiers',
        title: 'Fasce',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          list: [
            {title: 'Ecologico/Sostenibile', value: 'eco'},
            {title: 'Economico', value: 'budget'},
            {title: 'Entry-level', value: 'entryLevel'},
            {title: 'Fascia Alta', value: 'highEnd'},
            {title: 'Fascia Media', value: 'midRange'},
            {title: 'Innovativo', value: 'innovative'},
            {title: 'Ipoallergenico', value: 'hypoallergenic'},
            {title: 'Lusso', value: 'luxury'},
            {title: 'Premium', value: 'premium'},
            {title: 'Professionale', value: 'professional'},
            {title: 'Specializzato', value: 'specialized'},
          ],
        },
        validation: Rule => Rule.unique()
      }),
    defineField({
      name: 'categories',
      title: 'Categorie',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}],
    }),
  ],
})
