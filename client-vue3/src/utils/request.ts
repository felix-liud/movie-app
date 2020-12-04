/*
 * @Author: liudong
 * @Date: 2020-12-04 17:17:11
 * @Description: aixos
 * @FilePath: \movie-app\client-vue3\src\utils\request.ts
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-04 17:49:33
 */
import axios from "axios";
const request = axios.create({
  timeout: 10 * 1000,
  baseURL: '/'
});

request.interceptors.response.use(
  res => res.data,
  () => {
    // messaage.error
  }
);

export default request;
