import Vue from 'vue'
import Vuex from 'vuex'
import debt from './modules/debt/main'
import credit from './modules/credit/main'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    debt,
    credit
  }
})
