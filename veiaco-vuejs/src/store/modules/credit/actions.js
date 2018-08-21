import api from '../../../utils/backend-api'
import { sendSuccessMessage, sendErrorMessage } from '../../../utils/notify'
import * as types from './mutation-types'

export default {
  async findAllCredits ({ commit }, { page, limit }) {
    try {
      const response = await api.get(`/credit?page=${page}&perpage=${limit}`)
      const totalRows = response.data.count
      commit(types.SET_ALL_CREDITS, response.data.credits)
      commit(types.SET_PAGINATION, { page, totalRows })
    } catch (error) {
      commit(types.SET_ALL_CREDITS, [])
      commit(types.SET_PAGINATION, { page: page, totalRows: 0 })
      sendErrorMessage("Can't fetch credits :(")
    }
  },
  async createCredit ({ commit }, payload) {
    try {
      const jsonData = JSON.stringify(payload)
      await api.post('/credit', jsonData)
      sendSuccessMessage('Credit created!')
    } catch (error) {
      sendErrorMessage('There was an error creating credit :(')
    }
  },
  async updateCredit ({ commit }, payload) {
    try {
      const jsonData = JSON.stringify(payload.debt)
      await api.put(`/credit/${payload.id}`, jsonData)
      sendSuccessMessage('Credit updated!')
    } catch (error) {
      sendErrorMessage('There was an error editing credit :(')
    }
  },
  async deleteCredit ({ state, dispatch }, payload) {
    try {
      await api.delete(`/credit/${payload._id}`)
      dispatch('findAllCredits', {
        page: state.pagination.page,
        limit: state.pagination.perPage
      })
      sendSuccessMessage('Credit deleted!')
    } catch (error) {
      sendErrorMessage("Can't delete credit :(")
    }
  }
}
