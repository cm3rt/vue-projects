<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>Experiment Filter</h2>
    <p>The computed filter, in this instance, is called when we used the v-for function, small in ComputedFilteredArray</p>
    <p>If the 'in' is a computed function, it looks to that computed function.</p>
    <p>Inside the computed function, we return this.ACTUALARRAY.filter(small =><i>if</i>  small.type != 'Defined')</p>
    <span>Price Cap: <input type="text" v-model="experimentPrice"></span>
    <h3>All</h3>
    <ul>
      <li v-for="exp in allExperiments">{{exp.name + ': ' + exp.type + '; $' + exp.price}}</li>
    </ul>
    <h3>Non Physics</h3>
    <ul>
      <li v-for="exp in nonPhysics">{{exp.name + ': ' + exp.type + '; $' + exp.price}}</li>
    </ul>
    <h3>Non CS</h3>
    <ul>
      <li v-for="exp in nonCS">{{exp.name + ': ' + exp.type + '; $' + exp.price}}</li>
    </ul>
    <h3>Custom</h3>
    <label>Input Custom Filter for Experiment Type: <input type="text" v-model="filterType"></label><br />
    <ul>
      <li v-for="exp in customFilter">{{exp.name + ': ' + exp.type + '; $' + exp.price}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
        filterType: 'CS',
        experimentPrice: 999999,
        experiments: [
        { type: 'CS', name: 'Exp1', price: 86753.09},
        { type: 'CS', name: 'Exp1', price: 1923.34},
        { type: 'PHY', name: 'Exp3', price: 84.12},
        { type: 'FS', name: 'Full Stack Experiment', price: 238.00},
        ],
    }
  },  
  computed: {
    allExperiments(){
      return this.experiments.filter(affordable => affordable.price <= this.experimentPrice)
    },
    nonPhysics () {
      return this.experiments.filter(smart => smart.type !== 'PHY').filter(affordable => affordable.price <= this.experimentPrice)
    },
    nonCS() {
      return this.experiments.filter(dumb => dumb.type !== 'CS').filter(affordable => affordable.price <= this.experimentPrice)
    },
    customFilter() {
      return this.experiments.filter(custom => custom.type.search(this.filterType) > -1).filter(affordable => affordable.price <= this.experimentPrice)
    },
    customPrice(){
      return this.experiment.filter(custom => custom.price <= this.experimentPrice).filter(affordable => affordable.price <= this.experimentPrice)
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
