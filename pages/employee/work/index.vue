<template>
  <div>
      <h1>{{water}}</h1>
      <button @click="addWater">add</button>
      <button @click="subWater">sub</button>
  </div>
</template>

<script>
    export default {
        computed : {
            water(){
                return this.$store.state.water;
            },

            // remainingTree(){

            // },
            
            // doneTree(){

            // }

        },
        methods: {
            addWater(){
                this.$store.dispatch('addWater')
            },
            subWater(){
                this.$store.dispatch('subWater')
            }
        }
    }
</script>