import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
Vue.config.productionTip = false
import App from './App.vue'

new Vue({
  render: h => h(App),
}).$mount('#app')
