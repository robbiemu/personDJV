import Vue from 'vue'
import Vuex from 'vuex'

import modals from './Modals'
import auth from './Auth'
import person from './Person'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: { modals, auth, person }
})
