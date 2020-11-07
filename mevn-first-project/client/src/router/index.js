import Vue from 'vue';
import Router from 'vue-router'
import HelloWorld from '../components/Todos';
import ToDo from '../components/ToDo';
import NotFound from '../components/NotFound';



Vue.use(Router);


export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todos',
      name: 'ToDo',
      component: ToDo
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '*',
      redirect: "not-found"
    },
  ]
})
