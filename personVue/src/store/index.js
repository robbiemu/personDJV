import Vue from 'vue'
import Vuex from 'vuex'

import modals from './Modals'
import auth from './Auth'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: { people: [] },
  mutations: {
    setPeople: (state, people) => state.people = people
  },
  actions: {
    'SET PEOPLE': ({commit}, payload) => commit('setPeople', payload)
  },
  modules: { modals, auth }
})