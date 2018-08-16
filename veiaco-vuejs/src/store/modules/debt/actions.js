import api from '../../../utils/backend-api'
import * as types from './mutation-types'

export default {
  async findAllDebts ({ commit }, { page, limit }) {
    try {
      const response = await api.get(`/debt?page=${page}&perpage=${limit}`)
      commit(types.SET_ALL_DEBTS, response.data.debts)
      commit(types.SET_TOTAL_ROWS, response.data.count)
      commit(types.SET_PAGE, page)
    } catch (error) {
      commit(types.SET_PAGE, 1)
      commit(types.SET_ALL_DEBTS, [])
      commit(types.SET_TOTAL_ROWS, 0)
      throw error
    }
  },
  novo ({ commit }) {
    commit(types.SET_PAGE)
  }
}
