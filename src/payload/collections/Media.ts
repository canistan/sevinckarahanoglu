import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
  },
  access: {
    read: () => true, // Herkese açık (public)
  },
  upload: {
    staticDir: 'media',
    formatOptions: {
      format: 'webp',
      options: {
        quality: 80, // %80 kalite (gözle görülmeyen fark ama boyut olarak çok daha düşük)
      },
    },
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
        formatOptions: { format: 'webp', options: { quality: 75 } },
      },
      {
        name: 'hero',
        width: 1600,
        height: 900,
        position: 'centre',
        formatOptions: { format: 'webp', options: { quality: 80 } },
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Metni (SEO İçin Önemli)',
    },
  ],
}
