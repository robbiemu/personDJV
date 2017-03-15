import Vue from 'vue'

import  {contracts} from '../API'

export const methods = {
  getPeople(context) {
    Vue.axios.get(contracts.people.uri, context.state.auth.token)
      .then(res => context.dispatch('SET PEOPLE', res.data))
      .catch(e => {throw(e)})
  },
/*  async updatePerson(context, person) {
    const config = Object.assign({}, contracts.register.config)
    config.headers.Authorization = 'JWT ' + context.state.auth.token 

    await Vue.axios.put(contract.people.uri + person.id + '/', person, config)
  } */
  updatePerson: function updatePerson(context, person) {
    if(!context.state.auth.token)
      return // error you should log in
    var config;
    return Promise.resolve().then(function () {
      config = Object.assign({}, contracts.register.config);
      config.headers.Authorization = 'JWT ' + context.state.auth.token

      return Vue.axios.put(contracts.people.uri + person.id + '/', 
        person, config);
    }).then(function (res) {
      if (res.data.detail && (res.data.detail === 'Not found.'))
        return // tell the user they can't edit that with their user id
      context.dispatch('UPDATE PERSON', res.data)
    });
  },
  /* async addPerson (context, person) {
    const config = Object.assign({}, contracts.register.config)
    config.headers.Authorization = 'JWT ' + context.state.auth.token

    const res = await Vue.axios.post(contract.people.uri, person, config)
      if (res.data.detail && res.data.detail === 'Not found.')
        return // tell the user they can't edit that with their user id
      context.dispatch('ADD PERSON', res.data)    
  } */
  addPerson: function addPerson(context, person) {
    if(!context.state.auth.token)
      return // error you should log in

    var config, res;
    return Promise.resolve().then(function () {
      config = Object.assign({}, contracts.register.config);
      config.headers.Authorization = 'JWT ' + context.state.auth.token

      return Vue.axios.post(contracts.people.uri, person, config);
    }).then(function (_resp) {
      res = _resp;

      if (res.data.detail && (res.data.detail === 'Not found.'))
        return // tell the user they can't add a person with their user id
      context.dispatch('ADD PERSON', res.data);
    });
  }
}

export default {
  state: { people: [] },
  mutations: {
    setPeople: (state, people) => state.people = people,
    updatePerson: (state, person) => { // this cna be done in many ways but directly overwriting might be an issue with vue's observer
      let p = state.people.find(p => p.id === person.id)
      Object.keys(p).map(k => p[k] = person[k])
    },
    addPerson: (state, person) => state.people.push(person)
  },
  actions: {
    'SET PEOPLE': ({commit}, payload) => commit('setPeople', payload),
    'UPDATE PERSON': ({commit}, payload) => 
      commit('updatePerson', payload),
    'ADD PERSON': ({commit}, patyload) => commit('addPerson', payload)
  }
}