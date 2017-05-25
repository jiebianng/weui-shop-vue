<template>
  <header class="wy-header">
    <div class="wy-header-icon-back"><a href="javascript:history.go(-1)"><span></span></a></div>
    <div class="wy-header-title">{{headData}}</div>
  </header>
</template>
<script>
  import '../assets/js/jquery-weui.js';
  export default {
    props:{
      headData:''
    }
  }
</script>