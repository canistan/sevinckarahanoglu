import type { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  label: 'Hakkımda Sayfası',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Sayfa Başlığı',
      defaultValue: 'Hakkımda',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Alt Başlık',
      defaultValue: 'Diş hekimliğinde çeyrek asırlık tecrübe ve güven.',
    },
    {
      name: 'biography',
      type: 'richText',
      label: 'Biyografi Metni',
      admin: {
        description: 'SEO uyumlu özgün biyografi metniniz.',
      }
    },
    {
      name: 'profileImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Profil Fotoğrafı',
    },
    {
      name: 'certificates',
      type: 'array',
      label: 'Sertifikalar ve Diplomalar',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Sertifika Adı',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Sertifika Görseli',
        }
      ]
    }
  ],
}
