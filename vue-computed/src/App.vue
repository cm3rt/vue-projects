<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2 :style="headerStyle">Experiment Filter</h2>
    <button @click="joe == true ? joe = false : joe = true">{{joe == true ? 'Not created by Joe' : 'Created by Joe'}}</button><br />
    <h5 :style="headerStyle">  The value of joe is: <i>{{joe}}</i>  </h5>
    <button @click="joe='hi'">Change joe to 'hi'</button>
    <button @click="joe='bye'">Change joe to 'bye'</button>
    <button @click="joe=_.random(5000)">Random Number</button>
    <h3 v-if="joe===true" :style="headerStyle">Ceated by Joseph Alai</h3>
    <h3 v-else-if="joe===false">Not Created by Joseph Alai</h3>
    <h3 v-else-if="joe=='hi'" :style="headerStyle">Now the value of joe is 'hi'</h3>
    <h3 v-else-if="joe=='bye'" :style="headerStyle">joe='bye', Whoever created this is not here.</h3>
    <h3 v-else :style="headerStyle">I just don't know what to do anymore because I'm not that smart. Lodash says you have this many problems:  {{joe}}</h3>
    <p>The computed filter, in this instance, is called when we used the v-for function, small in ComputedFilteredArray</p>
    <p>If the 'in' is a computed function, it looks to that computed function.</p>
    <p>Inside the computed function, we return this.ACTUALARRAY.filter(small =><i>if</i>  small.type != 'Defined')</p>
    <p>Implements Lodash for Array Functions and Random Number Generation '_.random(1000)' = {{_.random(1000)}}</p>
    <h2 :style="headerStyle">Add New Experiment</h2>
    <h4 :style="headerStyle">Please fill out the following form to add a new experiment</h4>
    <label>
      Experiment Type: 
      <select v-model="newExperimentType">
        <option v-for="exp in experimentsUnique">{{exp.type}}</option>
      </select>
      </label>
    <label>Experiment Name: <input type="text" v-model="newExperimentName"></label>
    <label>Experiment Price: <input type="text" v-model="newExperimentPrice"></label>
    <button @click="addExperiment">Add Experiment</button><br />
    
    <h2 :style="headerStyle">Experiments Filter</h2>
    <span>Price Cap: <input type="text" v-model="experimentPrice"></span><br />
    <panel>
    <h3 :style="headerStyle">All</h3>
    <ul>
      <li v-for="exp in allExperiments">{{exp.name + ': ' + exp.type + '; $' + exp.price}}</li>
    </ul>
  </panel>  
  <panel>
    <h3 :style="headerStyle">Non Physics</h3>
    <ul>
      <li v-for="exp in nonPhysics">{{exp.name + ': ' + exp.type + '; $' + exp.price}}</li>
    </ul>
  </panel>
  <panel>
    <h3 :style="headerStyle">Non CS</h3>
    <ul>
      <li v-for="exp in nonCS">{{exp.name + ': ' + exp.type + '; $' + exp.price}}</li>
    </ul>
  </panel>
  <panel>
    <h3 :style="headerStyle">Other Type</h3>
    <label>Input Custom Filter for Experiment Type<br /><input type="text" v-model="filterType"></label><br />
    <ul>
      <li v-for="exp in customFilter">{{exp.name + ': ' + exp.type + '; $' + exp.price}}</li>
    </ul>
  </panel>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
        filterType: 'CS',
        experimentPrice: 999999,
        joe: true,
        newExperimentPrice: 0,
        newExperimentName: '',
        newExperimentType: '',
        experiments: [
        { type: 'CS', name: 'Exp1', price: 86753.09},
        { type: 'CS', name: 'Exp1', price: 1923.34},
        { type: 'PHY', name: 'Exp3', price: 84.12},
        { type: 'FS', name: 'Full Stack Experiment', price: 238.00},
        ],
        headerStyle: {
          'color' : '#333',
          'text-transform': 'capitalize'
        }
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
      return this.experiments.filter(custom => custom.type.search(_.toUpper(this.filterType)) > -1).filter(affordable => affordable.price <= this.experimentPrice)
    },
    customPrice(){
      return this.experiment.filter(custom => custom.price <= this.experimentPrice).filter(affordable => affordable.price <= this.experimentPrice)
    },
    experimentsUnique(){

        var result = _.map(_.uniqBy(this.experiments, 'type'), function (item) {
            return {
                type: item.type
            };  
        });


      return result
    }
  },
  methods: {
    addExperiment () {
      var newExperiment = {type: this.newExperimentType, name: this.newExperimentName, price: this.newExperimentPrice}
      this.experiments.push(newExperiment)
    }
  },

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
img {
  width: 1%;
  height: auto;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  // display: inline-block;
  margin: 0 10px;
}
.panel{
  display:inline-block;
  margin: 0 10x;
}

a {
  color: #42b983;
}
i{
  color: $pc;
}
</style>
