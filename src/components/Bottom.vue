<template>
  <div class="bottom">
    <div class="grid">
      <product v-for="(product, index) in products" :product="product" :key="index" :index="index" />
    </div>
  </div>
</template>

<script>
  import Product from './Product'

  export default {
    components: {
      Product
    },
    data: function () {
      return {
        products: [
          {
            name: "Hiphugger",
            photo: "thinx_productpage_-04",
            type: "heavy",
            orientation: "landscape"
          },
          {
            name: "Cheeky",
            photo: "thinx_productpage_-03",
            type: "light",
            orientation: "portrait"
          },
          {
            name: "Thong",
            photo: "thinx_productpage_-05",
            type: "lightest",
            orientation: "landscape"
          },
          {
            name: "Sport",
            photo: "thinx_productpage_-07",
            type: "medium",
            orientation: "landscape"
          },
          {
            name: "Boyshort",
            photo: "thinx_productpage_-08",
            type: "light",
            orientation: "portrait"
          }
        ]
      }
    }
  }
</script>

<style>

  @media (min-width: 1000px) {
    .grid {
      align-items: center;
      display: grid;
      grid-template-columns: auto 500px 500px auto;
      grid-template-rows: 600px 450px 600px;
      grid-template-areas:
      ". 1 2 ."
      ". 3 3 ."
      ". 4 5 .";
      justify-items: center;
    }
  }
</style>
