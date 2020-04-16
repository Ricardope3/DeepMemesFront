import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../components/Profile.vue'
import Memes from '../components/Memes.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/memes',
  },

  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/memes',
    name: 'memes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Memes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
