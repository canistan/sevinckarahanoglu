import type { CollectionConfig } from 'payload'

export const Specialties: CollectionConfig = {
  slug: 'specialties',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Uzmanlık Adı (örn: İmplant, Estetik Diş Hekimliği)',
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
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
      label: 'Sıralama',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Kapak Görseli',
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
      label: 'Kısa Açıklama / Yaklaşım',
      admin: {
        description: 'Bu sayfalar klinik işlemlerini anlatmamalı. Sizin bu alandaki kişisel felsefenizi, yaklaşımınızı ve deneyiminizi anlatmalı.',
      },
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Detaylı İçerik (Opsiyonel)',
    },
    {
      name: 'meta',
      type: 'group',
      label: 'SEO Ayarları',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description',
        },
      ],
    },
  ],
}
