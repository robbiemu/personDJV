export const methods = {
  toggleModal (which) {
    this.$store.dispatch('TOGGLE MODAL', which)
  },
  dismissModal (which) {
    this.$store.dispatch('HIDE MODAL', which)
  }
}

export default {
  state: {
    login: false,
    redirect: false
  },
  mutations: {
    toggleModal: (state, which) => {
      state[which] = !state[which]
    },
    showModal: (state, which) => state[which] = true,
    hideModal: (state, which) => {
      state[which] = false
    },
  },
  actions: {
    'TOGGLE MODAL': ({commit}, payload) => commit('toggleModal', payload),
    'SHOW MODAL': ({commit}, payload) => commit('showModal', payload),
    'HIDE MODAL': ({commit}, payload) => commit('hideModal', payload),
  }
}