import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello';
import Posts from '../components/Posts';
import NotFound from '../components/NotFound';


Vue.use(Router);
export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Hello
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '*',
      redirect: 'not-found'
    },
  ]
})