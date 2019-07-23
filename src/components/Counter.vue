<template>
  <div id="counter">
    <!-- <p>{{count}}</p> -->
    <p>{{count}}</p>
    <label><input type="button" value="点我+" @click="add" ></label>
    <label><input type="button" value="点我-" @click="sub"></label>
  </div>
</template>

<script>
export default{
  name: 'counter',
  data(){
    return{
      count:0
    };
  },
  methods:{
    add(){
      this.count++
      this.$store.commit('addSum')
    },
    sub(){
      this.count--
      this.$store.commit('subSum',1)
    },
  },
  beforeDestroy(){
      this.$store.commit('subSum',this.count)
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