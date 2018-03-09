<template>
  <section class="container">
    <ul>

      <li>Cây:{{name}}</li>

      <li>Tuổi:{{age}}</li>

      <li>Vị trí:{{lat}}</li>

      <li>Vị trí:{{long}}</li>

      <li>Tình trạng:{{status}}</li>
    </ul>
  </section>
</template>

<script>
  export default {
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
