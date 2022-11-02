import Empty from './src/empty.vue'
import { createNamespace } from '../../../src/utils/use-namespace.js'

Empty.install = (Vue, options = {}) => {
  Vue.component(createNamespace('Empty', { prefix: options.prefix }), Empty)
}

export default Empty
