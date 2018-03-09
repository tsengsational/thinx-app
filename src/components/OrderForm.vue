<template>
  <form class="order-form" v-on:submit.prevent="onSubmit">
    <div class="color-options">
      <label class="color">color
      </label>
      <label for="color" class="black" @click="handleClick">
        black
        <font-awesome-icon :icon="icon" class="check white" v-bind:class="{hide: hideBlack}" />
        <input type="radio" name="color" value="black" />
      </label>
      <label for="color" class="beige" @click="handleClick">
        beige
        <font-awesome-icon :icon="icon" class="check black" v-bind:class="{hide: hideBeige}"/>
        <input type="radio" name="color" value="beige" />
      </label>
    </div>
    <label for="quantity" class="quantity">
      <span class="minus-btn minus" @click="handleClick"><font-awesome-icon :icon="minus" class="minus-btn" @click="handleClick" /></span>
      <span class="minus-btn blanket" @click="handleClick"></span>
      quantity
      (<input type="number" name="quantity" :value="quantity" />)
      <span class="plus-btn plus" @click="handleClick"><font-awesome-icon :icon="plus" class="plus-btn" @click="handleClick" /></span>
      <span class="plus-btn blanket" @click="handleClick"></span>
    </label>
    <div class="size-container">
      <span class="select-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="8.573" height="5.287" viewBox="0 0 8.573 5.287"><path fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M7.573 1L4.286 4.287 1 1"/></svg>
      </span>
      <select class="size" name="size">
        <option value="" disabled="" selected="">size</option>
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
      <div class="size-help-text">
        <a href="#">what's my size?</a>
      </div>
    </div>
    <div class="add-btn-container">
      <button class="add-btn">add to cart</button>
      <div class="promo">
        <a href="#">build a cycle set and save 20%</a>
      </div>
    </div>
  </form>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import faCheck from '@fortawesome/fontawesome-free-solid/faCheck'
  import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
  import faMinus from '@fortawesome/fontawesome-free-solid/faMinus'

  export default {
    components: { FontAwesomeIcon },
    data: function(){
      return {
        hideBlack: false,
        hideBeige: true,
        quantity: 1
      }
    },
    methods: {
      handleClick: function(e) {
        console.log('click', e.target)
        switch (e.target.classList[0]) {
          case "black":
            this.hideBlack = false;
            this.hideBeige = true;
            break;
          case "beige":
            this.hideBlack = true;
            this.hideBeige = false;
            break;
          case "minus-btn":
            if (this.quantity <= 1) {
              break;
            }
            this.quantity--
            break;
          case "plus-btn":
            this.quantity++
            break;
        }
      }
    },
    computed: {
      icon: function() {
        return faCheck
      },
      plus: function() {
        return faPlus
      },
      minus: function() {
        return faMinus
      }
    }

  }
</script>

<style lang="scss">
  $black: #000;
  $white: #fff;
  $beige: #fedbb5;
  $font_path: resolve('@fonts/');
  $bkg_color: #F8F8F8;
  $default_font: "Graphik-Medium", sans-serif;

  @font-face {
    font-family: "Graphik-Medium";
    src: url($font_path + "Graphik-Medium.otf") format("otf"), url($font_path + "Graphik-Medium.ttf") format("ttf"), url($font_path + "Graphik-Medium.woff") format("woff");
  }

  .add-btn {
    background-color: $black;
    border: 2px solid $black;
    color: $white;
    cursor: pointer;
    height: 34px;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 2rem;
    transition: background-color .25s, color .25s;
    width: 100%;
  }

  .add-btn:hover {
    background-color: transparent;
    border: 2px solid $black;
    color: $black;
  }

  .promo>a{
    font-family: $default_font;
    color: $black;
    letter-spacing: 2px;
    line-height: 2;
  }

  .color-options {
    align-items: center;
    border: 2px solid $black;
    display: flex;
    height: 34px;
    margin-bottom: 2rem;
    position: relative;
  }

  .hide {
    opacity: 0;
  }

  .minus, .plus {
    position: absolute;
    cursor: pointer;
    padding: 11px 13px;
    top: 0px;
  }

  .minus {
    border-right: 2px solid #000;
    left: 0;
  }

  .plus {
    right: 0;
    border-left: 2px solid black;
  }

  .blanket {
    display: inline-block;
    height: 44px;
    position: absolute;
    top: 0;
    width: 44px;
    z-index: 2;

    &.plus-btn {
      right: 0;
    }

    &.minus-btn {
      left: 0;
    }
  }

  .size-container {
    position: relative;
  }

  .select-arrow {
    position: absolute;
    top: 5px;
    right: 15px;
    z-index: 0;
  }

  .size {
    appearance: none;
    background-color: transparent;
    border: 2px solid #000;
    font-size: 16px;
    font-weight: 600;
    padding-left: 15px;
    cursor: pointer;
    height: 34px;
    margin-bottom: .75rem;
    width: 100%;
    user-select: none;
    z-index: 3;
    -ms-user-select: none;
    -moz-user-select: none;
    -moz-appearance: none;
    -webkit-user-select: none;
    -webkit-appearance: none;
  }

  .size-help-text {
    font-size: 12px;
    margin-bottom: 2rem;

    a {
      color: $black;
    }
  }

  label.color, label.black, label.beige {
    padding-left: 15px;
    padding-top: 4px;
    color: $black;
    font-weight: 600;
    height: 30px;
    line-height: 30px;
    width: 33%;
    input {
      z-index: -1;
      opacity: 0;
      display: block;
      position: absolute;
    }
  }

  label.color {
    background-color: transparent;
  }

  label.black {
    background-color: $black;
    color: $white;
  }

  label.beige {
    background-color: $beige;
  }

  label.quantity {
    background-color: transparent;
    border: 2px solid #000;
    color: #000;
    display: block;
    font-weight: 600;
    height: 34px;
    margin-bottom: 2rem;
    padding-top: 8px;
    position: relative;
    text-transform: lowercase;

    input[type='number'] {
      background-color: transparent;
      border: none;
      font-size: 16px;
      font-weight: 600;
      margin: 0;
      padding-top: 2px;
      text-align: center;
      width: 24px;
      -moz-appearance: textfield;
    }
    input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  @media (min-width: 1000px) {
    label.quantity {
      padding-left: calc(50% - 33px);
    }
  }

</style>
