import Vue from 'vue';
import Router from 'vue-router';
import NotFound from '../components/NotFound';
import HomeComponent from '../components/HomeComponent';
import CreateComponent from '../components/CreatComponent';
import IndexComponent from '../components/IndexComponent';
import EditComponent from '../components/EditComponent';

Vue.use(Router);

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeComponent
    },
    {
      name: 'create',
      path: '/create',
      component: CreateComponent
    },
    {
      name: 'posts',
      path: '/posts',
      component: IndexComponent
    },
    {
      name: 'edit',
      path: '/edit:id',
      component: EditComponent
    },
    {
      name: 'notFound',
      path: '/not-found',
      component: NotFound
    },
    {
      path: '*',
      redirect: 'not-found'
    },
  ]
})