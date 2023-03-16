import path from 'path'
import { buildConfig } from 'payload/config'
import { Pages } from './collections/Pages'
import Users from './collections/Users'
import { MainMenu } from './globals/MainMenu'

export default buildConfig({
  collections: [Users, Pages],
  cors: [process.env.PAYLOAD_PUBLIC_SITE_URL, process.env.PAYLOAD_PUBLIC_SERVER_URL],
  csrf: [process.env.PAYLOAD_PUBLIC_SITE_URL, process.env.PAYLOAD_PUBLIC_SERVER_URL],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  globals: [MainMenu],
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
