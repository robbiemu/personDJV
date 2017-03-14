import Vue from 'vue'

const contracts = {
  login: {
    uri: 'http://localhost:8000/api-auth/',
    config: { headers: { 'Content-Type': 'application/json' } }
  },
  register: {
    uri: 'http://localhost:8000/users/',
    config: { headers: { 'Content-Type': 'application/json' } }    
  },
  people: {
    uri: 'http://localhost:8000/people/',
    config: { headers: { 'Content-Type': 'application/json' } }    
  }
}

export const methods = {
  /* async getDefaultAuth (context) {
    const res = await Vue.axios.post(contracts.login.uri, {username: 'dev', password: 'dev'}, 
      contracts.login.config).catch(e => {throw(e)})
    if(!res.data.token) 
      throw('[Auth] Error - login request from server successful, but no token returned')
    context.dispatch('AUTH DEFAULT CONNECTION', res.data.token)
  }, */
  getDefaultAuth: function getDefaultAuth(context) {
    var res;
    return Promise.resolve().then(function () {
      return Vue.axios.post(contracts.login.uri, { username: 'dev', password: 'dev' }, contracts.login.config).catch(function (e) {
        throw e;
      });
    }).then(function (_resp) {
      res = _resp;

      if (!res.data.token) {
        throw '[Auth] Error - login request from server successful, but no token returned';
      }context.dispatch('AUTH DEFAULT CONNECTION', res.data.token);
    });
  },
  getPeople (context) {
    Vue.axios.get(contracts.people.uri, context.state.auth.token)
      .then(res => context.dispatch('SET PEOPLE', res.data))
      .catch(e => {throw(e)})
  },
  login (context, payload) {
    Vue.axios.post(contracts.login.uri, payload, 
      contracts.login.config).then(res => {
        if(!res.data.token) 
          throw('[Auth] Error - login request from server successful, but no token returned')
        context.dispatch('AUTH LOGIN', {token: res.data.token, user: res.data.user})
      }).catch(e => {throw(e)})
  },
  logout (context) {
    context.dispatch('AUTH LOGOUT')
  },
/*  async register (payload) {
    const self = this
    if (!Vue.state.auth.token && !Vue.state.auth.defaultToken) {
      await this.getDefaultAuth()
    }

    config = Object.assign({}, contracts.login.config)
    config.Authorization = 'JWT ' + 
      (Vue.state.auth.token ? 
        Vue.state.auth.token : Vue.state.auth.defaultToken)

    Vue.axios.post(contracts.register.uri, payload, config)
      .then(() => {
        self.login({
          username: payload.username, password: payload.password })
      })
      .catch(e => {throw(e)})
  } */
  register: function register(context, payload) {
    var self,
        _this = this;

    return Promise.resolve().then(function () {
      self = _this;

      if (!context.state.auth.token && !context.state.auth.defaultToken) {
        return _this.getDefaultAuth(context);
      }
    }).then(function () {
      const config = Object.assign({}, contracts.register.config);
      config.headers.Authorization = 'JWT ' + 
        (context.state.auth.token ? 
          context.state.auth.token : 
          context.state.auth.defaultToken);

      Vue.axios.post(contracts.register.uri, payload, config).then(function () {
        self.login(context, {
          username: payload.username, password: payload.password });
      }).catch(function (e) {
        throw e;
      });
    }).catch(function (e) {
        throw e;
    });
  }
}

export default {
  state: {
    user: {},
    isAuthenticated: false,
    token: undefined,
    defaultToken: undefined
  },
  mutations: {
    setDefaultToken: (state, token) => state.defaultToken = token,
    setUser: (state, payload) => {
      state.user = payload.user
      state.token = payload.token
      if (payload.user)
        state.isAuthenticated = true
    },
    unsetUser: state => {
      state.user = undefined
      state.isAuthenticated = false
    }
  },
  actions: {
    'AUTH DEFAULT CONNECTION': ({commit}, payload) => 
      commit('setDefaultToken', payload),
    'AUTH LOGIN': ({commit}, payload) => commit('setUser', payload),
    'AUTH LOGOUT': ({commit}) => commit('unsetUser')
  }
}