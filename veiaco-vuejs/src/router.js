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
      beforeEnter: requireAuth,
      meta: {
        breadcrumb: [
          {
            text: 'Dashboard',
            to: { name: 'home' }
          }
        ]
      }
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
      beforeEnter: requireAuth,
      meta: {
        breadcrumb: [
          {
            text: 'Dashboard',
            to: { name: 'home' }
          },
          {
            text: 'Debts',
            to: { name: 'debts' }
          }
        ]
      }
    },
    {
      path: '/debt/new',
      name: 'newdebt',
      component: DebtForm,
      beforeEnter: requireAuth,
      meta: {
        breadcrumb: [
          {
            text: 'Dashboard',
            to: { name: 'home' }
          },
          {
            text: 'Debts',
            to: { name: 'debts' }
          },
          {
            text: 'New Debt',
            to: { name: 'newdebt' }
          }
        ]
      }
    },
    {
      path: '/debt/edit/:id',
      name: 'editdebt',
      component: DebtForm,
      beforeEnter: requireAuth,
      meta: {
        breadcrumb: [
          {
            text: 'Dashboard',
            to: { name: 'home' }
          },
          {
            text: 'Debts',
            to: { name: 'debts' }
          },
          {
            text: 'Edit Debt',
            to: { name: 'editdebt' }
          }
        ]
      }
    },
    {
      path: '/credits',
      name: 'credits',
      component: Credit,
      beforeEnter: requireAuth,
      meta: {
        breadcrumb: [
          {
            text: 'Dashboard',
            to: { name: 'home' }
          },
          {
            text: 'Credits',
            to: { name: 'credits' }
          }
        ]
      }
    },
    {
      path: '/credits/new',
      name: 'newcredit',
      component: CreditForm,
      beforeEnter: requireAuth,
      meta: {
        breadcrumb: [
          {
            text: 'Dashboard',
            to: { name: 'home' }
          },
          {
            text: 'Credits',
            to: { name: 'credits' }
          },
          {
            text: 'New Credit',
            to: { name: 'newcredit' }
          }
        ]
      }
    },
    {
      path: '/credits/edit/:id',
      name: 'editcredit',
      component: CreditForm,
      beforeEnter: requireAuth,
      meta: {
        breadcrumb: [
          {
            text: 'Dashboard',
            to: { name: 'home' }
          },
          {
            text: 'Credits',
            to: { name: 'credits' }
          },
          {
            text: 'Edit Credit',
            to: { name: 'editcredit' }
          }
        ]
      }
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
