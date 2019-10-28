import Vue from 'vue'
import Router from 'vue-router'

import HeyUI from 'heyui';

import error404 from './views/error/404.vue'
import login from './views/login.vue'
import home from './views/home.vue'
import dashboard from './views/dashboard/index.vue'
import search from './views/search/index.vue'
import alarm from './views/alarm/index.vue'
import device from './views/device/index.vue'
import room from './views/room/index.vue'
import baseinfo from './views/baseinfo/index.vue'
import relation from './views/relation/index.vue'
import log from './views/log/index.vue'
import enterprise from './views/enterprise/index.vue'
import user from './views/user/index.vue'
import role from './views/role/index.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: dashboard
        },
        {
          path: 'search',
          name: 'search',
          component: search
        },
        {
          path: 'alarm',
          name: 'alarm',
          component: alarm
        },
        {
          path: 'device',
          name: 'device',
          component: device
        },
        {
          path: 'room',
          name: 'room',
          component: room
        },
        {
          path: 'baseinfo',
          name: 'baseinfo',
          component: baseinfo
        },
        {
          path: 'relation',
          name: 'relation',
          component: relation
        },
        {
          path: 'log',
          name: 'log',
          component: log
        },
        {
          path: 'enterprise',
          name: 'enterprise',
          component: enterprise
        },
        {
          path: 'user',
          name: 'user',
          component: user
        },
        {
          path: 'role',
          name: 'role',
          component: role
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '*',
      name: 'pageNotFound',
      component: error404
    }
  ]
})

router.beforeEach((to, from, next) => {
  HeyUI.$LoadingBar.start();
  const whiteList = ['login', 'pageNotFound'];
  let token = sessionStorage.getItem("token");
  if (token) {
    next();
  } else {
    console.log('to.name :', to.name);
    if (whiteList.filter(item => item == to.name).length > 0) {
      next();
    } else {
      next('/login');
    }
  }
});
router.afterEach(() => {
  HeyUI.$LoadingBar.success();
});

export default router;