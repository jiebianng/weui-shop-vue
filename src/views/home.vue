<template>
  <div>
    <div class="weui-content">
      <header class='weui-header'>
      <Search></Search>
      </header>
      <swiper v-bind:slide-data='slideData'></swiper>
      <!--图标分类-->
      <div class="weui-flex wy-iconlist-box">
        <div class="weui-flex__item"><a v-link="{ path: '/pro_list'}" class="wy-links-iconlist"><div class="img"><img src="../assets/images/icon-link1.png"></div><p>精选推荐</p></a></div>
        <div class="weui-flex__item"><a v-link="{ path: '/pro_list'}" class="wy-links-iconlist"><div class="img"><img src="../assets/images/icon-link2.png"></div><p>酒水专场</p></a></div>
        <div class="weui-flex__item"><a v-link="{ path: '/all_orders'}" class="wy-links-iconlist"><div class="img"><img src="../assets/images/icon-link3.png"></div><p>订单管理</p></a></div>
        <div class="weui-flex__item"><a href="Settled_in.html" class="wy-links-iconlist"><div class="img"><img src="../assets/images/icon-link4.png"></div><p>商家入驻</p></a></div>
      </div>
      <!--新闻切换-->
      <div class="wy-ind-news">
        <i class="news-icon-laba"></i>
        <div class="swiper-container swiper-news">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="new in news"><a href="{{new.url}}">{{new.title}}</a></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <a href="news_list.html" class="newsmore"><i class="news-icon-more"></i></a>
      </div>
      <!--精选推荐-->
      <div class="wy-Module">
        <div class="wy-Module-tit"><span>精选推荐</span></div>
        <div class="wy-Module-con">
          <div class="swiper-container swiper-jingxuan" style="padding-top:34px;">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="Sel in Selected"><a href="{{Sel.url}}"><img :src="Sel.src" /></a></div>
            </div>
            <div class="swiper-pagination jingxuan-pagination"></div>
          </div>
        </div>
      </div>
      <!--酒水专场-->
      <div class="wy-Module">
        <div class="wy-Module-tit"><span>酒水推荐</span></div>
        <div class="wy-Module-con">
          <div class="swiper-container swiper-jiushui" style="padding-top:34px;">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="Wine in Wine"><a href="{{Wine.url}}"><img :src="Wine.src" /></a></div>
            </div>
            <div class="swiper-pagination jingxuan-pagination"></div>
          </div>
        </div>
      </div>
      <!--猜你喜欢-->
      <div class="wy-Module">
        <div class="wy-Module-tit-line"><span>猜你喜欢</span></div>
        <div class="wy-Module-con">
          <ul class="wy-pro-list clear">
            <li v-for="like in GuessLike">
              <a :href="like.href">
                <div class="proimg"><img :src="like.src"></div>
                <div class="protxt">
                  <div class="name">{{like.title}}</div>
                  <div class="wy-pro-pri">¥<span>{{like.price}}</span></div>
                </div>
              </a>
            </li>
          </ul>
          <div class="morelinks"><a href="pro_list.html">查看更多 >></a></div>
        </div>
      </div>
    </div>
    <wy-foot></wy-foot>
  </div>
</template>
<script>
  import Swiper from '../components/swiper.vue';
  import Search from '../components/search.vue';
  import wyFoot from '../components/footer.vue';
  import '../assets/js/jquery-weui.js';
  import * as main from '../api/main';
  export default {
    ready (){
      $('head title').html('首页');
      var _this = this;
      main.getAjax({
        ret(result){
          _this.$set('slideData',result.slideData);
          _this.$set('news',result.news);
          _this.$set('Selected',result.Selected);
          _this.$set('Wine',result.Wine);
          _this.$set('GuessLike',result.GuessLike);
        }
      })
    },
    data (){
      return {
        slideData:'',
        news:'',
        Selected:'',
        Wine:'',
        GuessLike:''
      }
    },
    watch:{
      news (){
        $(".swiper-news").swiper({
          loop: true,
          direction: 'vertical',
          paginationHide :true,
          autoplay: 30000
        });
      },
      Selected (){
        $(".swiper-jingxuan").swiper({
          pagination: '.swiper-pagination',
          loop: true,
          paginationType:'fraction',
          slidesPerView:3,
          paginationClickable: true,
          spaceBetween: 2
        });
      },
      Wine (){
        $(".swiper-jiushui").swiper({
          pagination: '.swiper-pagination',
          paginationType:'fraction',
          loop: true,
          slidesPerView:3,
          slidesPerColumn: 2,
          paginationClickable: true,
          spaceBetween:2
        });
      }
    },
    components:{
      Swiper,
      Search,
      wyFoot
    }
  }
</script>

<style>
  @import '../assets/css/weui.min.css';
  @import '../assets/css/jquery-weui.css';
  @import '../assets/css/style.css';
</style>
