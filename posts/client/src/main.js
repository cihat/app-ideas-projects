import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
