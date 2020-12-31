/*
 * @Author: liudong
 * @Date: 2020-12-04 17:17:11
 * @Description: aixos
 * @FilePath: \movie-app\client-vue3\src\utils\request.ts
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-31 16:26:41
 */
import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";
import { reactive, UnwrapRef, onMounted, toRefs } from 'vue';

const TIME_OUT = 10 * 1000; // 请求超时时间
const request: AxiosInstance = axios.create({
  timeout: TIME_OUT,
  baseURL: '/api/'
});


/** 响应数据类型 */
interface TypeResponseData {
  code: 200 | 300,
  errMsg: string;
  data?: any;
};

/** 全局请求拦截 */
request.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

/** 全局响应拦截 */
request.interceptors.response.use(
  (response: AxiosResponse<TypeResponseData>) => {
    const { data } = response;
    switch(data.code){
      case 200:
        return data.data;
      case 300:
        console.log('错误信息', data.errMsg);
        Promise.reject(response);
      default:
        Promise.reject(response);
    };
  },
  (error: any) => {
    Promise.reject(error);
  }
);
export default request;


export interface DataType<T> {
  loading: Boolean;
  error: string;
  data: T | null;
};
export function useRequest <T> (config: AxiosRequestConfig) {
  const state = reactive< DataType<T> >({
    loading: true,
    error: '',
    data: null,
  })
  const fetch = (config: AxiosRequestConfig) => {
    request({
      ...config
    })
      .then(res => {
        state.data = res as UnwrapRef<T>;
        console.log('data: ', res);
      })
      .catch(error => {
        state.data = null;
        state.error = error;
      })
      .finally(() => {
        state.loading = false;
      });
  };
  fetch(config);
  return {
    ...toRefs(state),
    fetch
  }
}


