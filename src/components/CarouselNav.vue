<template>
  <div class="carousel-nav">
    <span class="dot" v-for="(photo, key, index) in photos" :key="key" @click="onClick">
      <span class="hide">{{key}}</span>
      <font-awesome-icon :icon="circle" />
    </span>
  </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import faCircle from '@fortawesome/fontawesome-free-solid/faCircle'

export default {
  components: {FontAwesomeIcon},
  props: ["photos", "handleCarouselClick"],
  computed: {
    circle: function() {
      return faCircle
    }
  },
  methods: {
    onClick: function(e) {
      let num = e.target.innerText
      console.log(num)
      let payload = {payload: num}
      this.handleCarouselClick(payload)
    }
  }
}
</script>

<style lang="scss">
  .dot {
    cursor: pointer;
    display: inline-block;
    transform: scale(.5);
    z-index: 2;
    svg {
      z-index: 1;
      path {
        z-index: 1;
      }
    }
    .hide {
      position: absolute;
      width: 8px;
      height: 11px;
      transform: scale(2);
      top: 5px;
      left: 3px;
    }
  }



  .carousel-nav {
    margin-bottom: 2rem;
  }

  @media (min-width: 1000px) {
    .carousel-nav {
      display: none;
    }
  }
</style>
