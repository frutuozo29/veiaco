<template>
<div id="login">
  <div class="container content">
    <div class="form-login">
      <b-form>
        <b-form-group>
          <br>
          <b-row class="justify-content-center" align-v="center">
            <img class="logo" src="../../assets/img/logo.png" alt="logo">
          </b-row>
        </b-form-group>
        <b-form-group>
          <b-row class="justify-content-center" align-v="center">
            <b-col cols="1">
              <i class="fas fa-user text-light"></i>
            </b-col>
            <b-col cols="10">
              <b-form-input v-model="form.username" cols="6" class="sm-4" type="text" placeholder="Username">
              </b-form-input>
            </b-col>
          </b-row>
        </b-form-group>
        <b-form-group>
          <b-row class="justify-content-center" align-v="center">
            <b-col cols="1">
              <i class="fas fa-lock text-light"></i>
            </b-col>
            <b-col cols="10">
              <b-form-input v-model="form.password" class="sm-8" type="password" placeholder="Password">
              </b-form-input>
            </b-col>
          </b-row>
        </b-form-group>
        <b-form-group class="row-buttons">
          <b-row class="justify-content-center" align-v="center">
            <b-col>
              <b-form-checkbox class="text-light" value="accepted" unchecked-value="not_accepted">
                Remember me
              </b-form-checkbox>
            </b-col>
            <b-col cols="4">
              <b-button class="text-light justify-content-end" variant="warning" @click="logar()">Login <i class="fas fa-sign-in-alt"></i></b-button>
            </b-col>
          </b-row>
        </b-form-group>
      </b-form>
    </div>

  </div>
</div>
</template>

<script>
import auth from "../../utils/auth";

export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async logar() {
      try {
        if (!this.formIsValid())
          return;

        let jsonData = JSON.stringify(this.form);
        let response = await this.$http.post("/auth", jsonData)
        auth.login(response.data);

      } catch (error) {
        this.$notify({
          type: "error",
          text: "There was an error on login :("
        })
      }
    },
    formIsValid() {
      if (this.form.username == "") {
        this.$notify({
          type: "error",
          text: "Enter a valid username."
        })
        return false;
      }

      if (this.form.password == "") {
        this.$notify({
          type: "error",
          text: "Enter a valid password."
        })
        return false;
      }
      return true;
    }
  },
}
</script>

<style scoped>
#login {
  background: linear-gradient(to bottom right, #ffc107, yellow);
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}

.content {
  top: 200px;
  position: relative;
}

.form-login {
  background-color: rgba(224, 224, 209, 0.5);
  width: 350px;
  height: 270px;
  margin: 0 auto;
  padding: 0;
}

.row-buttons {
  margin: 0 15px;
}
</style>
