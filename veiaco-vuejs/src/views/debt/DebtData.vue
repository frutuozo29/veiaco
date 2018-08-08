<template>
<div>
  <b-container>
    <header class="d-flex justify-content-between align-items-center rounded-top">
      <div>
        <h2 class="title text-warning">New Debt</h2>
      </div>
    </header>
    <br>
    <b-form @submit.stop.prevent="onSubmit()" @reset="onReset()">
      <b-form-group label="Name:" label-for="nameinput">
        <b-form-input id="nameinput" type="text" v-model="form.name" required placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group label="Value:" label-for="valueinput">
        <b-form-input id="valueinput" type="number" v-model="form.value" required placeholder="Enter value">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="outline-primary">Save</b-button>
      <b-button type="reset" variant="outline-danger">Reset</b-button>
    </b-form>
  </b-container>
</div>
</template>

<script>
export default {
  mounted() {

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
  methods: {
    async onSubmit() {
      try {
        let jsonData = JSON.stringify(this.form);
        let result = await this.$http.post('/debt', jsonData);
        console.log(result);
        this.$notify({
          type: "success",
          text: "Debt created!"
        })
      } catch (error) {
        console.log(error)
        this.$notify({
          type: "error",
          text: "There was an error creating debt!"
        })
      }
    },
    onReset() {
      this.form.name = '';
      this.form.value = 0;
    }
  },
}
</script>

<style scoped>

button + button {
  margin-left: 3px;
}

</style>
