<template>
  <div class="photo">
    <img :src="webPackPath" :style="margin">
  </div>
</template>

<script>
  export default {
    props: ['photo', 'path', 'marginBottom'],
    computed: {
      webPackPath: function() {
        return require("../assets/" + this.path + this.photo + ".jpg")
      },
      margin: function() {
        return "margin-bottom:" + this.marginBottom
      }
    }
  }
</script>

<style scoped>
img {
  align-self: center;
  max-height: 80vh;
}

@media (min-width: 1000px) {
  img {
    max-height: 90vh;
  }
}

</style>
