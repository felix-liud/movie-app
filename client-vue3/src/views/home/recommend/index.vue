<!--
 * @Author: liudong
 * @Date: 2020-12-04 14:24:05
 * @Description: 头部组件
 * @FilePath: \movie-app\client-vue3\src\views\home\recommend\index.vue
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-04 17:44:07
-->
<template>
  <div class="main">
    推荐
  </div>
</template>
<script lang="ts">
import request from '/@/utils/request.ts';
import { defineComponent, onMounted, reactive } from 'vue';
export default defineComponent({
  name: 'Recommend',
  setup() {
    onMounted(() => {
      
      console.log('request: ', request);
    })
    return {
      
    };
  }
});
</script>

<style lang="scss">

</style>
