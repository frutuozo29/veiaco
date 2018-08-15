import Vue from 'vue'
import App from './App.vue'
import router from './router'
import api from './utils/backend-api'
// import auth from './utils/auth'
import './filters/filters'
// import axios from 'axios'
import Notifications from 'vue-notification'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueProgressBar from 'vue-progressbar'

/**
 * Constants

const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:1000'
    : 'https://veiaco-api.herokuapp.com'
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

/* Vue.prototype.$http = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

Vue.prototype.$http.interceptors.request.use(
  config => {
    if (auth.loggedIn()) {
      config.headers.common['Authorization'] = 'Bearer ' + auth.getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
) */

Vue.prototype.$http = api

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
