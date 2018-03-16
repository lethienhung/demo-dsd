<template>
  <div>
    <input v-model="email" />
    <input v-model="password" />
    <input v-model="name" />
    <button @click="signup">Submit</button>
    <button @click="checkLogin">Check</button>
  </div>
</template>

<script>
  import firebase from 'firebase'
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
    data() {
      return {
        email: '',
        password: '',
        name: ''
      }
    },
    methods: {
      signup() {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
      },
      checkLogin() {
        let user = firebase.auth().currentUser;
        let name, email, photoUrl, uid, emailVerified;

        if (user != null) {
          name = user.displayName;
          email = user.email;
          photoUrl = user.photoURL;
          emailVerified = user.emailVerified;
          uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
          // this value to authenticate with your backend server, if
          // you have one. Use User.getToken() instead.
        }
        console.log(email)
      }
    }
  }

</script>

<style>


</style>
