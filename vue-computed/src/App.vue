<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>Cleantime Calculator Circle</h2>
    <label>The days: <input type="text" v-model="days"></label><br />
    <label>The years: <input type="text" @input="update" :value="getYears"></label><br />
    <output>The days is {{days}} and the years is {{getYears}}</output><br />
    <output>{{ getYears%365 != 0 ? (Math.trunc(getYears)) + " years " + " and " + (days%365) + " days." : ' Exactly.'}}</output>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
        days: 0,
    }
  },
  computed: {
    getYears: {
      get() {
        return this.days / 365
      },
      set (newValue) { 
        this.days = newValue * 365 
      }
    }
  },
  methods: {
    update (e) {
      this.getYears = e.target.value
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
