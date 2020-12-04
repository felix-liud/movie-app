<!--
 * @Author: liudong
 * @Date: 2020-11-23 14:22:32
 * @version: 模块版本
 * @Description: loading加载组件
 * @FilePath: \movie-app\client-vue3\src\components\common\Loading.vue
 * @LastEditors: liudong
 * @LastEditTime: 2020-11-26 14:57:47
-->
<template>
  <div class="loading-wrap" :style="{ height: height }">
    <div class="spinner">
      <div class="rect rect1" />
      <div class="rect rect2" />
      <div class="rect rect3" />
      <div class="rect rect4" />
      <div class="rect rect5" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
  props: {
    height: {
      type: String,
      default: "100%"
    }
  }
});
</script>
<style lang="scss" scoped>
.loading-wrap{
  @include layout-flex(center);
}
.spinner{
  @include layout-flex(center, center);
  width: 100%;
  height: 40px;
  .rect{
    background: $color-blue;
    height: 100%;
    width: 5px;
    margin-right: 1px;
    animation: scale-y 1.2s infinite ease-in-out;
    &.rect2{
      animation-delay: -1.1s;
    }
    &.rect3{
      animation-delay: -1.0s;
    }
    &.rect4{
      animation-delay: -0.9s;
      
    }
    &.rect5 {
      animation-delay: -0.8s;
    }
  }
@keyframes scale-y{
  0%, 40%, 100%{
    transform: scaleY(0.4);
  }
  20%{
    transform: scaleY(1);
  }
}
}
</style>
