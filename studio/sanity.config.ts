import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {media} from 'sanity-plugin-media'
import {csCZLocale} from '@sanity/locale-cs-cz'
import {schemaTypes} from './schemaTypes'

import {deskStructure} from './components/deskStructure'
import {customStylesPlugin} from './plugins'

export default defineConfig({
  name: 'default',
  title: 'My Sanity Project',

  projectId: 'kv2n6i6u',
  dataset: 'production',

  plugins: [structureTool({structure: deskStructure}), media(), csCZLocale(), customStylesPlugin],

  schema: {
    types: schemaTypes,
  },
})
