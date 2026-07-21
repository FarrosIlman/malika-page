import {defineField, defineType} from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Proyek',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'Web App', value: 'Web App'},
          {title: 'Landing Page', value: 'Landing Page'},
          {title: 'Sistem Akademik', value: 'Sistem Akademik'},
          {title: 'Mobile App', value: 'Mobile App'},
          {title: 'UI/UX Design', value: 'UI/UX Design'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'image',
      title: 'Gambar Mockup',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Teknologi (Tags)',
      type: 'array',
      of: [{type: 'string'}],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'link',
      title: 'Tautan (URL)',
      type: 'url',
    }),
  ],
})
