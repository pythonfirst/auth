import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import {check, isLogin} from '@/utils/auth'
import findLast from "lodash";
Vue.use(VueRouter);

function findRoute(routes, path) {
  for (let route of routes) {
    if (route.path === path) {
      return route?.meta?.key
    }
    if (route.children) {
      const record = findRoute(route.children, path)
      if (record) return record
    }
  }
  return undefined
}

/**
 * hiddenInMenu:true; 不需要在侧边栏渲染。
 * label: 侧边栏显示的文案
 * key: 权限控制的key,需与服务端获取的一致才能跳转
 */
const routes = [
  {
    path: '/user',
    hiddenInMenu: true, //是否需要渲染到侧边栏菜单,默认为true。
    component: { render: (h) => h('router-view') },
    children: [
      {
        path: '/user',
        redirect: '/user/login',
      },
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
    component: () => import(/* webpackChunkName: "analysis" */ '../Layouts/BasicLayout'),
    children: [
      {
        path: '/',
        redirect: '/dashboard/analysis',
      },
      // dashboard 存在name则渲染在菜单，没有则不需要渲染
      {
        path: '/dashboard',
        name: 'dashboard',
        key: 'dashboard',
        label: '工作台',
        meta: { icon: 'ios-navigate'},
        component: { render: (h) => h('router-view') },
        children: [
          {
            path: '/dashboard',
            redirect: '/dashboard/analysis',
          },
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            key: 'dashboard_analysis',
            meta: {key: 'dashboard_analysis'},
            label: '分析页',
            component: () => import(/* webpackChunkName: "analysis" */ '../views/Dashboard/Analysis'),
          },
          {
            path: '/dashboard/chart',
            meta: {key: 'dashboard_chart'},
            name: 'chart',
            key: 'dashboard_chart',
            label: '图表页',
            component: () => import(/* webpackChunkName: "analysis" */ '../views/Dashboard/Chart'),
          },
        ],
      },
      {
        path: '/auth',
        name: '权限控制',
        key: 'auth',
        label: '权限控制',
        meta: { icon: 'md-briefcase'},
        component: { render: (h) => h('router-view') },
        children: [
          {
            path: '/auth',
            redirect: '/auth/directive',
          },
          {
            path: '/auth/directive',
            meta: {key: 'auth_directive'},
            name: 'directive',
            key: 'auth_directive',
            label: '指令',
            component: () => import(/* webpackChunkName: "analysis" */ '../views/Auth/Directive'),
          },
        ]

      }
    ],
  },
  {
    path: '*',
    showInMenu: false,
    component: () => import(/* webpackChunkName: "analysis" */ '../views/404'),
  },
  {
    path: '/403',
    hiddenInMenu: true, //是否需要渲染到侧边栏菜单,默认为true。
    component: () =>
      import(
        /* webpackChunkName: 'dashboard' */ "../views/403"
      )
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  const record = findRoute(routes, to.fullPath)
  if (!check(record)) {
    if (!isLogin() && to.path !== '/user/login') {
      next({
        path: '/user/login'
      })
    } else if (to.path !== '/403') {
      next({
        path: "/403"
      });
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});
export default router;
