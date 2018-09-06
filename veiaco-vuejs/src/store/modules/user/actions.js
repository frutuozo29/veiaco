import api from "../../../utils/backend-api";
import { sendSuccessMessage, sendErrorMessage } from "../../../utils/notify";
import * as types from "./mutation-types";

export default {
  async findAllUsers({ commit }, { page, limit }) {
    try {
      const response = await api.get(`/user?page=${page}&perpage=${limit}`);
      const totalRows = response.data.count;
      commit(types.SET_ALL_USERS, response.data.users);
      commit(types.SET_PAGINATION, { page, totalRows });
    } catch (error) {
      commit(types.SET_ALL_USERS, []);
      commit(types.SET_PAGINATION, { page: page, totalRows: 0 });
      sendErrorMessage("Can't fetch users :(");
    }
  },
  async createUser({ commit }, payload) {
    try {
      const jsonData = JSON.stringify(payload);
      await api.post("/user", jsonData);
      sendSuccessMessage("User created!");
    } catch (error) {
      sendErrorMessage("There was an error creating user :(");
    }
  },
  async updateUser({ commit }, payload) {
    try {
      console.log(payload);
      const jsonData = JSON.stringify(payload.user);
      console.log(jsonData);
      await api.put(`/user/${payload.id}`, jsonData);
      sendSuccessMessage("User updated!");
    } catch (error) {
      sendErrorMessage("There was an error editing user :(");
    }
  },
  async deleteUser({ state, dispatch }, payload) {
    try {
      await api.delete(`/user/${payload._id}`);
      dispatch("findAllUsers", {
        page: state.pagination.page,
        limit: state.pagination.perPage
      });
      sendSuccessMessage("User deleted!");
    } catch (error) {
      sendErrorMessage("Can't delete user");
    }
  }
};
