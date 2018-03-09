<template>
  <div class="product" :style="gridArea">
    <div class="product-container" v-bind:class="{portrait: portrait, landscape: landscape}">
      <photo :photo="product.photo" :path="path" class="image" />
      <div class="product-description">
        <a href='#' class="product-link" >Shop {{ product.name }}</a>
        <div class="product-type">{{ product.type }} days</div>
      </div>
    </div>
  </div>
</template>

<script>
import Photo from './Photo'

export default {
  components: {
    Photo
  },
  props: ["product", "index"],
  data: function() {
    return {
      path: "bottom_section_images/"
    }
  },
  computed: {
    portrait: function () {
      return this.product.orientation === "portrait" ? true : false;
    },
    landscape: function () {
      return this.product.orientation === "landscape" ? true : false;
    },
    gridArea: function () {
      let string = ""
      switch(this.index) {
        case 0:
          string = "1 / 2 / 1 / 2"
          break;
        case 1:
          string = "1 / 3 / 1 / 3"
          break;
        case 2:
          string = "2 / 2 / 2 / 4"
          break;
        case 3:
          string = '3 / 2 / 3 / 2'
          break;
        case 4:
          string = "3 / 3 / 3/ 3"
          break;
      }
      return "grid-area: " + string
    }
  }
}
</script>

<style lang="scss">
  $black: #000;
  @mixin fontstack() {
    font-family: "Graphik-Medium", sans-serif;
    color: $black;
    letter-spacing: 2px;
    line-height: 2;
  }

  .product  {
    display: inline-block;
    padding: 5%;
    .image {
      margin-bottom: 2rem;
      img {
        display: inline-block;
        max-width: 100%;
        margin-right: auto;
        margin-left: auto;
        vertical-align: middle;
      }
    }
  }

  .product-container.portrait {
    .image img {
      max-width: 100%;
    }
    .product-description {
      // left: calc(50% - 153px)
    }
  }

  .product-container.landscape {
    padding-top: calc(50% - 150px);
    .image img {
      max-width: 100%;
    }
    .product-description {
      // left: calc(50% - 225px)
    }
  }

  .product-description {
    text-align: left;
    position: relative;
    @include fontstack();
    .product-link {
      font-weight: 600;
      a {
        color: $black;
      }
    }
    .product-type {
      font-size: 12px;
    }
  }

  @media (min-width: 1000px) {
    .product {
      height: 600px;
    }
    .product-container.landscape {
      padding-top: calc(50% - 150px);
      .image img {
        max-width: 450px;
      }
      .product-description {
        left: calc(50% - 225px)
      }
    }
    .product-container.portrait {
      .image img {
        max-height: 450px;
      }
      .product-description {
        left: calc(50% - 153px)
      }
    }
  }

</style>
