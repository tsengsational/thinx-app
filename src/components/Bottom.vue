<template>
  <div class="bottom">
    <div class="grid">
      <product v-for="(product, index) in products" :product="product" :key="index" />
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
            type: "heavy"
          },
          {
            name: "Cheeky",
            photo: "thinx_productpage_-03",
            type: "light"
          },
          {
            name: "Thong",
            photo: "thinx_productpage_-05",
            type: "lightest"
          },
          {
            name: "Sport",
            photo: "thinx_productpage_-07",
            type: "medium"
          },
          {
            name: "Boyshort",
            photo: "thinx_productpage_-08",
            type: "light"
          }
        ]
      }
    }
  }
</script>

<style>

</style>
