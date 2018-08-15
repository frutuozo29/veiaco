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
    <b-table ref="table" :no-provider-sorting="true" small responsive :busy.sync="isBusy" :items="loadCredits" :fields="fields" :current-page="currentPage" :per-page="perPage">
      <template slot="date" slot-scope="data">
        {{ data.item.date | formatDate }}
      </template>
      <template slot="value" slot-scope="data">
        {{ data.item.value | formatMoney }}
      </template>
      <template slot="operations" slot-scope="data">
        <div class="d-flex justify-content-end align-items-center options">
          <b-button v-b-popover.hover="'Edit credit'" class="options-btn options-edit" variant="warning" size="sm" @click="editCredit(data.item)">
            <i class="fas fa-edit text-light"></i>
          </b-button>
          <b-button v-b-popover.hover="'Delete credit'" class="options-btn options-delete" variant="danger" size="sm" @click="confirmDelete(data.item)">
            <i class="fas fa-trash-alt text-light"></i>
          </b-button>
        </div>
      </template>
    </b-table>
    <b-pagination align="center" size="sm" :total-rows="countCredits" v-model="currentPage" :per-page="perPage">
    </b-pagination>
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
          key: 'date',
          sortable: true
        },
        {
          key: 'value',
          sortable: true
        },
        {
          key: 'operations'
        }
      ],
      credits: [],
      creditToDelete: {},
      currentPage: 1,
      perPage: 10,
      isBusy: false,
      countCredits: 0
    }
  },
  methods: {
    async loadCredits(ctx) {
      try {
        let response = await this.$http.get(`/credit?page=${ctx.currentPage}&perpage=${ctx.perPage}`);
        this.credits = response.data.credits;
        this.countCredits = response.data.count;
        return this.credits;
      } catch (error) {
        this.$notify({
          type: 'error',
          text: 'Can\'t fetch credits!'
        });
      }
    },
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
    async removeCredit(credit) {
      try {
        await this.$http.delete(`/credit/${credit._id}`);
        this.$refs.table.refresh();
        this.$notify({
          type: 'success',
          text: 'Credit deleted!'
        });
      } catch (error) {
        this.$notify({
          type: 'error',
          text: 'Can\'t delete credit'
        });
      }
    },
    modalOk() {
      if (this.creditToDelete)
        this.removeCredit(this.creditToDelete);
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
