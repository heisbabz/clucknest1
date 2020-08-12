import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/main/dashboard',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
    // props: true,
    // beforeEnter: (to, from, next) => {
    //   if(to.params.name){
    //     next()
    //   }else {
    //     next({name: 'Login'})
    //   }
    // }
  },
  {
    path: '/register-success',
    name: 'RegistrationSuccess',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrationSuccess.vue'),
    beforeEnter: (to, from, next) => {
      if(to.params.name){
        next()
      }else {
        next({name: 'Register'})
      }
    }
  },
  {
    path: '/main/flock',
    name: 'Flock',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Flock.vue')
  },
  {
    path: '/main/expenses',
    name: 'Expenses',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Expenses.vue')
  },
  {
    path: '/main/income',
    name: 'Income',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Income.vue')
  },
  {
    path: '/main/medication',
    name: 'Medication',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Medication.vue')
  },
  {
    path: '/main/vaccination',
    name: 'Vaccination',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Vaccination.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
