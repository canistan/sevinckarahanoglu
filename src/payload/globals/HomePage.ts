import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Anasayfa İçerikleri (Görseller & Metinler)',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero (En Üst) Görseli - Sizin Fotoğrafınız',
      admin: {
        description: 'Anasayfanın en üstünde sağda görünen ana görseldir. (Önerilen format: Arka planı transparan veya uyumlu bir dikey portre)',
      }
    },
    {
      name: 'aboutImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Hakkımda Bölümü Görseli (Klinik İçi vb.)',
      admin: {
        description: 'Hakkımda (Hekimlik Felsefem) metninin solunda görünen kareye yakın büyük görsel.',
      }
    }
  ],
}
