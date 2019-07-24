<template>
  <div class="CaixukunPage">
    <h1>name:{{$route.params.id}}</h1>
    <h1>page:{{$route.params.page}}</h1>
  </div>
</template>

<script>
export default {
  name: 'CaixukunPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.hello{
  border:1px solid red
}
</style>