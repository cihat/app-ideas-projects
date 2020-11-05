import Vue from 'vue'
import App from './App.vue';
import router from './router';
import SuiVue from 'semantic-ui-vue';

Vue.use(SuiVue);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
