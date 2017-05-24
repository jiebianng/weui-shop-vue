<template>
    <div>
        <my-header v-bind:head-data='headData'></my-header>
        <div class='weui-content'>
            <div class="weui-tab">
                <div class="weui-navbar"
                     style="position:fixed; top:44px; left:0; right:0; height:44px; background:#fff;">
                    <a v-on:click="ajaxSend(0)" class="weui-navbar__item proinfo-tab-tit font-14 weui-bar__item--on" href="#tab1">全部</a>
                    <a v-on:click="ajaxSend(1)" class="weui-navbar__item proinfo-tab-tit font-14" href="#tab2">待付款</a>
                    <a v-on:click="ajaxSend(2)" class="weui-navbar__item proinfo-tab-tit font-14" href="#tab3">待发货</a>
                    <a v-on:click="ajaxSend(3)" class="weui-navbar__item proinfo-tab-tit font-14" href="#tab4">待收货</a>
                    <a v-on:click="ajaxSend(4)" class="weui-navbar__item proinfo-tab-tit font-14" href="#tab5">待评价</a>
                </div>
                <div class="weui-tab__bd proinfo-tab-con" style="padding-top:87px;">
                    <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
                        <div class="weui-panel weui-panel_access" v-for="list in orderLists">
                            <div class="weui-panel__hd">
                                <span>单号：{{list.code}}</span>
                                <span class="ord-status-txt-ts fr">{{list.statusMsg}}</span>
                            </div>
                            <div class="weui-media-box__bd  pd-10">
                                <div class="weui-media-box_appmsg ord-pro-list" v-for="goods in list.data">
                                    <div class="weui-media-box__hd"><a v-link="{name:'pro_info',params:{ goodsId: goods.id }}"><img
                                            class="weui-media-box__thumb" :src="goods.src" alt=""></a>
                                    </div>
                                    <div class="weui-media-box__bd">
                                        <h1 class="weui-media-box__desc"><a v-link="{name:'pro_info',params:{ goodsId: goods.id }}" class="ord-pro-link">{{goods.title}}</a>
                                        </h1>
                                        <p class="weui-media-box__desc">规格：<span>{{goods.spec}}</span></p>
                                        <div class="clear mg-t-10">
                                            <div class="wy-pro-pri fl">¥<em class="num font-15">{{goods.price}}</em></div>
                                            <div class="pro-amount fr"><span class="font-13">数量×<em class="name">{{goods.number}}</em></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ord-statistics">
                                <span>共<em class="num">{{list.allNumber}}</em>件商品，</span>
                                <span class="wy-pro-pri">总金额：¥<em class="num font-15">{{list.allPrice}}</em></span>
                                <span>(含运费<b>￥{{list.freight}}</b>)</span>
                            </div>
                            <div class="weui-panel__ft" v-if="list.status === 0">
                                <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">
                                    <a href="javascript:;" class="ords-btn-dele">删除订单</a>
                                    <a href="comment.html" class="ords-btn-com">评价</a>
                                </div>
                            </div>
                            <div class="weui-panel__ft" v-if="list.status === 1">
                                <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">
                                    <a href="javascript:;" class="ords-btn-dele">删除订单</a>
                                    <a href="order_info2.html" class="ords-btn-com">去付款</a>
                                </div>
                            </div>
                            <div class="weui-panel__ft" v-if="list.status === 2">
                                <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">
                                    商品正在打包中，请您耐心等待....
                                </div>
                            </div>
                            <div class="weui-panel__ft" v-if="list.status === 3">
                                <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">
                                    <a href="javascript:;" class="ords-btn-com receipt">确认收货</a>
                                </div>
                            </div>
                            <div class="weui-panel__ft" v-if="list.status === 4">
                                <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">
                                    <a href="comment.html" class="ords-btn-com">去评价</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab2" class="weui-tab__bd-item">
                        <div class="weui-panel weui-panel_access" v-for="list in orderLists">
                            <div class="weui-panel__hd"><span>单号：{{list.code}}</span><span
                                    class="ord-status-txt-ts fr">待付款</span></div>
                            <div class="weui-media-box__bd  pd-10">
                                <div class="weui-media-box_appmsg ord-pro-list" v-for="goods in list.data">
                                    <div class="weui-media-box__hd"><a v-link="{name:'pro_info',params:{ goodsId: goods.id }}"><img
                                            class="weui-media-box__thumb" :src="goods.src" alt=""></a>
                                    </div>
                                    <div class="weui-media-box__bd">
                                        <h1 class="weui-media-box__desc"><a v-link="{name:'pro_info',params:{ goodsId: goods.id }}" class="ord-pro-link">{{goods.title}}</a>
                                        </h1>
                                        <p class="weui-media-box__desc">规格：<span>{{goods.spec}}</span></p>
                                        <div class="clear mg-t-10">
                                            <div class="wy-pro-pri fl">¥<em class="num font-15">{{goods.price}}</em></div>
                                            <div class="pro-amount fr"><span class="font-13">数量×<em class="name">{{goods.number}}</em></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ord-statistics">
                                <span>共<em class="num">{{list.allNumber}}</em>件商品，</span>
                                <span class="wy-pro-pri">总金额：¥<em class="num font-15">{{list.allPrice}}</em></span>
                                <span>(含运费<b>￥{{list.freight}}</b>)</span>
                            </div>
                            <div class="weui-panel__ft">
                                <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">
                                    <a href="javascript:;" class="ords-btn-dele">删除订单</a>
                                    <a href="order_info2.html" class="ords-btn-com">去付款</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab3" class="weui-tab__bd-item">
                        <div class="weui-panel weui-panel_access" v-for="list in orderLists">
                            <div class="weui-panel__hd"><span>单号：{{list.code}}</span><span
                                    class="ord-status-txt-ts fr">待发货</span></div>
                            <div class="weui-media-box__bd  pd-10">
                                <div class="weui-media-box_appmsg ord-pro-list" v-for="goods in list.data">
                                    <div class="weui-media-box__hd"><a v-link="{name:'pro_info',params:{ goodsId: goods.id }}"><img
                                            class="weui-media-box__thumb" :src="goods.src" alt=""></a>
                                    </div>
                                    <div class="weui-media-box__bd">
                                        <h1 class="weui-media-box__desc"><a v-link="{name:'pro_info',params:{ goodsId: goods.id }}" class="ord-pro-link">{{goods.title}}</a>
                                        </h1>
                                        <p class="weui-media-box__desc">规格：<span>{{goods.spec}}</span></p>
                                        <div class="clear mg-t-10">
                                            <div class="wy-pro-pri fl">¥<em class="num font-15">{{goods.price}}</em></div>
                                            <div class="pro-amount fr"><span class="font-13">数量×<em class="name">{{goods.number}}</em></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ord-statistics">
                                <span>共<em class="num">{{list.allNumber}}</em>件商品，</span>
                                <span class="wy-pro-pri">总金额：¥<em class="num font-15">{{list.allPrice}}</em></span>
                                <span>(含运费<b>￥{{list.freight}}</b>)</span>
                            </div>
                            <div class="weui-panel__ft">
                                <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">
                                    商品正在打包中，请您耐心等待....
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab4" class="weui-tab__bd-item">
                        <div class="weui-panel weui-panel_access" v-for="list in orderLists">
                            <div class="weui-panel__hd"><span>单号：{{list.code}}</span><span
                                    class="ord-status-txt-ts fr">待收货</span></div>
                            <div class="weui-media-box__bd  pd-10">
                                <div class="weui-media-box_appmsg ord-pro-list" v-for="goods in list.data">
                                    <div class="weui-media-box__hd"><a v-link="{name:'pro_info',params:{ goodsId: goods.id }}"><img
                                            class="weui-media-box__thumb" :src="goods.src" alt=""></a>
                                    </div>
                                    <div class="weui-media-box__bd">
                                        <h1 class="weui-media-box__desc"><a v-link="{name:'pro_info',params:{ goodsId: goods.id }}" class="ord-pro-link">{{goods.title}}</a>
                                        </h1>
                                        <p class="weui-media-box__desc">规格：<span>{{goods.spec}}</span></p>
                                        <div class="clear mg-t-10">
                                            <div class="wy-pro-pri fl">¥<em class="num font-15">{{goods.price}}</em></div>
                                            <div class="pro-amount fr"><span class="font-13">数量×<em class="name">{{goods.number}}</em></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ord-statistics">
                                <span>共<em class="num">{{list.allNumber}}</em>件商品，</span>
                                <span class="wy-pro-pri">总金额：¥<em class="num font-15">{{list.allPrice}}</em></span>
                                <span>(含运费<b>￥{{list.freight}}</b>)</span>
                            </div>
                            <div class="weui-panel__ft">
                                <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">
                                    <a href="javascript:;" class="ords-btn-com receipt">确认收货</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="tab5" class="weui-tab__bd-item">
                        <div class="weui-panel weui-panel_access" v-for="list in orderLists">
                            <div class="weui-panel__hd"><span>单号：{{list.code}}</span><span
                                    class="ord-status-txt-ts fr">待评价</span></div>
                            <div class="weui-media-box__bd  pd-10">
                                <div class="weui-media-box_appmsg ord-pro-list" v-for="goods in list.data">
                                    <div class="weui-media-box__hd"><a v-link="{name:'pro_info',params:{ goodsId: goods.id }}"><img
                                            class="weui-media-box__thumb" :src="goods.src" alt=""></a>
                                    </div>
                                    <div class="weui-media-box__bd">
                                        <h1 class="weui-media-box__desc"><a v-link="{name:'pro_info',params:{ goodsId: goods.id }}" class="ord-pro-link">{{goods.title}}</a>
                                        </h1>
                                        <p class="weui-media-box__desc">规格：<span>{{goods.spec}}</span></p>
                                        <div class="clear mg-t-10">
                                            <div class="wy-pro-pri fl">¥<em class="num font-15">{{goods.price}}</em></div>
                                            <div class="pro-amount fr"><span class="font-13">数量×<em class="name">{{goods.number}}</em></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="ord-statistics">
                                <span>共<em class="num">{{list.allNumber}}</em>件商品，</span>
                                <span class="wy-pro-pri">总金额：¥<em class="num font-15">{{list.allPrice}}</em></span>
                                <span>(含运费<b>￥{{list.freight}}</b>)</span>
                            </div>
                            <div class="weui-panel__ft">
                                <div class="weui-cell weui-cell_access weui-cell_link oder-opt-btnbox">
                                    <a href="comment.html" class="ords-btn-com">去评价</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import MyHeader from '../components/my_header.vue';
    import '../assets/js/jquery-weui.js';
    import * as main from '../api/main';
    export default {
        ready (){
            $('head title').html(this.headData);
            var _this = this;
            main.getAjax({
                url:"/static/data/main.json",
                ret(result){
                    _this.$set('orderLists',result.orderLists);
                }
            });
            $(document).on("click", ".ords-btn-dele", function () {
                $.confirm("您确定要删除此订单吗?", "确认删除?", function () {
                    $.toast("订单已经删除!");
                }, function () {
                    //取消操作
                });
            });
            $(document).on("click", ".receipt", function () {
                $.alert("五星好评送蓝豆哦，赶快去评价吧！", "收货完成！");
            });
        },
        data (){
            return {
                headData: '全部订单',
                orderLists:''
            }
        },
        methods: {
            ajaxSend: function (index) {
                var _this = this;
                main.getAjax({
                    url:"/static/data/main.json",
                    ret(result){
                        _this.$set('orderLists',result.orderLists);
                    },
                    data:{
                        status:index
                    }
                });
            }
        },
        components: {
            MyHeader
        }
    }
</script>
<style>
    @import '../assets/css/weui.min.css';
    @import '../assets/css/jquery-weui.css';
    @import '../assets/css/style.css';
</style>

