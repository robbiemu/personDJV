<template>
  <div class="component">
    <div class="loginmodal-container">
      <h6>Login to Your Account</h6><br>
      <input type="text" name="user" placeholder="Username" v-model="username">
      <input type="password" name="pass" placeholder="Password" v-model="password">
      <v-btn flat v-on:click.native="login($store, {username, password});toggleModal('login')" class="primary--text">Login</v-btn>
    </div>
  </div>
</template>

<script>
import {methods as authMethods} from '../../store/Auth'
import {methods as modalsMethods} from '../../store/Modals'

const methods = Object.assign({}, authMethods, modalsMethods)

export default {
  data () {
    return {
      username: undefined,
      password: undefined
    }
  },
  methods 
}
</script>