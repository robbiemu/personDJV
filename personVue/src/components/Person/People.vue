<template>
  <div class="component route">
    <app-person v-for="person in people" :id="person.id" />
    <v-btn floating="floating" class="primary action text--accent-2" v-if="isAuthenticated" 
      @click.native.stop="$router.push({name: 'Person', params: {crud: 'add'}})">
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import Person from './Person.vue'
import {methods} from '../../store/Person'

export default {
  methods,
  computed: mapState({ 
    people: state => state.person.people, 
    isAuthenticated: state => state.auth.isAuthenticated  }),
  components: {
    'app-person': Person
  },
  mounted () {
    this.getPeople(this.$store)
  }
}
</script>

<style scoped>
.action {
  position: fixed;
  bottom: 5vh;
  right: 5vw;
}
</style>