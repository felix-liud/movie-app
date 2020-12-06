/*
 * @Author: liudong
 * @Date: 2020-12-04 17:17:11
 * @Description: aixos
 * @FilePath: \movie-app\client-vue3\src\utils\request.ts
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-05 15:44:02
 */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
const request = axios.create({
  timeout: 10 * 1000,
  baseURL: '/api/'
});


// 根据不同的状态码，生成不同的提示信息
const showStatus = (status: number) => {
  let message = ''
  // 这一坨代码可以使用策略模式进行优化
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '未授权，请重新登录(401)'
      break
    case 403:
      message = '拒绝访问(403)'
      break
    case 404:
      message = '请求出错(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网络错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网络超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return `${message}，请检查网络或联系管理员！`
}


axios.interceptors.request.use((config: AxiosRequestConfig): Promise => {

}

);
request.interceptors.response.use(
  (res: AxiosResponse) => {
    const status = res.status;
    let msg = '';
    if (status < 200 || status >= 300) {
      // 处理http错误，抛到业务代码
      msg = showStatus(status)
      if (typeof res.data === 'string') {
        res.data = { msg }
      } else {
        res.data.msg = msg
      }
    }
    return res.data
  },
  (error: AxiosError) => {
    Promise.reject(error);
  }
);

export default request;


