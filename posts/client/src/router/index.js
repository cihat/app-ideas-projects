import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello';
import NotFound from '../components/NotFound';
import Posts from '../components/Posts';
import addpost from '../components/AddPost';
import editpost from '../components/editPost';


Vue.use(Router);
export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'posts',
      component: Posts
    },
    {
      path: '/posts/add',
      name: 'addpost',
      component: addpost
    },
    {
      path: '/posts/edit',
      name: 'editpost',
      component: editpost
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