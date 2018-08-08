import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home/Home.vue";
import Debt from "./views/debt/Debt.vue";
import DebtForm from "./views/debt/DebtForm.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    { 
      path: "/debts", 
      name: 'debts',
      component: Debt 
    },
    {
      path: "/debt/new",
      name: "newdebt",
      component: DebtForm
    },
    {
      path: "/debt/edit/:id",
      name: "editdebt",
      component: DebtForm
    }
  ]
});
