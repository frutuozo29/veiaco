<template>
<div id="app">
  <MenuBar />
  <div class="container">
    <router-view></router-view>
  </div>
  <FooterBar />
</div>
</template>

<script>
import MenuBar from "./components/common/menu/MenuBar.vue";
import FooterBar from "./components/common/footer/FooterBar.vue";

export default {
  components: {
    MenuBar,
    FooterBar
  }
}
</script>

<style>
</style>
