<template>
  <div class="component route">
    {{$store.state.route.path}}
  </div>
</template>

<script>
export default {
  props: ['crud', 'id']
}
</script>
