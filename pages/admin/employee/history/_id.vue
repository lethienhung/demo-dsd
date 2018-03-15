<template>
  <section class="container">
    <div>
      <ul>
        Tên: <li>{{employee.firstName}}</li>
        ID: <li>{{employee.employeeId}}</li>
     
      </ul>
    </div>

  </section>
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
      } = await axios.get(`https://fir-dsd.firebaseio.com/employee/${params.id}/.json`)
      return {
        employee: data
      }
    },
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
