<template>
<div id="app">
  <vue-progress-bar>
  </vue-progress-bar>
  <notifications/>
  <div v-if="loggedIn">
    <MenuBar />
    <div class="container">
      <br>
      <Breadcrumb />
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
import Breadcrumb from "./components/common/breadcrumb/Breadcrumb.vue";
import auth from "./utils/auth";

export default {
  components: {
    MenuBar,
    FooterBar,
    Breadcrumb
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
  mounted() {
    this.$Progress.finish();
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
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif !important;
  font-size: 1rem !important;
  font-weight: 400 !important;
  line-height: 1.5 !important;
  margin: 0;
  /*background-color: #eaeaeb !important;*/
}
</style>
