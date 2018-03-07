<template>
  <div class="carousel">
    <photo v-for="(photo, index) in photos" :photo="photo" :key="index" :path="path"/>
  </div>
</template>

<script>
  import Photo from './Photo'

  export default {
    components: {
      Photo
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
        path: 'top_section_images/'
      }
    }
  }
</script>

<style>
  .carousel {
    height: 100%;
    width: 100%;
    overflow: auto;
    margin-right: 14px;
    padding-right: 28px;
    height: 1024px;
    display: flex;
    flex-direction: column;
    left: calc(50vw - 738px/2);
  }
</style>
