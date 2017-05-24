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
			component (resolve) {
				require(['./views/home.vue'],resolve);
			}
		},
		'/pro_list': {//商品列表
			component (resolve) {
				require(['./views/pro_list.vue'],resolve);
			}
		},
		'/all_orders': {//全部订单
			component (resolve) {
				require(['./views/all_orders.vue'],resolve);
			}
		},
		'/pro_info/:goodsId': {
			name:'pro_info',
			component (resolve) {
				require(['./views/pro_info.vue'], resolve)
			}
		}
	})
}