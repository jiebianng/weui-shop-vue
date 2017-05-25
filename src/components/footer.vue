<template>
  <!--底部导航-->
  <div class="foot-black"></div>
  <div class="weui-tabbar wy-foot-menu">
    <a v-link="{name:'home'}" class="weui-tabbar__item weui-bar__item--on">
      <div class="weui-tabbar__icon foot-menu-home"></div>
      <p class="weui-tabbar__label">首页</p>
    </a>
    <a v-link="{name:'classify'}" class="weui-tabbar__item">
      <div class="weui-tabbar__icon foot-menu-list"></div>
      <p class="weui-tabbar__label">分类</p>
    </a>
    <a v-link="{name:'shopcart'}" class="weui-tabbar__item">
      <span class="weui-badge" style="position: absolute;top: -.4em;right: 1em;">8</span>
      <div class="weui-tabbar__icon foot-menu-cart"></div>
      <p class="weui-tabbar__label">购物车</p>
    </a>
    <a v-link="{name:'mine'}" class="weui-tabbar__item">
      <div class="weui-tabbar__icon foot-menu-member"></div>
      <p class="weui-tabbar__label">我的</p>
    </a>
  </div>
</template>
<script>

</script>