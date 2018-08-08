import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/**
 * Constants
 */
const API_URL = "https://veiaco-api.herokuapp.com";

/**
 * Vue configurations
 */
Vue.use(BootstrapVue);
Vue.prototype.$http = axios.create({ baseURL: API_URL });
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
