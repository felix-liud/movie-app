/*
 * @Author: liudong
 * @Date: 2020-12-23 15:34:04
 * @Description: 文件描述
 * @FilePath: \movie-app\client-vue3\src\hooks\useUrlLoader.ts
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-23 17:21:20
 */
import { ref, UnwrapRef } from 'vue';
import axios, { AxiosResponse } from 'axios';
export default function<T>(url: string) {
  const res = ref<T | null>(null);
  const loading = ref(true);
  const loaded = ref(false);
  const error = ref(null);
  axios.get(url)
    .then((rawData: AxiosResponse<T>) => {
      loaded.value = true;
      loading.value = false;
      res.value = rawData.data as UnwrapRef<T>
    })
    .catch(e => {
      loading.value = false;
      error.value = e;
    })

  return {
    res,
    loading,
    loaded,
    error
  }
}