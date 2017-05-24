<template>
  <div>
    {{ $route.params.goodsId }}
  </div>
</template>
<script>
  export default {
    ready (){
      $('head title').html('首页');

    },
    data (){
      return {
      }
    },
    components:{
    }
  }
</script>

<style>
  @import '../assets/css/weui.min.css';
  @import '../assets/css/jquery-weui.css';
  @import '../assets/css/style.css';
</style>
