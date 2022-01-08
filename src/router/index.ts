/*
 * @Author: json
 * @Date: 2021-12-25 11:08:47
 * @LastEditTime: 2021-12-25 11:48:34
 * @LastEditors: json
 * @Description: 路由配置
 * @FilePath: /template-admin/src/router/index.ts
 */
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> =  [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
});