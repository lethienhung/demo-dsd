<template>
  <div class="container">
    <h1>{{ post.title }}</h1>
    <pre>{{ post.body }}</pre>
    <h4>{{post.counter}}</h4>
    <button @click="addCounter">Add</button>
    <p>
      <nuxt-link to="/posts">Back to the list</nuxt-link>
    </p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    async asyncData({
      params
    }) {
      // We can use async/await ES6 feature
      let {
        data
      } = await axios.get(`https://my-json-server.typicode.com/chubi142/demo-dsd/posts/${params.id}`)
      return {
        post: data
      }
    },
    head() {
      return {
        title: this.post.title
      }
    },

    methods: {
      addCounter() {
        return this.post.counter++;
      }
    }
  }

</script>

<style scoped>
  .container {
    width: 70%;
    margin: auto;
    text-align: center;
    padding-top: 100px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    border: 1px #ddd solid;
    padding: 20px;
    text-align: left;
  }

  ul li a {
    color: gray;
  }

  p {
    font-size: 20px;
  }

  a {
    color: #41B883;
  }

</style>
