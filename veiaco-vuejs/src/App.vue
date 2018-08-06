<template>
  <div id="app">
    <menu-bar></menu-bar>
    <footer-bar></footer-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import MenuBar from './components/menu/MenuBar.vue';
import FooterBar from './components/footer/FooterBar.vue';

@Component({
  components: {
    HelloWorld,
    MenuBar,
    FooterBar,
  },
})
export default class App extends Vue {}
</script>

<style>

</style>
