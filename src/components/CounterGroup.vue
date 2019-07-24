<template>
  <div id="countergroup">
      <input type="text" v-model="counterNum">
      <div v-if="counterNum"  >
          <counter v-for="index in parseInt(counterNum)" :key="index"></counter>
      </div>
      <label>总和为：<input type="text" :value="this.$store.state.sum"></label>
  </div>
</template>
<script>
import Counter from  '../components/Counter.vue'
export default {
  name: 'countergroup',
  data(){
    return{
      counterNum:0
    };
  },
  methods:{
    //编程式导航
    // jump(){
    //   this.$router.push({path:`/sum/${this.counterNum}`})
    // }
  },
  components: {
      Counter
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