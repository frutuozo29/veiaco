<template>
<div class="container">
  <b-navbar id="menubar" toggleable="lg" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand>
      <router-link to="/"><img class="logo" src="../../../assets/img/logo.png" alt="logo"></router-link>
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item-dropdown text="Registers" right>
          <b-dropdown-item to="/debts">Debts</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>Moviments</b-nav-item>
        <b-nav-item>Reports</b-nav-item>
        <b-nav-item>Configurations</b-nav-item>

      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item>Profile</b-dropdown-item>
          <b-dropdown-item to="/logout">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: "MenuBar"
};
</script>

<style>
a {
  outline: none;
}

#menubar {
  background-color: #ffc107 !important;
  border-radius: 5px;
}

.logo {
  height: 55px;
  cursor: pointer;
  outline: none;
}
</style>
