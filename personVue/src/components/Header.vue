<template>
  <nav class="component">
    <v-toolbar>
      <v-toolbar-side-icon @click.native.stop="sidebarShowing = !sidebarShowing"  />
      <v-toolbar-logo>Person</v-toolbar-logo>
      <v-toolbar-items>
        <v-menu bottom origin="top right" transition="v-scale-transition">
          <v-btn dark icon slot="activator">
            <v-icon>more_vert</v-icon>
          </v-btn>
          <v-list>
            <v-list-item>
              <v-list-tile @click.native="toggleModal('login')" v-if="!isAuthenticated">
                <v-list-tile-title>Login</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click.native="logout($store);$router.push('/')" v-else>
                <v-list-tile-title>Log Out</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <v-sidebar drawer v-model="sidebarShowing">
      <v-list dense>
        <v-list-item v-for="route in routes" v-if="route.meta.routable">
          <v-list-tile class="clickable link" 
              :class="{'active-route': $route.name===route.name}"
              :href="{name: route.name}" router ripple>
            <v-list-tile-title v-text="route.name" />
          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-sidebar>
    </nav>
</template>

<script>
import {mapState} from 'vuex'

import {routes} from '../router'
import {methods as modalsMethods} from '../store/Modals'
import {methods as authMethods} from '../store/Auth'

const methods = Object.assign({}, modalsMethods, authMethods)

export default {
  data () {
    return {
      routes,
      sidebarShowing: false
    }
  },
  computed: {
    isAuthenticated: mapState({isAuthenticated: state => 
      state.auth.isAuthenticated}).isAuthenticated
  },
  methods
}
</script>

<style lang="stylus" scoped>
  @import '../styles/main.stylus'

  .clickable.link:not(.active-route),
  .clickable.link:not(.active-route) > div 
    color: white !important
  .clickable.link.active-route > div
    font-weight: 700 !important
    font-size: 1.2rem
    color: $theme.accent 
</style>