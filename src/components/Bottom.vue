<template>
  <div class="bottom">
    <product v-for="(product, index) in products" :product="product" :key="index" />
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
        products: []
      }
    }
  }
</script>

<style>

</style>
