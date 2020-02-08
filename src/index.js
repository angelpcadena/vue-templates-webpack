import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App'

import /* webpackPreload: true */ "./styles/reset.css"
import /* webpackPrefetch: true */ "./styles/montserrat.css"
import /* webpackPrefetch: true */ "./styles/source-sans-pro.css"

new Vue({
	vuetify,
	render: h => h(App)
}).$mount('#app')