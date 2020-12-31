<!--
 * @Author: liudong
 * @Date: 2020-11-20 17:37:03
 * @Description: 文件描述
 * @FilePath: \movie-app\client-vue3\src\App.vue
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-31 16:18:16
-->
<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>
<script>

import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    return {
    };
  }
});
</script>
