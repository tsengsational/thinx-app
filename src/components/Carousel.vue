<template>
  <div class="car-container">
    <div class="carousel" :style="[baseStyle, overrideStyle]" :class="{zoom: isZoom}">
      <div class="photo-container">
        <top-photo v-for="(photo, index) in photos" :photo="photo" :key="index" :index="index" :path="path" :marginBottom="marginBottom" :handleZoomClick="handleZoomClick" :zoomLeft="zoomLeft" :isZoom="isZoom"/>
      </div>
    </div>
    <carousel-nav :photos="photos" :handleCarouselClick="handleCarouselClick" />
  </div>
</template>

<script>
  import topPhoto from './topPhoto'
  import CarouselNav from './CarouselNav'
  import Event from '../main'

  export default {
    components: {
      topPhoto,
      CarouselNav
    },
    data: function() {
      return {
        photos: [
          'highwaist_black_front_2_1024x1024',
          'highwaist_black_back_1024x1024',
          'highwaist_black_front_3_1024x1024',
          'highwaist_black_front_4_1024x1024',
          'highwaist_black_front_1_1024x1024',
          'highwaist_black_side_1024x1024'
        ],
        path: 'top_section_images/',
        marginBottom: '3rem',
        index: 0,
        isZoom: false,
        zoomLeft: 0,
        transition: "left .3s;",
        baseStyle: {
          left: "0vw",
          transition: "left .3s"
        },
        overrideStyle: {
          left: "0vw",
          transition: "left .3s"
        }
      }
    },
    methods: {
      handleCarouselClick: function (payload) {
        let index = payload.payload
        let move = String(-101 * index) + "vw"
        this.overrideStyle.left = move
        console.log("carousel click", index, this.overrideStyle.left)
      },
      handleZoomClick: function(payload) {
        this.isZoom = !this.isZoom
        this.overrideStyle = {
          left: "0vw",
          transition: "left 0s"
        }
        console.log("zoom click")
        let hidden =  document.querySelectorAll(':not(#app):not(.top):not(.carousel-container):not(.carousel):not(.topPhoto):not(img):not(.car-container):not(.photo):not(body):not(html):not(head):not(.photo-container)')
        hidden.forEach(el => {
          el.classList.toggle('hidden')
        })
        let zoomed = document.querySelectorAll('.top, .carousel-container, .topPhoto, .Photo, body, .photo-container')
        zoomed.forEach(el => {
          el.classList.toggle('zoom')
        })

        let zoomedPhoto = document.querySelectorAll('.topPhoto')[payload.index]
        this.zoomLeft = parseInt(zoomedPhoto.firstElementChild.scrollWidth / 4)
        zoomedPhoto.classList.contains('zoom') ? zoomedPhoto.scrollIntoView() : null
      }
    }
  }
</script>

<style lang="scss">
  .carousel {
    display: flex;
    height: 80vh;
    width: 600vw;
    position: relative;
  }

  .carousel.zoom {
    flex-direction: column;
    width: 100vw;
  }

  .photo-container {
    display: flex;
    height: 80vh;
    width: 600vw;
  }
  
  .photo-container.zoom {
    flex-direction: column;
    width: 100vw;
    position: relative;
  }


  @media (min-width: 600px) {
    .carousel {
      height: 1024px;
      flex-direction: column;
      left: calc(50vw - 738px/2);
      margin-right: 14px;
      overflow: auto;
      padding-right: 28px;
      width: 100%;

      .photo {
        margin-bottom: 3rem;
      }
    }
  }
</style>
