<template>
  <header class="wy-header" style="position:fixed; top:0; left:0; right:0; z-index:200;">
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