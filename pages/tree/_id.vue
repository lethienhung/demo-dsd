<template>
  <section class="container">
    <ul>
      <li v-if="percentage>=10" :style="{color: alive, fontSize: fontSize + 'px'}">Cây:{{tree.name}}</li>
      <li v-else :style="{color: dead, fontSize: fontSize + 'px'}">Cây: {{tree.name}}</li>
      <li>Tuổi:{{tree.age}}</li>

      <li>Vị trí:{{tree.lat}}</li>

      <li>Vị trí:{{tree.long}}</li>
      <li v-if="tree.status==='Sống'" :style="{color: 'blue'}">Tình trạng:{{tree.status}}</li>

      <li v-else :style="{color: 'red'}">Tình trạng:{{tree.status}}</li>
    </ul>
    <div v-if="percentage<10 & tree.status==='Sống'">
      <h1>
        <b>Percentage: {{percentage}}</b>
      </h1>
      <br>
      <a class="button--green" @keyup.enter="addToPercentage" @click="addToPercentage">Add</a>
      <a class="button--grey" @click="subToPercentage">Sub</a>
    </div>
    <button v-if="tree.status==='Sống'" @click="markAsDead">Đã chết</button>
  </section>
</template>

<script>
  import axios from 'axios'
  import {
    mapMutations
  } from 'vuex'

  export default {
    data() {
      return {
        alive: 'green',
        dead: 'red',
        fontSize: 25
      }
    },
    computed: {
      percentage() {
        return this.$store.state.water.percentage
      },

    },

    mounted() {
      // if (this.percentage < 10) {
      //   alert('Pleaseeeee, i need some water!')
      // }

    },
    methods: {
      addToPercentage(e) {
        this.$store.commit('water/add', e.target.value)
        e.target.value = ''
        if (this.percentage >= 10) {
          alert('Yayyy!! Its alive!');
        }
      },
      subToPercentage(e) {
        this.$store.commit('water/sub', e.target.value)
        e.target.value = ''
      },

      markAsDead() {
        this.status = "Chết";
        alert('Đã đánh dấu cây chết')
      }
    },

    validate({
      params
    }) {
      return !isNaN(+params.id)
    },
    async asyncData({
      params
    }) {
      // We can use async/await ES6 feature
      let {
        data
      } = await axios.get(`https://my-json-server.typicode.com/chubi142/demo-dsd/tree/${params.id}`)
      return {
        tree: data
      }
    },

    head() {
      return {
        title: this.tree.name
      }
    }
  }

</script>

<style>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

</style>
