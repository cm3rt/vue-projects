<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>Experiment Filter</h2>
    <p>The computed filter, in this instance, is called when we used the v-for function, small in ComputedFilteredArray</p>
    <p>If the 'in' is a computed function, it looks to that computed function.</p>
    <p>Inside the computed function, we return this.ACTUALARRAY.filter(small =><i>if</i>  small.type != 'Defined')</p>
    <h3>All</h3>
    <ul>
      <li v-for="exp in experiments">{{exp.name + ': ' + exp.type}}</li>
    </ul>
    <h3>Non Physics</h3>
    <ul>
      <li v-for="exp in nonPhysics">{{exp.name + ': ' + exp.type}}</li>
    </ul>
    <h3>Non CS</h3>
    <ul>
      <li v-for="exp in nonCS">{{exp.name + ': ' + exp.type}}</li>
    </ul>
    <h3>Custom</h3>
    <label>Input Custom Filter for Experiment Type: <input type="text" v-model="filterType"></label><br />
    <ul>
      <li v-for="exp in customFilter">{{exp.name + ': ' + exp.type}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
        filterType: 'CS',
        experiments: [
        { type: 'CS', name: 'Exp1'},
        { type: 'CS', name: 'Exp1'},
        { type: 'PHY', name: 'Exp3'},
        { type: 'FS', name: 'Full Stack Experiment'},
        ],
    }
  },  
  computed: {
    nonPhysics () {
      return this.experiments.filter(smart => smart.type !== 'PHY')
    },
    nonCS() {
      return this.experiments.filter(dumb => dumb.type !== 'CS')
    },
    customFilter() {
      return this.experiments.filter(custom => custom.type.search(this.filterType) > -1)
    }
  }
}
</script>

<style lang="scss">
$pc:blue;
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
i{
  color: $pc;
}
</style>
