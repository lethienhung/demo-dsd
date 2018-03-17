<template>
  <div>
    <ul>
      <li v-for="tree in filteredTree" :key="tree.treeId">{{tree.name}}</li>
    </ul>
    <div :class="open ? 'modal is-active' : 'modal'">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Title</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body" v-for="(tree, index) in treeInfo" :key="index">
          <h1>{{tree.name}}</h1>
          <h1>{{tree.age}}</h1>
          <h1>{{tree.capacity}}</h1>
          <button @click="tree.capacity++">add</button>
        <button @click="tree.capacity--">sub</button>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button" @click="open = !open">Cancel</button>
        </footer>
      </div>
    </div>
    <gmap-map :center="center" :zoom="12" style="width: 1000px; height: 800px">
      <gmap-marker :key="index" 
                    v-for="(m, index) in filteredTree" 
                    :position="m.position" 
                    :clickable="true" 
                    :draggable="true" 
                    @click="openTreeInfo(m.treeId)">
      </gmap-marker>
    </gmap-map>

  </div>
</template>

<script>
  import fetch from 'isomorphic-fetch'
  import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'
  import Vue from 'vue'
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDYbi4Ucov5xv0lxTEvo8xplhJIuxOolZQ',
    }
  })
  export default {
    data() {
      return {
        center: {
          lat: 21.005052,
          lng: 105.854673
        },
        open: false,
        choosenTree: ''
      }
    },
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
          return tree.treeId > 2;
        });
      },
      water() {
        return this.$store.state.water;
      },
      treeInfo() {
        return this.listsTree.filter((tree) => {
          return tree.treeId == this.choosenTree;
        });
      }

    },
    methods: {
      addWater() {
        this.$store.dispatch('addWater')

      },
      subWater() {
        this.$store.dispatch('subWater')
      },
      openTreeInfo(treeId) {
        this.open = !this.open
        this.choosenTree = treeId
      }

    }
  }

</script>
