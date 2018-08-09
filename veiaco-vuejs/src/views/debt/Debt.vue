<template>
<div>
  <b-modal ref="modalConfirmDelete" size="sm" centered :ok-variant="'outline-danger'" :ok-title="'Confirm'" :cancel-variant="'outline-secondary'" :header-bg-variant="'warning'" :header-text-variant="'light'" title="Veiaco" @ok="modalOk()">
    <p>Are you sure you want to delete this debt?</p>
  </b-modal>
  <b-container>
    <!-- Header -->
    <header class="d-flex justify-content-between align-items-center rounded-top">
      <div>
        <h2 class="title text-warning">Debts</h2>
      </div>
      <div>
        <b-button class="btn-new-client" variant="outline-warning" @click="addDebt()">
          <i class="fas fa-plus"></i> New Debt
        </b-button>
      </div>
    </header>
    <br>
    <!-- Table -->
    <b-table striped small responsive :items="debts" :fields="fields">
      <template slot="options" slot-scope="data">
        <div class="d-flex justify-content-end align-items-center options">
          <b-button v-b-popover.hover="'Edit debt'" class="options-btn options-edit" variant="warning" size="sm" @click="editDebt(data.item)">
            <i class="fas fa-edit"></i>
          </b-button>
          <b-button v-b-popover.hover="'Delete debt'" class="options-btn options-delete" variant="danger" size="sm" @click="confirmDelete(data.item)">
            <i class="fas fa-trash-alt"></i>
          </b-button>
        </div>
      </template>
    </b-table>
  </b-container>
</div>
</template>

<script>
export default {
  data() {
    return {
      fields: [{
          key: 'name',
          sortable: true
        },
        {
          key: 'value',
          sortable: true
        },
        {
          key: 'options',
          label: ''
        }
      ],
      debts: [],
      debtToDelete: {}
    }
  },
  mounted() {
    this.loadDebts();
  },
  methods: {
    async loadDebts() {
      try {
        let response = await this.$http.get('/debt');
        this.debts = response.data.debts;
      } catch (error) {
        this.$notify({
          type: 'error',
          text: 'Can\'t fetch debts!'
        });
        console.error(error);
      }
    },
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
    async removeDebt(debt) {
      try {
        await this.$http.delete('/debt', {
          headers: {
            '_id': debt._id
          }
        });
        this.debts.splice(this.debts.indexOf(debt), 1);
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
  },
}
</script>

<style scoped>
button+button {
  margin-left: 3px;
}
</style>
