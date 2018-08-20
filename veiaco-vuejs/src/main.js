import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './utils/backend-api'
import store from './store/store'
import './filters/filters'
import Notifications from 'vue-notification'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'awesome-notifications/dist/style.css'

import VueProgressBar from 'vue-progressbar'

/**
 * Constants
 */
const options = {
  color: '#ffff00',
  failedColor: '#ff3300',
  thickness: '5px',
  transition: {
    speed: '0.1s',
    opacity: '0.5s',
    termination: 400
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

/**
 * Vue configurations
 */
Vue.use(BootstrapVue)
Vue.use(Notifications)
Vue.use(VueProgressBar, options)

Vue.prototype.$http = api

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
