<template>
  <div class="links">
    <h1><b>Counter: {{mark}}</b></h1>
    <br>

    <a class="button--green" @keyup.enter="addToMark" @click="addToMark">Add</a>
    <a class="button--grey" @click="subToMark">Sub</a>
  </div>
</template>
<script>
  import {
    mapMutations
  } from 'vuex'

  export default {
    computed: {
      mark() {
        return this.$store.state.mark.counter
      }
    },
    methods: {
      addToMark(e) {
        this.$store.commit('mark/add', e.target.value)
        e.target.value = ''
      },
      subToMark(e) {
        this.$store.commit('mark/sub', e.target.value)
        e.target.value = ''
      },

    }
  }

</script>

<style>
  .done {
    text-decoration: line-through;
  }

</style>
