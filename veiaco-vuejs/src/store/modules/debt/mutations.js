import { SET_PAGINATION, SET_ALL_DEBTS } from './mutation-types'

export default {
  [SET_ALL_DEBTS]: (state, payload) => {
    state.debts = payload
  },
  [SET_PAGINATION]: (state, payload) => {
    state.pagination.page = payload.page
    state.pagination.totalRows = payload.totalRows
  }
}
