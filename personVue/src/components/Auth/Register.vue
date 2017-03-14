<template>
  <div class="component route">
      <h6>Register an Account</h6><br>
      <form @submit.prevent="validateBeforeSubmit" v-if="!formSubmitted">
        <div class="form-group">
          <input type="text" name="first" placeholder="Firstname" 
            v-validate.initial="'required'" :class="{'mark': errors.has('first') }"
            v-model="registration.first_name" />
          <input type="text" name="last" placeholder="Lastname" 
            v-validate.initial="'required'" :class="{'mark': errors.has('last') }"
            v-model="registration.last_name" />
        </div>
        <input type="email" name="email" placeholder="Email" 
          v-validate.initial="'required|email'" :class="{'mark': errors.has('email') }"
          v-model="registration.email" />
        <div class="form-group">
          <input type="text" name="user" placeholder="Username" 
            v-validate.initial="'required|min:3'" :class="{'mark': errors.has('user') }"
            v-model="registration.username" />
          <input type="password" name="pass" placeholder="Password" 
            v-validate.initial="'required|min:3'" :class="{'mark': errors.has('pass') }"
            v-model="registration.password" />
          <input type="password" name="confirmation" placeholder="confirm" 
            v-validate.initial="'required|confirmed:pass'" 
            :class="{'mark': errors.has('confirmation') }" />
        </div>
        <v-btn type="submit" flat v-on:click.native="register($store, registration)" class="primary--text" :disabled="!isValid()">Login</v-btn>
      </form>
  </div>
</template>

<script>
import {methods as authMethods} from '../../store/Auth'

const methods = Object.assign({
  isValid() {
    return !this.errors.any()
  },
  validateBeforeSubmit () {
    this.$validator.validateAll().then(() => {
      this.submitForm()
    }).catch((e) => {
      console.error('[app] Registration.vue - error: ', e)
    })
  },
  submitForm(){
    this.formSubmitted = true
  }
}, authMethods)

export default {
  data () {
    return {
      formSubmitted: false,
      registration: {
        first_name: undefined,
        last_name: undefined,
        username: undefined,
        email: undefined,
        password: undefined,
        people: []
      }
    }
  },
  methods 
}
</script>

<style lang="stylus" scoped>
  @import '../../styles/main.stylus'

  input.mark
    border-bottom: solid thin $theme.error
</style>