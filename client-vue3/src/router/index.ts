/*
 * @Author: liudong
 * @Date: 2020-11-20 17:44:23
 * @version: 路由配置
 * @Description: 文件描述
 * @FilePath: \movie-api\client-vue3\src\router\index.ts
 * @LastEditors: liudong
 * @LastEditTime: 2020-11-24 14:15:37
 */
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/@/views/Home'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('/@/views/About'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
