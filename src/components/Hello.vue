<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>相关链接</h2>
    <ul>
      <li><a href="https://awesome.re" target="_blank">😎 Curated list of awesome lists</a></li>
      <li><a href="https://github.com/AwesomeApp/awesome-app" target="_blank">Awesome App</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '欢迎来到你的 Awesome 应用'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
