import {store} from '../store'

import Register from '../components/Auth/Register.vue'

export const routes = [
  { name: 'Register', path: '/register', component: Register, 
    meta: { routable: !store.state.auth.isAuthenticated } },
]