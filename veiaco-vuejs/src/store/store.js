import Vue from 'vue'
import Vuex from 'vuex'
import debt from './modules/debt/main'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    debt
  }
})
