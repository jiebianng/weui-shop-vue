<template>
  <div>
    <my-header v-bind:head-data='headData'></my-header>
    <div class="weui-content">
      <div class="wy-media-box weui-media-box_text address-select">
        <div class="weui-media-box_appmsg">
          <div class="weui-media-box__hd proinfo-txt-l" style="width:20px;"><span class="promotion-label-tit"><img src="../assets/images/icon_nav_city.png" /></span></div>
          <div class="weui-media-box__bd">
            <a v-link="{name:'address_list'}" class="weui-cell_access">
              <h4 class="address-name"><span>杜杰</span><span>13854652512</span></h4>
              <div class="address-txt">宿迁市洋河新区电商产业园105号</div>
            </a>
          </div>
          <div class="weui-media-box__hd proinfo-txt-l" style="width:16px;"><div class="weui-cell_access"><span class="weui-cell__ft"></span></div></div>
        </div>
      </div>
      <div class="wy-media-box weui-media-box_text">
        <div class="weui-media-box__bd">
          <div class="weui-media-box_appmsg ord-pro-list">
            <div class="weui-media-box__hd"><a v-link="{name:'pro_info',params:{ goodsId: 11 }}"><img class="weui-media-box__thumb" src="../../static/upload/pro3.jpg" alt=""></a></div>
            <div class="weui-media-box__bd">
              <h1 class="weui-media-box__desc"><a v-link="{name:'pro_info',params:{ goodsId: 12 }}" class="ord-pro-link">蓝之蓝蓝色瓶装经典Q7浓香型白酒500ml52度高端纯粮食酒2瓶装包邮</a></h1>
              <p class="weui-media-box__desc">规格：<span>红色</span>，<span>23</span></p>
              <div class="clear mg-t-10">
                <div class="wy-pro-pri fl">¥<em class="num font-15">296.00</em></div>
                <div class="pro-amount fr"><div id="spinner-amount" class="Spinner"></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-panel">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">
              <div class="weui-cell weui-cell_access">
                <div class="weui-cell__bd weui-cell_primary">
                  <p class="font-14"><span class="mg-r-10">配送方式</span><span class="fr">快递</span></p>
                </div>
              </div>
              <div class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd weui-cell_primary">
                  <p class="font-14"><span class="mg-r-10">运费</span><span class="fr txt-color-red">￥<em class="num">10.00</em></span></p>
                </div>
              </div>
              <a class="weui-cell weui-cell_access" href="javascript:">
                <div class="weui-cell__bd weui-cell_primary">
                  <p class="font-14"><span class="mg-r-10">可用蓝豆</span><span class="sitem-tip"><em class="num">1235</em>个</span></p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
              <a class="weui-cell weui-cell_access" href="javascript:">
                <div class="weui-cell__bd weui-cell_primary">
                  <p class="font-14"><span class="mg-r-10">优惠券</span><span class="sitem-tip"><em class="num">0</em>张可用</span></p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="wy-media-box weui-media-box_text">
        <div class="mg10-0 t-c">总金额：<span class="wy-pro-pri mg-tb-5">¥<em class="num font-20">296.00</em></span></div>
        <div class="mg10-0"><a href="javascript:" class="weui-btn weui-btn_primary">微信付款</a></div>
      </div>
    </div>
  </div>
</template>
<script>
  import MyHeader from '../components/my_header.vue';
  import '../assets/js/jquery.Spinner';
  export default {
    ready (){
      $('head title').html(this.headData);
      $(".Spinner").Spinner({value:1, len:3, max:999});
      console.log(this.$route.params.goodsId);
      console.log(this.$route.params.goods);
    },
    data (){
      return {
        headData: '订单详情'
      }
    },
    components:{
      MyHeader
    }
  }
</script>