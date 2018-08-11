<template>
<div id="app">
  <vue-progress-bar>
  </vue-progress-bar>
  <notifications/>
  <div v-if="loggedIn">
    <MenuBar />
    <div class="container">
      <br>
      <router-view></router-view>
    </div>
    <FooterBar />
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import MenuBar from "./components/common/menu/MenuBar.vue";
import FooterBar from "./components/common/footer/FooterBar.vue";
import auth from "./utils/auth";

export default {
  components: {
    MenuBar,
    FooterBar
  },
  created() {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn;
    };

    this.$Progress.start();
      this.$router.beforeEach((to, from, next) => {
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress;
          this.$Progress.parseMeta(meta);
        }
        this.$Progress.start();
        next();
      });
      
      this.$router.afterEach((to, from) => {
        this.$Progress.finish();
      });
  },
  data() {
    return {
      loggedIn: auth.loggedIn()
    }
  },
}
</script>

<style>
html,
body {
  margin: 0;
  /*background-color: #eaeaeb !important;*/
}
</style>
