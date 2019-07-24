<template>
  <div class="cool">
    <h1>cool</h1>
  </div>
</template>

<script>
export default {
  name: 'Cool',
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
.cool{
  border:1px solid red
}
</style>
