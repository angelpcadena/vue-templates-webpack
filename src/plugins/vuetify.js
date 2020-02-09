import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)	

const opts = {
	icons: {
		iconfont: 'nn',
		values: {
			menu: 'nn-ul'
		}
	}
}

export default new Vuetify(opts)