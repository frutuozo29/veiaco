import Vue from 'vue'
import Router from 'vue-router'
import auth from './utils/auth'
import Home from './views/home/Home.vue'
import Login from './views/login/Login.vue'
import Debt from './views/debt/Debt.vue'
import DebtForm from './views/debt/DebtForm.vue'
import Credit from './views/credit/Credit.vue'
import CreditForm from './views/credit/CreditForm.vue'

Vue.use(Router)

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

function redirectHome (to, from, next) {
  if (auth.loggedIn()) {
    next({
      path: '/'
    })
  } else {
    next()
  }
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: redirectHome
    },
    {
      path: '/debts',
      name: 'debts',
      component: Debt,
      beforeEnter: requireAuth
    },
    {
      path: '/debt/new',
      name: 'newdebt',
      component: DebtForm,
      beforeEnter: requireAuth
    },
    {
      path: '/debt/edit/:id',
      name: 'editdebt',
      component: DebtForm,
      beforeEnter: requireAuth
    },
    {
      path: '/credits',
      name: 'credits',
      component: Credit,
      beforeEnter: requireAuth
    },
    {
      path: '/credit/new',
      name: 'newcredit',
      component: CreditForm,
      beforeEnter: requireAuth
    },
    {
      path: '/credit/edit/:id',
      name: 'editcredit',
      component: CreditForm,
      beforeEnter: requireAuth
    },
    {
      path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/login')
      }
    }
  ],
  meta: {
    progress: {
      func: [
        { call: 'color', modifier: 'temp', argument: '#ffb000' },
        { call: 'fail', modifier: 'temp', argument: '#6e0000' },
        { call: 'location', modifier: 'temp', argument: 'top' },
        {
          call: 'transition',
          modifier: 'temp',
          argument: { speed: '1.5s', opacity: '0.6s', termination: 400 }
        }
      ]
    }
  }
})

export default router
