/*
 * @Author: liudong
 * @Date: 2020-11-20 17:37:03
 * @version: 模块版本
 * @Description: 必要描述
 * @FilePath: \movie-app\client-vue3\src\main.ts
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-30 17:41:40
 */
import { createApp } from 'vue'
import App from './App'
import '/@/assets/style/reset.scss';
import router from './router';
import store from './store';
const app = createApp(App)
app.config.globalProperties.replaceUrl = (url: string): string => `https://images.weserv.nl/?url=${url}`;
  app.use(router)
  .use(store)
  .mount('#app')
