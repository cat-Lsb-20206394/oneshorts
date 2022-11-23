<template>
  <div class="intro">
    <h1 class="mt-4"><span class="red_txt">I</span>ntro</h1>
    <div class="intro_page" id="mainslider">
      <splide :options="options">
        <splide-slide>
        <img src="@/assets/intro/intro1.png" alt="intro1">
        </splide-slide>
        <splide-slide>
        <img src="@/assets/intro/intro2.png" alt="intro2">
        </splide-slide>
        <splide-slide>
        <img src="@/assets/intro/intro3.png" alt="intro3">
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/splide/dist/css/themes/splide-default.min.css';

  export default {
    name:"MainSlider",
      components: {
      Splide,
      SplideSlide,
    },
    data() {
      return {
        options: {
        type : 'fade',
        rewind      : true,
        perPage     : 1,
        autoplay    : true,
        pauseOnHover: true,
        arrows      : true,
        dots: true,
        animatedDots: true,
        },
      };
    },
  }
</script>

<style>
  .intro_page{
    text-align: center;
  }
  img{
    width:90%;
  }
  .splide__pagination__page.is-active {
    background-color: black;
  }
  .red_txt{
      color: red;
  }
</style>