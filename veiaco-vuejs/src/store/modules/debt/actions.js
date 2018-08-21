import api from '../../../utils/backend-api'
import { sendSuccessMessage, sendErrorMessage } from '../../../utils/notify'
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
      sendErrorMessage("Can't fetch debts :(")
    }
  },
  async createDebt ({ commit }, payload) {
    try {
      const jsonData = JSON.stringify(payload)
      await api.post('/debt', jsonData)
      sendSuccessMessage('Debt created!')
    } catch (error) {
      sendErrorMessage('There was an error creating debt :(')
    }
  },
  async updateDebt ({ commit }, payload) {
    try {
      const jsonData = JSON.stringify(payload.debt)
      await api.put(`/debt/${payload.id}`, jsonData)
      sendSuccessMessage('Debt updated!')
    } catch (error) {
      sendErrorMessage('There was an error editing debt :(')
    }
  },
  async deleteDebt ({ state, dispatch }, payload) {
    try {
      await api.delete(`/debt/${payload._id}`)
      dispatch('findAllDebts', {
        page: state.pagination.page,
        limit: state.pagination.perPage
      })
      sendSuccessMessage('Debt deleted!')
    } catch (error) {
      sendErrorMessage("Can't delete debt")
    }
  }
}
