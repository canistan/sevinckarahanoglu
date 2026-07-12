import configPromise from '@payload-config'
import { RootPage } from '@payloadcms/next/views'
import { importMap } from '../importMap'

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}



const Page = async ({ params, searchParams }: Args) => {
  return <RootPage config={configPromise} importMap={importMap} params={params} searchParams={searchParams} />
}

export default Page
