import Vue from 'vue'
import Router from 'vue-router'

import OrderView from '../Views/OrderView'
import Tables from '../Tables/Tables'
import Success from '../Order/Success'
import Fail from '../Order/Fail'
import Error404 from '../Errors/404'

Vue.use(Router)

var router = new Router({
	routes: [
		{
			path: '/',
			component: OrderView
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