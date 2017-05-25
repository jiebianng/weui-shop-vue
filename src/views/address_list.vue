<template>
  <div>
    <my-header v-bind:head-data='headData'></my-header>
    <div class="weui-content">
      <div class="weui-panel address-box">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_text address-list-box">
            <a href="javascript:void (0)" class="address-edit"></a>
            <h4 class="weui-media-box__title"><span>陈大鹏</span><span>189****3850</span></h4>
            <p class="weui-media-box__desc address-txt">宿迁市洋河新区电商产业园2楼宿迁市洋河新区电商产业园2楼宿迁市洋河新区电商产业园2楼</p>
            <span class="default-add">默认地址</span>
          </div>
        </div>
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_text address-list-box">
            <a href="javascript:void (0)" class="address-edit"></a>
            <h4 class="weui-media-box__title"><span>陈大鹏</span><span>189****3850</span></h4>
            <p class="weui-media-box__desc address-txt">宿迁市洋河新区电商产业园2楼宿迁市洋河新区电商产业园2楼宿迁市洋河新区电商产业园2楼</p>
          </div>
        </div>
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_text address-list-box">
            <a href="javascript:void (0)" class="address-edit"></a>
            <h4 class="weui-media-box__title"><span>陈大鹏</span><span>189****3850</span></h4>
            <p class="weui-media-box__desc address-txt">宿迁市洋河新区电商产业园2楼宿迁市洋河新区电商产业园2楼宿迁市洋河新区电商产业园2楼</p>
          </div>
        </div>
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_text address-list-box">
            <a href="javascript:void (0)" class="address-edit"></a>
            <h4 class="weui-media-box__title"><span>陈大鹏</span><span>189****3850</span></h4>
            <p class="weui-media-box__desc address-txt">宿迁市洋河新区电商产业园2楼宿迁市洋河新区电商产业园2楼宿迁市洋河新区电商产业园2楼</p>
          </div>
        </div>

      </div>
      <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary" href="javascript:void (0)" id="showTooltips">添加收货地址</a>
      </div>
    </div>
  </div>
</template>
<script>
  import MyHeader from '../components/my_header.vue';
  export default {
    ready (){
      $('head title').html(this.headData);
    },
    data (){
      return {
        headData: '地址管理'
      }
    },
    components:{
      MyHeader
    }
  }
</script>