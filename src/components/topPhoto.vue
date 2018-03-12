<template>
  <div class="topPhoto" @click="zoom" :style="left">
    <photo :path="path" :photo="photo" :marginBottom="marginBottom"/>
  </div>
</template>

<script>
import Photo from './Photo'

export default {
  props: ["path", "photo", "index", "handleZoomClick", "marginBottom", "zoomLeft"],
  components: {Photo},
  methods: {
    zoom: function (e) {
      let payload = {event: e, index: this.index}
      this.handleZoomClick(payload)
    }
  },
  computed: {
    left: function() {
      return "left: " + String(this.zoomLeft) + "px;"
    }
  }
}
</script>

<style lang="css">
  .topPhoto {
    cursor: zoom-in;
  }

  .topPhoto.zoom {
    cursor: zoom-out;
    position: relative;
  }

  .topPhoto.zoom > .photo > img {
    min-width: 100vw;
    max-height: none;
  }
</style>
