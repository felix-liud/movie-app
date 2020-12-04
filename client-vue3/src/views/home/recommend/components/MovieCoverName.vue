<template>
  <router-link :to="link">
    <div class="cover-wrap">
      <img :src="src" alt="cover" class="cover" >
      <p class="title">{{ title }}</p>
    </div>
  </router-link>
</template>
  
<script lang='ts'>
import { defineComponent, reactive } from 'vue';
import { RouterLink } from 'vue-router';
export default defineComponent({
  name: '',
  props: {
    title: {
      required: true,
      type: String
    },
    cover: {
      required: true,
      type: String
    },
    // link跳转
    link: {
      type: String
    },
    // 评分
    rate: {
      type: String
    }
  },
  setup() {
  
    return {
      
    };
  }
});
</script>

<style lang='scss' scope>
.cover-wrap {
  .cover {
    width: 80px;
    height: 128px;
  }
  .title {
    font-size: 16px;
    color: $color-text-primary;
    @include text-ellipsis();
  }
}
</style>