import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleRight, faFolder, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleRight, faFolder, faSearch)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
