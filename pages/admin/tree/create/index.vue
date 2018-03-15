<template>
  <section>
    <div class="field">
      <label class="label">Tree Name</label>
      <div class="control">
        <input class="input" v-model="name" type="text" placeholder="Text input">
      </div>
    </div>

    <div class="field">
      <label class="label">Age</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-success" type="text" v-model="age" placeholder="Text input">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>

    </div>

    <div class="field">
      <label class="label">Location Lat</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-danger" type="email" placeholder="Email input" v-model="locationLat">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Location Long</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-danger" type="email" placeholder="Email input" v-model="locationLong">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Category</label>
      <div class="control">
        <div class="select">
          <select v-model="category">
            <option value="Cây To">Cây To</option>
            <option value="Cây Nhỏ">Cây Nhỏ</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Capacity</label>
      <div class="control">
        <div class="select">
          <select v-model="capacity">
            <option value="1">1 Lít</option>
            <option value="2">2 Lít</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">Note</label>
      <div class="control">
        <textarea v-model="note" class="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox"> I agree to the
          <a href="#">terms and conditions</a>
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click="createTree">Submit</button>
      </div>
      <div class="control">
        <button class="button is-text">Cancel</button>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    middleware: ['check-auth', 'auth'],
    data() {
      return {
        treeId: "",
        name: "",
        locationLat: '',
        locationLong: '',
        age: '',
        category: '',
        created_at: new Date(),
        capacity: '',
        note: ''

      }
    },
    methods: {
      createTree() {
        axios.post('https://fir-dsd.firebaseio.com/tree.json', {
          treeId: this.treeId,
          name: this.name,
          locationLat: this.locationLat,
          locationLong: this.locationLong,
          age: this.age,
          category: this.category,
          capacity: this.capacity,
          created_at: this.created_at,
          note: this.note,
          status: "Sống"
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
