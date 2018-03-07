<template>
  <div class="product">
    <photo :photo="product.photo" :path="path" />
  </div>
</template>

<script>
import Photo from './Photo'

export default {
  components: {
    Photo
  },
  props: ["product"],
  data: function() {
    return {
      path: "bottom_section_images/"
    }
  }
}
</script>

<style lang="scss">

</style>
