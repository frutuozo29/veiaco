<template>
<div>
  <b-container>
    <header class="d-flex justify-content-between align-items-center rounded-top">
      <div>
        <h2 class="title text-warning">{{ title }}</h2>
      </div>
    </header>
    <br>
    <b-form>
      <b-form-group label="Name:" label-for="nameinput">
        <b-form-input id="nameinput" type="text" v-model="form.name" required placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Value:" label-for="valueinput">
        <b-form-input id="valueinput" type="number" v-model="form.value" required placeholder="Enter value">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="outline-primary" @click.stop.prevent="save()">Save</b-button>
      <b-button type="reset" variant="outline-danger" @click="cancel()">Cancel</b-button>
    </b-form>
  </b-container>
</div>
</template>

<script>
export default {
  beforeMount() {
    let id = this.$route.params.id;
    if (id) {
      this.editing = true;
      this.loadDebt(id);
    }
  },
  data() {
    return {
      form: {
        name: '',
        value: 0
      },
      editing: false
    }
  },
  computed: {
    title() {
      return this.editing ? 'Edit debt' : 'New Debt'
    }
  },
  methods: {
    async loadDebt(id) {
      try {
        let response = await this.$http.get(`/debt/${id}`);
        this.form = response.data.debt;
        console.log(response);
      } catch (error) {
        console.log(error)
        this.$notify({
          type: "error",
          text: "There was an error editing debt!"
        });
        this.$router.go(-1)
      }
    },
    async save() {
      try {
        let jsonData = JSON.stringify(this.form);
        if (this.editing) {
          let response = await this.$http.put(`/debt/${this.$route.params.id}`, jsonData);
          this.$notify({
            type: "success",
            text: "Debt updated!"
          })
        } else {
          let response = await this.$http.post('/debt', jsonData);
          this.$notify({
            type: "success",
            text: "Debt created!"
          })
        }
        this.$router.go(-1);
      } catch (error) {
        if (this.editing) {
          this.$notify({
            type: "error",
            text: "There was an error editing debt :("
          })
        } else {
          this.$notify({
            type: "error",
            text: "There was an error creating debt :("
          })
        }
      }
    },
    cancel() {
      this.$router.go(-1);
    }
  },
}
</script>

<style scoped>
button+button {
  margin-left: 3px;
}
</style>
