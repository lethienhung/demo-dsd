<template>
  <section class="container">
    <ul>
      <li v-if="percentage>=10" :style="{color: alive, fontSize: fontSize + 'px'}">Cây:{{name}}</li>
      <li v-else :style="{color: dead, fontSize: fontSize + 'px'}">Cây: {{name}}</li>
      <li>Tuổi:{{age}}</li>

      <li>Vị trí:{{lat}}</li>

      <li>Vị trí:{{long}}</li>
      <li v-if="status==='Sống'" v-elseif="status==='Chết'" :style="{color: 'blue'}">Tình trạng:{{status}}</li>

      <li v-else :style="{color: 'red'}">Tình trạng:{{status}}</li>
    </ul>
    <div v-if="percentage<10 & status==='Sống'">
      <h1>
        <b>Percentage: {{percentage}}</b>
      </h1>
      <br>
      <a class="button--green" @keyup.enter="addToPercentage" @click="addToPercentage">Add</a>
      <a class="button--grey" @click="subToPercentage">Sub</a>
    </div>
    <button v-if="status==='Sống'" @click="markAsDead">Đã chết</button>
  </section>
</template>

<script>
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

    asyncData({
      params,
      env,
      error
    }) {
      const tree = env.tree.find((tree) => String(tree.id) === params.id)
      if (!tree) {
        return error({
          message: 'Tree is dead',
          statusCode: 404
        })
      }
      return tree
    },

    head() {
      return {
        title: this.name
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
