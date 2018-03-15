<template>
  <ul>
    <li v-for="tree in loadedTrees" :key="tree.treeId">
      <nuxt-link class="btn btn-primary" :to="{path: '/tree/'+tree.treeId }">{{tree.name}}</nuxt-link>
    </li>
  </ul>
</template>

<script>
  export default {
    computed: {
      loadedTrees() {
        return this.$store.getters.loadedTrees;
      }
    }
  }

</script>
