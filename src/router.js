import Vue from 'vue';
export default function (router){
	//路由映射
	mode: 'history',
	router.map({
		'*': {
			component (resolve) {
				require(['./views/home.vue'],resolve);
			}
		},
		'/home': {//商城首页
			name:'home',
			component (resolve) {
				require(['./views/home.vue'],resolve);
			}
		},
		'/pro_list/:classId': {//商品列表
			name:'pro_list',
			component (resolve) {
				require(['./views/pro_list.vue'],resolve);
			}
		},
		'/all_orders/:tab': {//全部订单
			name:'all_orders',
			component (resolve) {
				require(['./views/all_orders.vue'],resolve);
			}
		},
		'/pro_info/:goodsId': {//产品详情
			name:'pro_info',
			component (resolve) {
				require(['./views/pro_info.vue'], resolve)
			}
		},
		'/settled_in': {//商家入驻
			name:'settled_in',
			component (resolve) {
				require(['./views/Settled_in.vue'], resolve)
			}
		},
		'/news_info/:goodsId': {//新闻详情
			name:'news_info',
			component (resolve) {
				require(['./views/news_info.vue'], resolve)
			}
		},
		'/order_infoOne/:goodsId/:goods': {//商品详情至立即购买
			name:'order_infoOne',
			component (resolve) {
				require(['./views/order_infoOne.vue'], resolve)
			}
		},
		'/order_infoTwo': {//购物车至立即购买
			name:'order_infoTwo',
			component (resolve) {
				require(['./views/order_infoTwo.vue'], resolve)
			}
		},
		'/classify': {//商城分类
			name:'classify',
			component (resolve) {
				require(['./views/classify.vue'], resolve)
			}
		},
		'/shopcart': {//购物车
			name:'shopcart',
			component (resolve) {
				require(['./views/shopcart.vue'], resolve)
			}
		},
		'/mine': {//会员中心
			name:'mine',
			component (resolve) {
				require(['./views/mine.vue'], resolve)
			}
		},
		'/address_list': {//地址管理
			name:'address_list',
			component (resolve) {
				require(['./views/address_list.vue'], resolve)
			}
		},
		'/login': {//地址管理
			name:'login',
			component (resolve) {
				require(['./views/login.vue'], resolve)
			}
		}
	})
}