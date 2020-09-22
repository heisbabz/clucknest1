import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import RegistrationSuccess from '../views/RegistrationSuccess.vue'
import * as firebase from "firebase/app";
import "firebase/auth";

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
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: '/register-success',
    name: 'RegistrationSuccess',
    component: RegistrationSuccess,
    // beforeEnter: (to, from, next) => {
    //   if(to.params.name){
    //     next()
    //   }else {
    //     next({name: 'Register'})
    //   }
    // }
  },
  {
    path: '/main/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Dashboard.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/main/flock',
    name: 'Flock',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Flock.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/main/expenses',
    name: 'Expenses',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Expenses.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/main/income',
    name: 'Income',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Income.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/main/medication',
    name: 'Medication',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Medication.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/main/vaccination',
    name: 'Vaccination',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/Vaccination.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/register-survey',
    name: 'RegistrationSurvey',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrationSurvey.vue'),
    // meta: { requiresAuth: true },
  },
  {
    path: '/register-survey/new-farm',
    name: 'NewFarm',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewFarm.vue'),
    // meta: { requiresAuth: true },
  },
  {
    path: '/register-survey/existing-farm',
    name: 'ExistingFarm',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExistingFarm.vue'),
    // meta: { requiresAuth: true },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth )
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router
