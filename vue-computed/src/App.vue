<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Computed</h2>
    <input type="text" v-model="firstName"> <br />
    <input type="text" id="surname" value="Alai"><br />
    <button @click="saveName">Save Name</button><br />
    <output>{{computedFullName}}</output><br />
    <output>The surname is: {{surnameSnatched}}</output>
  </div>
</template>

<script>
// var surname;
let surname = 'Alai'

export default {
  name: 'app',
  data () {
    return {
      firstName: 'Joe',
      msg: 'Welcome to Your Vue.js App',
      surnameSnatched: ''
    }
  },
  computed: {
    computedFullName() {
      return this.firstName + ' ' + surname
    }
  },
  methods: {
    saveName () {
      surname = this.$el.querySelector('#surname').value
      this.surnameSnatched = surname;
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
