<template>
  <div>
    <ul>
      <li v-for="tree in filteredTree" :key="tree.treeId">{{tree.name}} -
        <h1>{{tree.capacity}}</h1>
        <button @click="tree.capacity++">add</button>
        <button @click="tree.capacity--">sub</button>
      </li>
    </ul>

  </div>
</template>

<script>
  import fetch from 'isomorphic-fetch'
  export default {

    async asyncData() {
      const response = await fetch('https://fir-dsd.firebaseio.com/tree.json')
      const listsTree = await response.json();
      return {
        listsTree
      }
    },
    computed: {
      filteredTree() {
        return this.listsTree.filter((tree) => {
          return tree.treeId > 5;
        });
      },
      water() {
        return this.$store.state.water;
      }

    },
    methods: {
      addWater() {
        this.$store.dispatch('addWater')

      },
      subWater() {
        this.$store.dispatch('subWater')
      }
    }
  }

</script>
