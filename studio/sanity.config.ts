import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemaTypes'
import {csCZLocale} from '@sanity/locale-cs-cz'

import {deskStructure} from './components/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'My Sanity Project',

  projectId: 'kv2n6i6u',
  dataset: 'production',

  plugins: [structureTool({structure: deskStructure}), media(), csCZLocale()],

  schema: {
    types: schemaTypes,
  },
})
