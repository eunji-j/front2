import Vue from 'vue'
import App from './App.vue'
import VueSession from 'vue-session'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueSession)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
