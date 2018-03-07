<template>
  <div id="app">
    <top />
    <bottom />
  </div>
</template>

<script>
import Top from './components/Top'
import Bottom from './components/Bottom'

export default {
  name: 'app',
  components: {
    Top,
    Bottom
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
