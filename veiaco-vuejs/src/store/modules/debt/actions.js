import api from '../../../utils/backend-api'
import * as types from './mutation-types'

export default {
  async findAllDebts ({ commit }, { page, limit }) {
    try {
      const response = await api.get(`/debt?page=${page}&perpage=${limit}`)
      const totalRows = response.data.count
      commit(types.SET_ALL_DEBTS, response.data.debts)
      commit(types.SET_PAGINATION, { page, totalRows })
    } catch (error) {
      commit(types.SET_ALL_DEBTS, [])
      commit(types.SET_PAGINATION, { page: page, totalRows: 0 })
      throw error
    }
  },
  async createDebt ({ commit }, payload) {
    try {
      const jsonData = JSON.stringify(payload)
      await api.post('/debt', jsonData)
    } catch (error) {
      throw error
    }
  },
  async updateDebt ({ commit }, payload) {
    try {
      const jsonData = JSON.stringify(payload.debt)
      await this.$http.put(`/debt/${payload.id}`, jsonData)
    } catch (error) {
      throw error
    }
  },
  async deleteDebt ({ state, dispatch }, payload) {
    try {
      await api.delete(`/debt/${payload._id}`)
      dispatch('findAllDebts', {
        page: state.pagination.page,
        limit: state.pagination.perPage
      })
    } catch (error) {
      throw error
    }
  }
}
