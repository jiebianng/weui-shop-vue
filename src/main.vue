<template>
    <div>
        <router-view keep-alive transition-mode="out-in" transition="fade" ></router-view>
    </div>
</template>
<style>
    @import './assets/css/weui.min.css';
    @import './assets/css/jquery-weui.css';
    @import './assets/css/style.css';
    .fade-transition {
        transition: opacity .1s ease;
    }
    .fade-enter, .fade-leave {
        opacity: 0;
    }
</style>