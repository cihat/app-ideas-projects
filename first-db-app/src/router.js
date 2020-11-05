import Vue from "vue";
import VueRouter from "vue-router"
import Tasks from './views/Tasks';
import New from './views/New';
import Show from './views/Show';
import Edit from './views/Edit';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BABEL_ENV,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/tasks'
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/tasks/new',
      name: 'new-task',
      component: New
    },
    {
      path: '/tasks/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/tasks/:id/edit',
      name: 'edit',
      component: Edit
    }
  ]
});
