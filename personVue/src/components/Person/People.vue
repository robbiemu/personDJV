<template>
  <div class="component route">
    {{$store.state.route.path}}
  </div>
</template>

<script>
import {methods} from '../../store/Auth'

export default {
  methods,
  mounted () {
    this.getPeople(this.$store)
  }
}
</script>