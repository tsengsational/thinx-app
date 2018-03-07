<template>
  <div class="top">
    <div class="carousel-container">
      <carousel />
    </div>
    <div class="top-text">
      <strong>Hi-Waist</strong>
      <p>Heavy days. Holds up to 2 tampons worth.</p>
      <p>The phrase "treat yo'self" reaches new belly-button brushing heights with the Hi-Waist, and it's here just in time for cuffing season</p>
    </div>
    <order-form />
  </div>
</template>

<script>
  import Carousel from './Carousel'
  import OrderForm from './OrderForm'

  export default {
    components: {
      Carousel,
      OrderForm
    }
  }
</script>

<style lang="scss">
  $font_path: resolve('@fonts/');
  $bkg_color: #F8F8F8;

  @font-face {
    font-family: "Graphik-Medium";
    src: url($font_path + "Graphik-Medium.otf") format("otf"), url($font_path + "Graphik-Medium.ttf") format("ttf"), url($font_path + "Graphik-Medium.woff") format("woff");
  }



  .top {
    background-color: $bkg_color;
    height: 1024px;
  }

  .top-text {

  }

  .carousel-container {
    overflow: hidden;
    height: 100vh;
    width: 738px;
    position: absolute;
    left: calc( 50vw - (738px / 2));
  }

  @media (min-width: 600px) {
    .top-text, .order-form {
      position: absolute;
      z-index: 1;
    }

    .top-text {
      left: 5vw;
      text-align: left;
      top: 30vh;
      width: 25vw;
      p {
        font-family: "Graphik-Medium", sans-serif;
        letter-spacing: 2px;
        line-height: 2;
      }
      strong {
        font-family: "Graphik-Medium", sans-serif;
        text-transform: uppercase;
        letter-spacing: 3px;
      }
    }
  }


</style>
