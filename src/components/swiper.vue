<template>
  <!--顶部轮播-->
  <div class="swiper-container swiper-banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="slide in slideData"><a href="{{slide.url}}" target="_blank"><img :src="slide.src"></a></div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
    import '../assets/js/swiper.js';
    export default {
      watch: {
        slideData (){
          $(".swiper-banner").swiper({
            loop: true,
            autoplay: 3000
          });
        }
      },
      props:{
        slideData:''
      }
    }
</script>