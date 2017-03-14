import NotFound from '../components/defaults/404.vue'
import Forbidden from '../components/defaults/403.vue'

export const routes = [
  { name: 'error-404', path: '/404', component: NotFound, 
    meta: { routable: false } },
  { name: 'error-403', path: '/403', component: Forbidden, 
    meta: { routable: false } },
  { path: '*', redirect: '/404', meta: { routable: false } }
]
