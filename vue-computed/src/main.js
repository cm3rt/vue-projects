import Vue from 'vue'
import App from './App.vue'
// import Vue from 'vue'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

Vue.use(VueLodash, lodash)


Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });




new Vue({
  el: '#app',
  render: h => h(App)
})
