<template>
  <ul>
    <li v-for="tree in treelist" :key="tree.index">
      <a class="btn btn-primary">{{tree.name}}</a>
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
