import { SET_PAGE, SET_ALL_DEBTS, SET_TOTAL_ROWS } from './mutation-types'

export default {
  [SET_ALL_DEBTS]: (state, payload) => {
    state.debts = payload
  },
  [SET_TOTAL_ROWS]: (state, payload) => {
    state.pagination.totalRows = payload
  },
  [SET_PAGE]: (state, payload) => {
    state.pagination.page = payload
  }
}
