<template>
<div>
  <b-container>
    <div v-if="errors.length > 0">
      <b-alert show variant="danger">
        <ul>
          <li v-for="item of errors" :key="item">{{ item }}</li>
        </ul>
      </b-alert>
    </div>
    <br>
    <b-form>
      <b-col md="6">
        <b-form-group label="Name:" label-for="nameinput">
          <b-form-input id="nameinput" type="text" v-model="form.name" required placeholder="Enter name">
          </b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group label="Email:" label-for="emailinput">
          <b-form-input id="emailinput" type="text" v-model="form.email" required placeholder="Enter email">
          </b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group label="Username:" label-for="usernameinput">
          <b-form-input id="usernameinput" type="text" v-model="form.username" required placeholder="Enter username">
          </b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="4">
        <b-form-group label="Password:" label-for="passwordinput">
          <b-form-input id="passwordinput" type="password" v-model="form.password" required placeholder="Enter password">
          </b-form-input>
        </b-form-group>
      </b-col>
      <b-button type="submit" variant="outline-primary" @click.stop.prevent="save()">Save</b-button>
      <b-button type="reset" variant="outline-danger" @click="cancel()">Cancel</b-button>
    </b-form>
  </b-container>
</div>
</template>

<script>
import moment from "moment";
import { mapActions } from "vuex";
import { sendErrorMessage } from "../../utils/notify";

export default {
  beforeMount() {
    let id = this.$route.params.id;
    if (id) {
      this.editing = true;
      this.loadUser(id);
    }
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        username: "",
        password: ""
      },
      editing: false,
      errors: []
    };
  },
  computed: {
    title() {
      return this.editing ? "Edit User" : "New User";
    }
  },
  methods: {
    ...mapActions("user", ["createUser", "updateUser"]),
    formatToDateOnly(value, event) {
      return moment
        .utc(value)
        .locale("pt-br")
        .format("YYYY-MM-DD");
    },
    async loadUser(id) {
      try {
        let response = await this.$http.get(`/user/${id}`);
        this.form = response.data;
      } catch (error) {
        sendErrorMessage("There was an error editing user!");
        this.$router.go(-1);
      }
    },
    save() {
      this.validateForm();
      if (this.errors.length > 0) return;
      if (this.editing) {
        this.updateUser({
          id: this.$route.params.id,
          user: this.form
        });
      } else {
        this.createUser(this.form);
      }
      this.$router.go(-1);
    },
    cancel() {
      this.$router.go(-1);
    },
    validateForm() {
      this.errors = [];
    }
  }
};
</script>

<style scoped>
button + button {
  margin-left: 3px;
}
</style>
