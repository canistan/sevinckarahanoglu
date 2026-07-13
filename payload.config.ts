import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { SiteSettings } from './src/payload/globals/SiteSettings'
import { HomePage } from './src/payload/globals/HomePage'
import { AboutPage } from './src/payload/globals/AboutPage'
import { Users } from './src/payload/collections/Users'
import { Media } from './src/payload/collections/Media'
import { Posts } from './src/payload/collections/Posts'
import { Specialties } from './src/payload/collections/Specialties'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts, Specialties],
  globals: [SiteSettings, HomePage, AboutPage],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'gizli-sifre-degistirilecek',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
})
