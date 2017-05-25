<template>
  <div>
      <my-header  v-bind:head-data='headData'></my-header>
      <div class="weui-content">
        <article class="weui-article">
          <h1>热烈祝贺蓝之蓝股份上市</h1>
          <h3 class="wy-news-time">2016-02-06</h3>
          <section class="wy-news-info">
            <p>热烈祝贺蓝之蓝股份上市热烈祝贺蓝之蓝股份上市热烈祝贺蓝之蓝股份上市热烈祝贺蓝之蓝股份上市热烈祝贺蓝之蓝股份上市热烈祝贺蓝之蓝股份上市热烈祝贺蓝之蓝股份上市</p>
            <p>
              <img src="../../static/upload/ban1.jpg" alt="">
              <img src="../../static/upload/ban2.jpg" alt="">
            </p>
          </section>
        </article>
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
        headData: '新闻详情'
      }
    },
    components:{
      MyHeader
    }
  }
</script>


