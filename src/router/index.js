import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
// import Home from '../views/Home.vue';
// import RenderRouterView from '../components/RenderRouterView.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/user',
    redirect: '/user/login',
  },
  {
    path: '/user',
    // component: RenderRouterView,
    component: { render: (h) => h('router-view') },
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '../views/user/Login'),
      },
      {
        path: '/user/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '../views/user/Register'),
      },
    ],
  },
  {
    path: '/',
    // component: RenderRouterView,
    // component: { render: h => h("router-view")},
    component: () => import(/* webpackChunkName: "analysis" */ '../Layouts/BasicLayout'),
    children: [
      {
        path: '/',
        redirect: '/dashboard/analysis',
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: { render: (h) => h('router-view') },
        children: [
          {
            path: '/dashboard',
            redirect: '/dashboard/analysis',
          },
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: () => import(/* webpackChunkName: "analysis" */ '../views/Dashboard/Analysis'),
          },
        ],
      },
    ],
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "analysis" */ '../views/404'),
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

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router;
