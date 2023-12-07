import Vue from 'vue'
import App from './App.vue'
import router from './router';
import './assets/global.css'; 

Vue.config.productionTip = false

new Vue({
  router, // Add this line to use the router
  render: h => h(App),
}).$mount('#app')
