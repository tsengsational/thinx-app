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
      console.log(payload.index)
      this.handleZoomClick(payload)
    }
  },
  created: function(){
    console.log(this.index)
  },
  computed: {
    left: function() {
      return "left: " + String(-this.zoomLeft) + "px;"
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
