import Vue from 'vue'
import VueRouter from 'vue-router'

const NotFound = () => import('../views/404.vue')

const Index = () => import('../views/Index.vue')
const List = () => import('../views/List.vue')

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'index',
		component: Index,
		meta: {
			title: 'Inicio',
			icon: 'nn-pie-chart'
		}
	},
	{
		path: '/list',
		name: 'list',
		component: List,
		meta: {
			title: 'Lista',
			icon: 'nn-ul2'
		}
	},
	{
		path: '/*',
		name: 'NotFound',
		component: NotFound,
		meta: {
			title: '404 Not Found',
			hidden: true
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router