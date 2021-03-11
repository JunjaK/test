import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/test',
    component: () => import('../views/test'),
    children: [
      {
        path: '/nested/test',
        component: () => import('../views/nestedTest'),
        props: {

        },
      },
      {
        path: '/nested/test1',
        component: () => import('../views/nestedTest1'),
      },
      {
        path: '/nested/test2',
        component: () => import('../views/nestedTest2'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
