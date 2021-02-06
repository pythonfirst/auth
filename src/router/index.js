import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import {check, isLogin} from '@/utils/auth'
import { PERMISSION } from '../const/permission'
Vue.use(VueRouter);

/**
 * 递归寻找目标路由的key值
 * @param {Array} routes 路由表
 * @param {String} path 目标path
 */
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
 * name 无name属性的不在侧边栏渲染
 * hiddenInMenu:true; 该路由及其子菜单不需要在侧边栏渲染。
 * label: 侧边栏显示的文案
 * meta.key: 权限控制的key,需与服务端获取的一致才能跳转
 * meta.icon 菜单栏显示的图标
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
      {
        path: '/dashboard',
        name: 'dashboard',
        label: '工作台',
        meta: { icon: 'ios-navigate', key: PERMISSION.dashboard},
        component: { render: (h) => h('router-view') },
        children: [
          {
            path: '/dashboard',
            redirect: '/dashboard/analysis',
          },
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            meta: {key: PERMISSION.dashboardAnalysis},
            label: '分析页',
            component: () => import(/* webpackChunkName: "analysis" */ '../views/Dashboard/Analysis'),
          },
          {
            path: '/dashboard/chart',
            meta: {key: PERMISSION.dashboardChart},
            name: 'chart',
            label: '图表页',
            component: { render: (h) => h('router-view') },
            children: [
              {
                path: '/dashboard/chart',
                redirect: '/dashboard/chart/column',
              },
              {
                path: '/dashboard/chart/column',
                meta: {key: PERMISSION.dashboardChartColumn},
                name: 'column',
                label: '柱形图',
                 component: () => import(/* webpackChunkName: "analysis" */ '../views/Dashboard/Chart'),
              }
            ]
          },
        ],
      },
      {
        path: '/auth',
        name: 'auth',
        label: '权限控制',
        meta: { icon: 'md-briefcase', key: PERMISSION.auth},
        component: { render: (h) => h('router-view') },
        children: [
          {
            path: '/auth',
            redirect: '/auth/directive',
          },
          {
            path: '/auth/directive',
            meta: {key: PERMISSION.authDirective},
            name: 'directive',
            label: '自定义指令',
            component: () => import(/* webpackChunkName: "analysis" */ '../views/Auth/Directive'),
          },
          {
            path: '/auth/component',
            meta: {key: PERMISSION.authComponent},
            name: 'component',
            label: '函数式组件',
            component: () => import(/* webpackChunkName: "analysis" */ '../views/Auth/component'),
          },
        ]
      },
      {
        path: '/403',
        // name: '403',
        // label: '403',
        // meta: { icon: 'md-briefcase'},
        // hiddenInMenu: true, //是否需要渲染到侧边栏菜单,默认为true。
        component: () =>
          import(
            /* webpackChunkName: 'dashboard' */ "../views/403"
          )
      }
    ],
  },
  {
    path: '*',
    showInMenu: false,
    component: () => import(/* webpackChunkName: "analysis" */ '../views/404'),
  },
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
  const key = findRoute(routes, to.fullPath)
  if (!check(key)) {
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
