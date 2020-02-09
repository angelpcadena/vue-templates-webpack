import Vue from 'vue'
import VueRouter from 'vue-router'

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
	}
]

export default new VueRouter({ mode: 'history', routes })