<template>
  <div class="component route">
    <app-person v-for="person in people" :id="person.id" />
  </div>
</template>

<script>
import {mapState} from 'vuex'

import Person from './Person.vue'
import {methods} from '../../store/Person'

export default {
  methods,
  computed: mapState({ people: state => state.person.people  }),
  components: {
    'app-person': Person
  },
  mounted () {
    this.getPeople(this.$store)
  }
}
</script>