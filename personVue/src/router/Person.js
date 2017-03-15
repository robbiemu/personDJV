import People from '../components/Person/People.vue'
import Person from '../components/Person/Person.vue'

export const routes = [
  { name: 'People', path: '/people', component: People, 
    meta: { routable: true } },
  { name: 'Person', path: '/person/:crud/:id?', component: Person, 
    props: true, meta: { routable: false, authentication: true } },
]