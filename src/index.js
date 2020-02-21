import Vue from 'vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify'
import router from './plugins/router'

import App from './App'

import /* webpackPrefetch: true */ "./styles/nocnok-icons.css"
import /* webpackPrefetch: true */ "./styles/montserrat.css"
import /* webpackPrefetch: true */ "./styles/source-sans-pro.css"

Vue.use(Vuex)

new Vue({
	vuetify,
	router,
	render: h => h(App)
}).$mount('#app')