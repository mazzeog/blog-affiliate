import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Prodotto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'brand',
      title: 'Marca',
      type: 'reference',
      to: [{type: 'brand'}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'reference',
      to: [{type: 'category'}],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'productDescription',
      title: 'Descrizione Prodotto',
      type: 'object',
      fields: [
        {
          name: 'whatItDoes',
          title: 'Cosa fa questo prodotto?',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Descrivi la funzione e i benefici principali del prodotto'
        },
        {
          name: 'howToUse',
          title: 'Come si usa?',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Fornisci istruzioni chiare su come utilizzare il prodotto'
        },
        {
          name: 'keyFeatures',
          title: 'Quali sono le caratteristiche principali?',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Elenca le caratteristiche o i componenti principali del prodotto'
        },
        {
          name: 'suitableFor',
          title: 'Per chi è adatto?',
          type: 'array',
          of: [{type: 'block'}],
          description: 'Specifica il pubblico target e i risultati attesi'
        }
      ]
    }),
    defineField({
      name: 'price',
      title: 'Prezzo',
      type: 'number',
    }),
    defineField({
      name: 'mainImage',
      title: 'Immagine Principale',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})