<template>
  <v-app top-navbar>
    <header>
      <app-header />
    </header>
    <main>
      <v-content>
        <v-container fluid>
          <router-view />
          <app-modals />
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Modals from './components/Modals.vue'

export default {
  components: {
    'app-header': Header,
    'app-modals': Modals
  }
}
</script>

<style lang="stylus">
  @import './styles/main.stylus'
</style>