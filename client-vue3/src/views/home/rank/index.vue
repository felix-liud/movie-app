<!--
 * @Author: liudong
 * @Date: 2020-12-04 14:24:05
 * @Description: 头部组件
 * @FilePath: \movie-app\client-vue3\src\views\home\rank\index.vue
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-22 16:20:21
-->
<template>
  <div class="main">
    榜单
    <input type="text" v-model="state.name">
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, watch } from 'vue';
export default defineComponent({
  name: 'Rank',
  setup() {
    let state = reactive({
      name: ''
    })
    watch(() => state.name, (val) => {
      console.log(val, '----', state.name);
    })
    return {
      state
    };
  }
});
</script>

<style lang="scss">

</style>
