<template>
    <div class="login-box">
      <div class="lg-title">欢迎登陆伟义商城</div>
      <div class="login-form">
        <form action="#">
          <div class="login-user-name common-div">
            	<span class="eamil-icon common-icon">
                	<img src="../assets/images/eamil.png" />
                </span>
            <input type="email" name="username" value="" placeholder="请输入您的手机号" />
          </div>
          <div class="login-user-pasw common-div">
            	<span class="pasw-icon common-icon">
                	<img src="../assets/images/password.png" />
                </span>
            <input type="password" name="password" value="" placeholder="请输入您的密码" />
          </div>
          <a v-link="{name:'home'}" class="login-btn common-div">登陆</a>
          <a href="javascript:;" class="login-oth-btn common-div">微信登陆</a>
          <a href="javascript:;" class="login-oth-btn common-div">QQ登陆</a>
        </form>
      </div>
      <div class="forgets">
        <a href="javascript:void (0)">忘记密码？</a>
        <a href="javascript:void (0)">免费注册</a>
      </div>
    </div>
</template>
<script>
  export default {
    ready (){
      $('head title').html(this.headData);
      $('body').css({
        "background":"#323542"
      });
    },
    data (){
      return {
        headData: '登录'
      }
    },
    components:{
    }
  }
</script>


