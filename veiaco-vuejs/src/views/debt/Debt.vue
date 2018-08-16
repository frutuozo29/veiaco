<template>
<div>
  <b-modal ref="modalConfirmDelete" size="sm" centered :ok-variant="'outline-danger'" :ok-title="'Confirm'" :cancel-variant="'outline-secondary'" :header-bg-variant="'warning'" :header-text-variant="'light'" title="Veiaco" @ok="modalOk()">
    <p>Are you sure you want to delete this debt?</p>
  </b-modal>
  <b-container>
    <!-- Header -->
    <header class="d-flex justify-content-between align-items-center rounded-top">
      <div>
        <b-button class="btn-new-client" variant="outline-warning" @click="addDebt()">
          <i class="fas fa-plus"></i> New Debt
        </b-button>
      </div>
    </header>
    <br>
    <!-- Table -->
    <b-table ref="table" small fixed responsive :items="allDebts" :fields="fields" :per-page="pagination.perPage">
      <template slot="date" slot-scope="data">
        {{ data.item.date | formatDate }}
      </template>
      <template slot="value" slot-scope="data">
        {{ data.item.value | formatMoney }}
      </template>
      <template slot="operations" slot-scope="data">
        <div class="d-flex justify-content-end align-items-center options">
          <b-button v-b-popover.hover="'Edit debt'" class="options-btn options-edit" variant="warning" size="sm" @click="editDebt(data.item)">
            <i class="fas fa-edit text-light"></i>
          </b-button>
          <b-button v-b-popover.hover="'Delete debt'" class="options-btn options-delete" variant="danger" size="sm" @click="confirmDelete(data.item)">
            <i class="fas fa-trash-alt text-light"></i>
          </b-button>
        </div>
      </template>
    </b-table>
    <b-pagination align="center" size="sm" :total-rows="pagination.totalRows" @change="changePage" v-model="pagination.page" :per-page="pagination.perPage" :limit="3">
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

import * as types from '../../store/modules/debt/mutation-types'
export default {
  data() {
    return {
      debtToDelete: {},
      isBusy: false
    }
  },
  created() {
    console.log('criou')
  },
  mounted() {
    const page = this.pagination.page
    const limit = this.pagination.perPage
    this.findAllDebts({
      page,
      limit
    })
  },
  computed: {
    ...mapGetters('debt', [
      'allDebts'
    ]),
    ...mapState('debt', [
      'fields',
      'pagination'
    ])
  },
  methods: {
    ...mapActions('debt', [
      'findAllDebts'
    ]),
    addDebt() {
      this.$router.push({
        name: "newdebt"
      });
    },
    editDebt(debt) {
      this.$router.push({
        name: "editdebt",
        params: {
          id: debt._id
        }
      })
    },
    changePage(page) {
      const limit = this.pagination.perPage
      this.findAllDebts({
        page,
        limit
      })
      this.$refs.table.refresh()
    },
    async removeDebt(debt) {
      try {
        await this.$http.delete(`/debt/${debt._id}`);
        this.$refs.table.refresh();
        this.$notify({
          type: 'success',
          text: 'Debt deleted!'
        });
      } catch (error) {
        this.$notify({
          type: 'error',
          text: 'Can\'t delete debt'
        });
      }
    },
    modalOk() {
      if (this.debtToDelete)
        this.removeDebt(this.debtToDelete);
      this.debtToDelete = undefined;
    },
    confirmDelete(debt) {
      this.debtToDelete = debt;
      this.$refs.modalConfirmDelete.show();
    }
  }
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
