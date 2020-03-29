import Vue from 'vue'
import Router from 'vue-router'

import Order from '../Order/Order'
import Menu from '../Menu/Menu'
import Tables from '../Tables/Tables'
import Success from '../Views/Success'
import Fail from '../Views/Fail'
import Error404 from '../Errors/404'

Vue.use(Router)

var router = new Router({
	routes: [
		{
			path: '/',
			components: {
				default: Order,
				menu: Menu
			}
		},

		{
			path: '/mesa',
			component: Tables,
			props: true,
			children: [
				{
					path: 'enviado/:id',
					component: Success,
					props: true
				},
				{
					path: 'fallido/:id',
					component: Fail,
					props: true
				}
			]
		},

		{
			path: '*',
			component: Error404
		}
	]
});

export default router