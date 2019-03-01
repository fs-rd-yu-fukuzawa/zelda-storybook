// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import * as components from './components'

// Vue.config.productionTip = false

var ZeldaVuestory = {
  install: function (Vue, opts = {}) {
    // コンポーネントの登録
    (function registerComponents (components) {
      if (components) {
        for (const key in components) {
          const component = components[key]
          Vue.component(key, component)
        }
      }
    })(components)
  },
  version: '1.0'
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ZeldaVuestory)
}

export default ZeldaVuestory
