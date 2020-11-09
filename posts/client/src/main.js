import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
