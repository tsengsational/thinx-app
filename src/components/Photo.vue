<template>
  <div class="photo">
    <img :src="webPackPath">
  </div>
</template>

<script>
  export default {
    props: ['photo', 'path'],
    computed: {
      webPackPath: function() {
        return require("../assets/" + this.path + this.photo + ".jpg")
      }
    }
  }
</script>

<style scoped>
img {
  align-self: center;
}
</style>
