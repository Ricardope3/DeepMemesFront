import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../components/Profile.vue'
import Memes from '../components/Memes.vue'
import Register from '../components/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    // meta: { requireAuth: true }
  },
  {
    path: '/memes',
    name: 'memes',
    component: Memes, 
    // meta: { requireAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    // meta: { guestOnly: true },
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  // let currentUser = auth.user()
  // let requireAuth = to.matched.some(record => record.meta.requireAuth)
  // let guestOnly = to.matched.some(record => record.meta.guestOnly)

  // if (requireAuth && !currentUser) next('login')
  // else if (guestOnly && currentUser) next('memes')
  next()
})

export default router
