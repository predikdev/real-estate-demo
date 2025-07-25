import {definePlugin} from 'sanity'
import './style.css'

export const customStylesPlugin = definePlugin({
  name: 'custom-styles',
  studio: {
    components: {},
  },
})
