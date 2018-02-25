import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

Vue.use(VueLodash, lodash)
Vue.component('panel', {
	 props: ['title'],
	template: '<li class="panel"><h2>{{title}} </h2><slot></slot></li>'
})







new Vue({
  el: '#app',
  render: h => h(App)
})
