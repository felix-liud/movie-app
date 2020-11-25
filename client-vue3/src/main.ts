/*
 * @Author: liudong
 * @Date: 2020-11-20 17:37:03
 * @version: 模块版本
 * @Description: 必要描述
 * @FilePath: \movie-api\client-vue3\src\main.ts
 * @LastEditors: liudong
 * @LastEditTime: 2020-11-25 16:30:17
 */
import { createApp } from 'vue'
import App from './App'
import '/@/assets/style/reset.scss';
import router from './router';
import store from './store';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
