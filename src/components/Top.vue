<template>
  <div class="top">
    <div class="carousel-container">
      <carousel />
    </div>
    <div class="top-text">
      <strong>Hi-Waist</strong>
      <p>Heavy days. Holds up to 2 tampons worth.</p>
      <p>The phrase "treat yo'self" reaches new belly-button brushing heights with the Hi-Waist, and it's here just in time for cuffing season.</p>
    </div>
    <div class="order-form-container">
      <div class="price">
        <strong>$35.00</strong>
      </div>
      <order-form />
    </div>
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
  $default_font: "Graphik-Medium", sans-serif;

  @font-face {
    font-family: "Graphik-Medium";
    src: url($font_path + "Graphik-Medium.otf") format("otf"), url($font_path + "Graphik-Medium.ttf") format("ttf"), url($font_path + "Graphik-Medium.woff") format("woff");
  }

  p {
    font-family: $default_font;
    letter-spacing: 2px;
    line-height: 2;
  }
  strong {
    font-family: $default_font;
    letter-spacing: 3px;
    line-height: 2;
    text-transform: uppercase;
  }

  .top {
    background-color: $bkg_color;
    height: 95vh;
  }

  .top-text {

  }

  .carousel-container {
    overflow: hidden;
    height: 95vh;
    width: 738px;
    position: absolute;
    left: calc( 50vw - (738px / 2));
  }

  .price {
    margin-bottom: 2rem;
  }

  @media (min-width: 600px) {
    .top-text, .order-form-container {
      position: absolute;
      z-index: 1;
    }

    .order-form-container {
      right: 5vw;
      text-align: left;
      top: 30vh;
      width: 25vw;
    }

    .top-text {
      left: 5vw;
      text-align: left;
      top: 30vh;
      width: 25vw;
    }
  }


</style>
