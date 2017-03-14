<template>
  <div class="component text-xs-center">
    <v-modal v-model="modals.login" v-on:click.native.stop="outClick($event, 'login')">
      <v-card>
        <v-card-text>
          <h2 class="title">Login</h2>
        </v-card-text>
        <v-card-text class="subheading grey--text">Please Enter dev/dev or your own user/password</v-card-text>
          <app-login />
        <v-card-row actions>
          <v-spacer></v-spacer>
          <v-btn flat v-on:click.native="action('goRegister','login')" class="primary--text">Register</v-btn>
          <v-btn flat v-on:click.native.stop="toggleModal('login')" class="primary--text">Cancel</v-btn>
        </v-card-row>
      </v-card>
    </v-modal>
    <v-modal v-model="modals.redirect" v-on:click.native.stop="outClick($event, 'redirect')" bottom>
      <v-card class="secondary white--text">
        <v-card-text class="subheading white--text">
          <v-row>
            <v-col xs10>
              A login is required!
            </v-col>
            <v-col xs2>
                <v-btn primary dark v-on:click.native.stop="toggleModal('redirect')">Close</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-modal>
  </div>
</template>

<script>
import {mapState} from 'vuex'

import Login from './Auth/Login.vue'
import {methods as modalMethods} from '../store/Modals'

// vuetify is still changing rapidly. currently they use buble instead of babel
// because of a problem that no longer is relevant. I expect they will change 
// back. In the meantime, buble is mangling spread operator so I have to do it
// this way
const methods = Object.assign({
    action (what) {
      switch (what) {
        case 'login':
          this.toggleModal('login')
          break
        case 'goRegister':
          this.toggleModal(arguments[1])
          this.$router.push({name: 'Register'}) 
      }
    },
    outClick (event, which) {
      if (event.target.classList.contains('overlay--active'))
        this.dismissModal(which)
    }
  }, modalMethods)

export default {
  computed: mapState(['modals']),
  methods,
  components: {
    'app-login': Login
  }
}
</script>