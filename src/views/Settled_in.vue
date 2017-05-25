<template>
  <div>
      <my-header  v-bind:head-data='headData'></my-header>
      <div class="weui-content">
        <article class="weui-article">
          <section class="wy-news-info">
            <p>
              <img src="../assets/images/ruzhuliucheng.jpg" alt="">
            </p>
            <p class="t-c font-13">微信暂不支持商家入驻，请到PC端操作</p>
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
        headData: '商家入驻流程'
      }
    },
    components:{
      MyHeader
    }
  }
</script>


