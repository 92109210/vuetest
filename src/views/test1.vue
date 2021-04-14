<template>
  <div>
      {{ $store }}
      <!-- {{ $store.state1.count }} -->
        <button @click="plus">plus</button>
  </div>
</template>

<script>
export default {
    methods: {
        plus(){
            this.$store.commit('mutationsAddCount',1)
        }
    }
}
</script>

<style>

</style>