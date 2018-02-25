<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>Computed Circle</h2>
    <label>The radius: <input type="text" v-model="radius"></label><br />
    <label>The area: <input type="text" @input="update" :value="getArea"></label><br />
    <output>The radius is {{radius}} and the area is {{getArea}}</output>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
        radius: 0,
    }
  },
  computed: {
    getArea: {
      get() {
        return Math.PI * this.radius * this.radius
      },
      set (newValue) { 
        this.radius = Math.sqrt(newValue / Math.PI) 
      }
    }
  },
  methods: {
    update (e) {
      this.getArea = e.target.value
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
