<template>
  <div>
      <ul>
          <li><nuxt-link to="/admin/employee">Employee Page</nuxt-link></li>
          <li><nuxt-link to="/admin/tree/create">Tree Create</nuxt-link></li>
          <li><button @click="logout">Logout</button></li>
      </ul>
  </div>
</template>

<script>
export default {
    methods: {
        logout(){
            this.$store.dispatch('logout')
            this.$router.push('/auth')
        }
    }
}
</script>

<style>

</style>
