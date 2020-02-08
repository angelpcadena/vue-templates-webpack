import Vue from 'vue'
import App from './App'

import /* webpackPreload: true */ "./styles/reset.css"
import /* webpackPrefetch: true */ "./styles/montserrat.css"
import /* webpackPrefetch: true */ "./styles/source-sans-pro.css"

new Vue({
	el: '#app',
	render: h => h(App)
})