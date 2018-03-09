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
        windowWidth: 0,
        imageWidth: 0,
        baseStyle: {
          left: "0vw",
          transition: "none"
        },
        overrideStyle: {
          left: "0vw",
          transition: "left .3s"
        }
      }
    },
    mounted: function () {
      // calculate distance required to center .carousel
      let centerImage = () => {
        this.imageWidth = document.querySelector('.topPhoto>.photo>img').offsetWidth
        this.windowWidth = window.innerWidth
        console.log(this.imageWidth, this.windowWidth)
        let centerMove = String( (this.windowWidth - this.imageWidth) / 2 ) + 'px'
        if (this.windowWidth <= 1000) {
          this.overrideStyle.left = centerMove
          this.overrideStyle.transition = "none"
        }
      }
      window.addEventListener('resize', ()=> {
        centerImage()
      })
      centerImage()
      console.log(this.overrideStyle.left, this.overrideStyle.transition)
    },
    methods: {
      handleCarouselClick: function (payload) {
        // get index from clicked button, translate carousel by index * width of image
        this.imageWidth = document.querySelector('.topPhoto>.photo>img').offsetWidth
        this.windowWidth = window.innerWidth
        console.log(this.imageWidth, this.windowWidth)
        let index = payload.payload
        let move = String((-this.imageWidth * index) + ( (this.windowWidth - this.imageWidth) / 2 )) + "px"
        this.overrideStyle.left = move
        this.overrideStyle.transition = "left .3s"
      },
      handleZoomClick: function(payload) {
        // toggle isZoom flag variable, hide all non-topPhoto elements, position scroll
        // to center selected image.
        this.isZoom = !this.isZoom
        this.overrideStyle = {
          left: "0vw",
          transition: "left 0s"
        }
        let hidden =  document.querySelectorAll(':not(#app):not(.top):not(.carousel-container):not(.carousel):not(.topPhoto):not(img):not(.car-container):not(.photo):not(body):not(html):not(head):not(.photo-container)')
        hidden.forEach(el => {
          el.classList.toggle('hidden')
        })
        // add .zoom to all elements for viewing zoomed in photo
        // corresponds to separate .zoom CSS rules
        let zoomed = document.querySelectorAll('.top, .carousel-container, .topPhoto, .Photo, body, .photo-container')
        zoomed.forEach(el => {
          el.classList.toggle('zoom')
        })

        let zoomedPhoto = document.querySelectorAll('.topPhoto')[payload.index]
        let photoWidth = zoomedPhoto.firstElementChild.scrollWidth
        let windowWidth = window.innerWidth
        this.zoomLeft = parseInt( (windowWidth - photoWidth) / 2 )
        zoomedPhoto.classList.contains('zoom') ? zoomedPhoto.scrollIntoView() : null

        // when zooming out, resets scroll to top of page
        if(this.isZoom === false) {
          window.scrollTo(0, 0)
        }
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


  @media (min-width: 1000px) {
    .carousel {
      height: 1024px;
      left: calc(50vw - 738px/2);
      margin-right: 14px;
      overflow: auto;
      padding-right: 28px;
      width: 100%;
      .photo-container {
        flex-direction: column;
      }
    }
    .photo {
      margin-bottom: 3rem;
    }

  }
</style>
