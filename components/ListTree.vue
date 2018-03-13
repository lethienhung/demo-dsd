<template>
  <ul>
    <li v-for="tree in treelist" :key="tree.index">
      <nuxt-link class="btn btn-primary" :to="{path: '/tree/'+tree.id }">{{tree.name}}</nuxt-link>
    </li>
  </ul>
</template>

<script>
  import {
    mapMutations
  } from 'vuex'
  import Tree from "~/components/Tree.vue"
  export default {
    computed: {
      treelist() {
        return this.$store.state.list_of_tree.treelist;
      }
    }
  }

</script>
