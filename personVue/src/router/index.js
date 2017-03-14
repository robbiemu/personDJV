import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'

import { store } from '../store'

import {routes as personRoutes} from './Person'
import {routes as authRoutes} from './Auth'
import {routes as defaultRoutes} from './Defaults'

import Home from '../components/Home.vue'

Vue.use(VueRouter)

export const routes = [
  { name: 'Home', path: '/', component: Home, meta: { routable: true } },
  ...authRoutes,
  ...personRoutes,
  ...defaultRoutes
]

export const router = new VueRouter({
  mode: 'history',
  routes
})

sync(store, router)