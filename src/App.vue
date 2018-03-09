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

<style lang="scss">
$bkg_color: #F8F8F8;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

body.zoom {
  background-color: $bkg_color;
}

body {
  margin: 0px;
}
</style>
