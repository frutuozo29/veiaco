import { SET_PAGINATION, SET_ALL_USERS } from "./mutation-types";

export default {
  [SET_ALL_USERS]: (state, payload) => {
    state.debts = payload;
  },
  [SET_PAGINATION]: (state, payload) => {
    state.pagination.page = payload.page;
    state.pagination.totalRows = payload.totalRows;
  }
};
