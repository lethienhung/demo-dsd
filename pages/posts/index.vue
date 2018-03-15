<template>
  <div class="container">
      <button @click="onSubmit" class="button is-outlined">Submit</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        isLogin: true,
        treeId: "",
        name: "",
        lat: "",
        long: ""
      }
    },
    methods: {
      onSubmit() {
        axios.post('https://fir-dsd.firebaseio.com/tree.json', {
          treeId: "1",
          name: "Cây táo"
        }).then(result => console.log(result))
      }
    }
  }

</script>

<style scoped>
  .admin-auth-page {
    padding: 20px;
  }

  .auth-container {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 2px #ccc;
    width: 300px;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
  }

</style>
