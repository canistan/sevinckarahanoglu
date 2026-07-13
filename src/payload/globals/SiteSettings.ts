import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Genel Site Ayarları (İletişim & Sosyal Medya)',
  access: {
    read: () => true, // Herkes okuyabilir
  },
  fields: [
    {
      name: 'address',
      type: 'text',
      label: 'Klinik Adresi',
      defaultValue: 'Barbaros Mh. Nuhkuyusu Cd No:48A, 34662 Üsküdar/İstanbul',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefon Numarası',
      defaultValue: '0552 170 66 00',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      label: 'E-posta Adresi',
      defaultValue: 'sevincdent@gmail.com',
      required: true,
    },
    {
      name: 'workingHours',
      type: 'text',
      label: 'Çalışma Saatleri',
      defaultValue: 'Pazartesi – Cumartesi 09:00 – 19:30',
      required: true,
    },
    {
      name: 'facebookUrl',
      type: 'text',
      label: 'Facebook Linki',
      defaultValue: 'https://www.facebook.com/profile.php?id=100094564800152#',
    },
    {
      name: 'instagramUrl',
      type: 'text',
      label: 'Instagram Linki (Kişisel/Klinik)',
      defaultValue: 'https://www.instagram.com/dishekimisevinckarahanoglu/',
    },
    {
      name: 'mapsUrl',
      type: 'text',
      label: 'Google Haritalar Linki',
      defaultValue: 'https://www.google.com/maps/place/SEV%C4%B0N%C3%87+DENT+A%C4%9EIZ+VE+D%C4%B0%C5%9E+SA%C4%9ELI%C4%9EI+POL%C4%B0KL%C4%B0N%C4%B0%C4%9E%C4%B0/@41.0175345,29.0321157,17z/data=!3m1!4b1!4m6!3m5!1s0x14cac9e17b7627d1:0x7855d5f295287e5f!8m2!3d41.0175345!4d29.0321157!16s%2Fg%2F11shnz346m?entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D',
    },
  ],
}
