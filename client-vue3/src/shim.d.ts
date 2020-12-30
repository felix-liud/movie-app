/*
 * @Author: liudong
 * @Date: 2020-11-20 17:43:06
 * @Description: vue文件的ts类型申明
 * @FilePath: \movie-app\client-vue3\src\shim.d.ts
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-24 09:21:51
 */

declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
