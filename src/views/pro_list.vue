<template>
  <div>
    <header class='weui-header fixed-top'>
      <Search></Search>
      <div class="pro-sort">
        <div class="weui-flex">
          <div class="weui-flex__item"><div class="placeholder NormalCss">综合</div></div>
          <div class="weui-flex__item"><div class="placeholder SortAscCss">按销量</div></div>
          <div class="weui-flex__item"><div class="placeholder SortDescCss">按价格</i></div></div>
        </div>
      </div>
    </header>
    <!--主体-->
    <div class="weui-content" style="padding-top:85px;">
      <!--产品列表--滑动加载-->
      <div class="weui-pull-to-refresh__layer">
        <div class='weui-pull-to-refresh__arrow'></div>
        <div class='weui-pull-to-refresh__preloader'></div>
        <div class="down">下拉刷新</div>
        <div class="up">释放刷新</div>
        <div class="refresh">正在刷新</div>
      </div>
      <div id="list" class='demos-content-padded proListWrap'>
        <div class="pro-items" v-for="data in GuessLike">
          <a :href="data.url" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd"><img class="weui-media-box__thumb" :src="data.src" alt=""></div>
            <div class="weui-media-box__bd">
              <h1 class="weui-media-box__desc">{{data.title}}</h1>
              <div class="wy-pro-pri">¥<em class="num font-15">{{data.price}}</em></div>
              <ul class="weui-media-box__info prolist-ul">
                <li class="weui-media-box__info__meta"><em class="num">{{data.evaluate}}</em>条评价</li>
                <li class="weui-media-box__info__meta"><em class="num">{{data.Percentage}}</em>好评</li>
              </ul>
            </div>
          </a>
        </div>
      </div>
      <div class="weui-loadmore">
        <i class="weui-loading"></i>
        <span class="weui-loadmore__tips">正在加载</span>
      </div>
    </div>
  </div>
</template>
<script>
  import Search from '../components/search.vue';
  import '../assets/js/jquery-weui.js';
  import * as main from '../api/main';
  export default {
    ready (){
      $('head title').html('商品列表');
      var _this = this;
      main.getAjax({
        url:"/static/data/main.json",
        ret(result){
          _this.$set('GuessLike',result.GuessLike);
        }
      });
      $(document.body).pullToRefresh().on("pull-to-refresh", function() {
        setTimeout(function() {
          $("#time").text(new Date);
          $(document.body).pullToRefreshDone();
        }, 2000);
      });
      // infinite
      var loading = false;
      $(document.body).infinite().on("infinite", function() {
        if(loading) return;
        loading = true;
        setTimeout(function() {
          main.getAjax({
            url:"/static/data/main.json",
            ret(result){
              _this.$set('GuessLike',_this.GuessLike.concat(result.GuessLike));
            }
          });
          loading = false;
        }, 2000);
      });
    },
    data (){
      return {
        GuessLike:''
      }
    },
    components:{
      Search
    }
  }
</script>
<style>
  @import '../assets/css/weui.min.css';
  @import '../assets/css/jquery-weui.css';
  @import '../assets/css/style.css';
</style>

