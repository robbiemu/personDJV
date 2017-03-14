import axios from 'axios'
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
import VeeValidate from 'vee-validate'

import AuthBearer from '@websanova/vue-auth/drivers/auth/bearer'
import AxiosConnector from '@websanova/vue-auth/drivers/http/axios.1.x.js'
import RouterConnector from '@websanova/vue-auth/drivers/router/vue-router.2.x.js'

import {router} from './router'
import {store} from './store'
import App from './App.vue'

Vue.router = router

Vue.use(VueAxios, axios)
Vue.use(VueAuth, {
  auth: AuthBearer,
  http: AxiosConnector,
  router: RouterConnector
})

Vue.use(Vuetify)

Vue.use(VeeValidate)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
