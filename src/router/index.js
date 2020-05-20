import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../components/Profile.vue'
import Memes from '../components/Memes.vue'
import Register from '../components/Register'
import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'memes',
    component: Memes,
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { guestOnly: true },
  },
  {
    path: '*',
    component: Register
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.requiresAuth)
  let guestOnly = to.matched.some(record => record.meta.guestOnly)
  let currentUser = firebase.auth().currentUser

  console.log(currentUser)
  if (requireAuth && !currentUser) {
    console.log("Registrate compa")
    next('register')
  }
  else if(requireAuth && currentUser){
    console.log("A wachar memes")
    next()
  }
  else if (guestOnly && currentUser) {
    console.log("Tu ya tienes cuenta cabron")
    next({name:'memes'})
  }
  next()
})
//

export default router
