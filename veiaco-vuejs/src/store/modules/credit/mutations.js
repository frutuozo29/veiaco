import { SET_PAGINATION, SET_ALL_CREDITS } from './mutation-types'

export default {
  [SET_ALL_CREDITS]: (state, payload) => {
    state.credits = payload
  },
  [SET_PAGINATION]: (state, payload) => {
    state.pagination.page = payload.page
    state.pagination.totalRows = payload.totalRows
  }
}
