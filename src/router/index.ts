import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import crimeList from '../views/crimeList.vue'
import modalMobile from '../views/modalMobile.vue'
import newCrime from '../views/newCrime.vue'
import newWeapon from '../views/newWeapon.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'crimeList',
    component: crimeList
  },
  {
    path: '/new-crime',
    name: 'newCrime',
    component: newCrime
  },
  {
    path: '/modal-mobile',
    name: 'modalMobile',
    component: modalMobile
  },
  {
    path: '/new-weapon',
    name: 'newWeapon',
    component: newWeapon
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
