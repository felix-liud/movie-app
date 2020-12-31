<!--
 * @Author: liudong
 * @Date: 2020-12-04 14:24:05
 * @Description: 头部组件
 * @FilePath: \movie-app\client-vue3\src\views\home\index.vue
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-31 11:18:54
-->
<template>
  <div class="main">
    <my-header/>
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import MyHeader from '/@/components/header/index.vue';
import { RouterView } from 'vue-router';
export default defineComponent({
  name: 'App',
  components: { MyHeader },
  setup() {
    const state = reactive({
      count: 0,
    });
    const test = (index: number) => {
      return () => {
        state.count += index;
      }
    }
    return {
      state,
      test
    };
  }
});
</script>

<style lang="scss">
</style>
