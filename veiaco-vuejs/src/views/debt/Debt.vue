<template>
<div>
  <b-container>
    <!-- Header -->
    <header class="d-flex justify-content-between align-items-center rounded-top">
      <div>
        <h2 class="title">Debts</h2>
      </div>
      <div>
        <b-button class="btn-new-client" variant="outline-secondary" @click="addDebt()">
          <i class="fas fa-plus"></i> New Debt
        </b-button>
      </div>
    </header>

    <!-- Table -->
    <b-table class="clients-table" responsive :items="debts" :fields="fields">
      <template slot="options" slot-scope="data">
        <div class="d-flex justify-content-end align-items-center options">
          <b-button class="options-btn options-edit" variant="warning" size="sm" @click="editDebt(data.item)">
            <i class="fas fa-edit"></i>
          </b-button>
          <b-button class="options-btn options-delete" variant="danger" size="sm" @click="removeDebt(data.item)">
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
      debts: []
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
        console.error(error);
      }
    },
    addDebt() {
      this.$notify({
        type: 'error',
        text: 'Can\'t fetch debts'
      });
    },
    editDebt() {

    },
    removeDebt() {

    }
  },
}
</script>

<style scoped>

</style>
