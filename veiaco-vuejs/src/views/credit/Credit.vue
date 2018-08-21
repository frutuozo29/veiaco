<template>
<div>
  <b-modal ref="modalConfirmDelete" size="sm" centered :ok-variant="'outline-danger'" :ok-title="'Confirm'" :cancel-variant="'outline-secondary'" :header-bg-variant="'warning'" :header-text-variant="'light'" title="Veiaco" @ok="modalOk()">
    <p>Are you sure you want to delete this credit?</p>
  </b-modal>
  <b-container>
    <!-- Header -->
    <header class="d-flex justify-content-between align-items-center rounded-top">
      <div>
        <b-button class="btn-new-client" variant="outline-warning" @click="addCredit()">
          <i class="fas fa-plus"></i> New Credit
        </b-button>
      </div>
    </header>
    <br>
    <!-- Table -->
    <b-table ref="table" small fixed responsive :items="allCredits" :fields="fields" :per-page="pagination.perPage">
      <template slot="date" slot-scope="data">
        {{ data.item.date | formatDate }}
      </template>
      <template slot="value" slot-scope="data">
        {{ data.item.value | formatMoney }}
      </template>
      <template slot="operations" slot-scope="data">
        <div class="d-flex justify-content-center align-items-center options">
          <b-button v-b-popover.hover="'Edit credit'" class="options-btn options-edit" variant="warning" size="sm" @click="editCredit(data.item)">
            <i class="fas fa-edit text-light"></i>
          </b-button>
          <b-button v-b-popover.hover="'Delete credit'" class="options-btn options-delete" variant="danger" size="sm" @click="confirmDelete(data.item)">
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
import {
  mapGetters,
  mapState,
  mapActions
} from 'vuex'

export default {
  data() {
    return {
      creditToDelete: {}
    }
  },
  mounted() {
    const page = this.pagination.page
    const limit = this.pagination.perPage
    this.findAllCredits({
      page,
      limit
    })
  },
  computed: {
    ...mapGetters('credit', [
      'allCredits'
    ]),
    ...mapState('credit', [
      'fields',
      'pagination'
    ])
  },
  
  methods: {
    ...mapActions('credit', [
      'findAllCredits',
      'deleteCredit'
    ]),
    addCredit() {
      this.$router.push({
        name: "newcredit"
      });
    },
    editCredit(credit) {
      this.$router.push({
        name: "editcredit",
        params: {
          id: credit._id
        }
      })
    },
    changePage(page) {
      const limit = this.pagination.perPage
      this.findAllCredits({
        page,
        limit
      })
    },
    modalOk() {
      if (this.creditToDelete)
        this.deleteCredit(this.creditToDelete);
      this.creditToDelete = undefined;
    },
    confirmDelete(credit) {
      this.creditToDelete = credit;
      this.$refs.modalConfirmDelete.show();
    }
  },
}
</script>

<style scoped>
button + button {
  margin-left: 3px;
}

.btn-new-client:hover {
  color: white;
}
</style>
