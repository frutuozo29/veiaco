<template>
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light menu">
    <img class="logo" src="../../assets/img/logo.png" routerLink="/" alt="logo">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle menu--item" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            Registers
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" routerLink="debts" href="#">Debts</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link menu--item" href="#">Moviments</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu--item" href="#">Reports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu--item" href="#">Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link menu--item" href="#">Configurations</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style>
.menu {
  background-color: orange;
  border-radius: 5px;
}

.menu--item {
  color: #eeff00 !important;
}

.logo {
  height: 55px;
  cursor: pointer;
  outline: none;
}
</style>
