import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import crimeList from '../views/crimeList.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'crimeList',
    component: crimeList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
