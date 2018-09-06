<template>
<div>
  <b-modal ref="modalConfirmDelete" size="sm" centered :ok-variant="'outline-danger'" :ok-title="'Confirm'" :cancel-variant="'outline-secondary'" :header-bg-variant="'warning'" :header-text-variant="'light'" title="Veiaco" @ok="modalOk()">
    <p>Are you sure you want to delete this user?</p>
  </b-modal>
  <b-container>
    <!-- Header -->
    <header class="d-flex justify-content-between align-items-center rounded-top">
      <div>
        <b-button class="btn-new-client" variant="outline-warning" @click="addUser()">
          <i class="fas fa-plus"></i> New User
        </b-button>
      </div>
    </header>
    <br>
    <!-- Table -->
    <b-table ref="table" small fixed responsive :items="allUsers" :fields="fields" :per-page="pagination.perPage">
      <template slot="operations" slot-scope="data">
        <div class="d-flex justify-content-center align-items-center options">
          <b-button v-b-popover.hover="'Edit user'" class="options-btn options-edit" variant="warning" size="sm" @click="editUser(data.item)">
            <i class="fas fa-edit text-light"></i>
          </b-button>
          <b-button v-b-popover.hover="'Delete user'" class="options-btn options-delete" variant="danger" size="sm" @click="confirmDelete(data.item)">
            <i class="fas fa-trash-alt text-light"></i>
          </b-button>
        </div>
      </template>
    </b-table>
    <b-pagination align="center" size="sm" :total-rows="pagination.totalRows" @change="changePage" v-model="pagination.page" :per-page="pagination.perPage">
    </b-pagination>
  </b-container>
</div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

import * as types from "../../store/modules/user/mutation-types";
export default {
  data() {
    return {
      userToDelete: {}
    };
  },
  mounted() {
    const page = this.pagination.page;
    const limit = this.pagination.perPage;
    this.findAllUsers({
      page,
      limit
    });
  },
  computed: {
    ...mapGetters("user", ["allUsers"]),
    ...mapState("user", ["fields", "pagination"])
  },
  methods: {
    ...mapActions("user", ["findAllUsers", "deleteUser"]),
    addUser() {
      this.$router.push({
        name: "newuser"
      });
    },
    editUser(user) {
      this.$router.push({
        name: "edituser",
        params: {
          id: user._id
        }
      });
    },
    changePage(page) {
      const limit = this.pagination.perPage;
      this.findAllUsers({
        page,
        limit
      });
    },
    modalOk() {
      if (this.userToDelete) this.deleteUser(this.userToDelete);
      this.userToDelete = undefined;
    },
    confirmDelete(user) {
      this.userToDelete = user;
      this.$refs.modalConfirmDelete.show();
    }
  }
};
</script>

<style scoped>
button + button {
  margin-left: 3px;
}

.btn-new-client:hover {
  color: white;
}
</style>
