<template>
  <section class="container">
    <div>
      <ul>
        <li v-for="(emp,index) in loadedEmployees" :key="index">
          <nuxt-link class="btn btn-primary" :to="{path: '/admin/employee/history/'+index }">{{emp.firstName}}</nuxt-link>
        </li>
      </ul>
      <button @click="checkLogin">Check</button>
 
    </div>
  </section>
</template>

<script>
  import fetch from 'isomorphic-fetch'
  import firebase from 'firebase'
  import axios from 'axios'

  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyBvhVZ4GZC7wQo9sLEl5rJov8tot2mYJuA",
      authDomain: "fir-dsd.firebaseapp.com",
      databaseURL: "https://fir-dsd.firebaseio.com",
      projectId: "fir-dsd",
      storageBucket: "fir-dsd.appspot.com",
      messagingSenderId: "114711168037"
    });

  }
  export default {
    methods: {
      checkLogin() {
        this.$axios.$post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/getAccountInfo?key=AIzaSyBvhVZ4GZC7wQo9sLEl5rJov8tot2mYJuA').then(result => {
          localStorage.setItem("token", result.idToken);
        })
          
          
      }
    },
    async asyncData() {
      const response = await fetch('https://fir-dsd.firebaseio.com/employee.json')
      const loadedEmployees = await response.json();
      return {
        loadedEmployees
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
