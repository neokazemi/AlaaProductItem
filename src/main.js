import Vue from 'vue'
import App from './App.vue'
import VuePersianDigit from 'vue-persian-digit'

Vue.use(VuePersianDigit);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
