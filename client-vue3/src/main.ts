/*
 * @Author: liudong
 * @Date: 2020-11-20 17:37:03
 * @version: 模块版本
 * @Description: 必要描述
 * @FilePath: \movie-app\client-vue3\src\main.ts
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-31 15:30:36
 */
import { createApp } from 'vue'
import App from './App.vue'
import '/@/assets/style/reset.scss';
import router from './router';
import store from './store';
const app = createApp(App)

  app.use(router)
  .use(store)
  .mount('#app')
