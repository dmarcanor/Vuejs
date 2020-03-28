import Vue from 'vue'
import Router from 'vue-router'
import OrderMenu from '../Handlers/OrderMenu'
import Order from '../Order/Order'
import Tables from '../Tables/Tables'

Vue.use(Router)

var router = new Router({
	routes: [
		{
			path: '/',
			component: Tables
		},

		{
			path: '/:id/order',
			component: OrderMenu,
			props: true
		}
	]
});

export default router