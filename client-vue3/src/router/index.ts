/*
 * @Author: liudong
 * @Date: 2020-11-20 17:44:23
 * @version: 路由配置
 * @Description: 文件描述
 * @FilePath: \movie-app\client-vue3\src\router\index.ts
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-31 16:54:32
 */
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/@/views/home/index.vue'),
    redirect: '/recommend',
    children: [
      {
        path: '/recommend',
        name: 'Recommend',
        component: () => import ('/@/views/home/recommend/index.vue'),
      },
      {
        path: '/category',
        name: 'Category',
        component: () => import ('/@/views/home/category/index.vue'),
      },
      {
        path: '/rank',
        name: 'Rank',
        component: () => import ('/@/views/home/rank/index.vue'),
      },
      {
        path: '/search',
        name: 'Search',
        component: () => import ('/@/views/home/search/index.vue'),
      }
    ]
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: () => import ('/@/views/movie-detail/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('/@/views/login/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
  }
});

export default router;
