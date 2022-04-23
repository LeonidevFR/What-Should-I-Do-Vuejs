import Vue from 'vue'
import App from './js/App'
import axios from 'axios'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@/assets/scss/global.scss'

Vue.prototype.$http = axios
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
