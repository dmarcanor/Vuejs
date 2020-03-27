import Vue from 'vue'
import Router from 'vue-router'
import Menu from '../Menu/Menu'
import Order from '../Order/Order'

Vue.use(Router)

var router = new Router({
	routes: [
		{
			path: '/order',
			component: Order
		},

		{
			path: '/menu',
			component: Menu
		}
	]
});

export default router