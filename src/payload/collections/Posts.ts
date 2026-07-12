import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'publishedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Yazı Başlığı',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      label: 'URL Uzantısı (Slug)',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Taslak', value: 'draft' },
        { label: 'Yayında', value: 'published' },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      },
      label: 'Durum',
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      label: 'Yayınlanma Tarihi',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
      label: 'Yazar',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Kapak Görseli',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Özet (İlk 2-3 Cümle - GEO İçin Kritik)',
      admin: {
        description: 'AI arama motorlarının (ChatGPT, Google AI vb.) bu konuyu net olarak anlaması ve alıntılaması için konuyu en baştan net bir şekilde özetleyin.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'İçerik',
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'Sıkça Sorulan Sorular (GEO / Schema İçin)',
      admin: {
        description: 'Arama motorlarının "Sıkça Sorulanlar" formatını sevmesi nedeniyle yapılandırılmış bilgi girmek için kullanın.',
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          label: 'Soru',
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          label: 'Cevap',
        },
      ],
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO Ayarları',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Meta Title (Boş bırakılırsa Yazı Başlığı kullanılır)',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description (Boş bırakılırsa Özet kullanılır)',
        },
      ],
    },
  ],
}
