<template>
  <form class="order-form">
    <label for="color">color
      <input type="radio" name="color" value="black">
      <input type="radio" name="color" value="beige">
    </label>
    <label for="quantity">
      quantity
      <span class="minus"></span>
      <input type="number" name="quantity" value="1">
      <span class="plus"></span>
    </label>
    <select class="size" name="size">
      <option value="XS">XS</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
      <option value="XXL">XXL</option>
    </select>
  </form>
</template>

<script>
  export default {

  }
</script>

<style>

</style>
