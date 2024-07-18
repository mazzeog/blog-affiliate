import {defineField, defineType} from 'sanity'


export const post = defineType({
  name: 'post',
  title: 'Articolo',
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
      name: 'author',
      title: 'Autore',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Immagine Principale',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categorie',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'category'}]}]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data di Pubblicazione',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Corpo',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    }),
    defineField({
      name: 'relatedProducts',
      title: 'Prodotti Correlati',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
    }),
    defineField({
      name: 'estimatedReadingTime',
      title: 'Tempo di Lettura Stimato',
      type: 'number',
      readOnly: true,
      description: 'Tempo stimato di lettura in minuti (calcolato automaticamente)',
    }),
  ],

preview: {
    select: {
        title: 'title',
        author: 'author.name',
        media: 'mainImage',
    },
    prepare(selection: { author: string | undefined }) {
        const { author } = selection;
        return Object.assign({}, selection, {
            subtitle: author && `by ${author}`,
        });
    },
}

})

