<template>
  <section class="container">
    <div>
      <ul>
        <li v-for="emp in loadedEmployees" :key="emp.employeeId">
          <nuxt-link class="btn btn-primary" :to="{path: '/admin/employee/history'+emp.id }">{{emp.firstName}}</nuxt-link>
        </li>
      </ul>
    </div>

  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    asyncData({
      req,
      params
    }) {
      // We can return a Promise instead of calling the callback
      return axios.get('https://fir-dsd.firebaseio.com/employee.json')
        .then((res) => {
          return {
            loadedEmployees: res.data
          }
        })
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
