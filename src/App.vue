<template>
  <div id="app">
    <!-- <component v-bind:is="currentComponent"></component> -->
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import CounterGroup from './components/CounterGroup.vue'
// import route from './components/router/route.js'
export default {
  name: 'app',
  data(){
    return{
      // currentComponent:route('/hello')?HelloWorld:CounterGroup,
      count:0,
      data1:null
    };
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
