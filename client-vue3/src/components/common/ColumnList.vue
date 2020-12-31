<!--
 * @Author: liudong
 * @Date: 2020-12-30 16:56:01
 * @Description: 文件描述
 * @FilePath: \movie-app\client-vue3\src\components\common\ColumnList.vue
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-31 16:14:20
-->
<template>
  <div class="wrap">
    <router-link :to="`/movie/${item.id}`" class="item" v-for="item in list" :key="item.id">
      <div>
        <div class="img-wrap">
          <img :src="item.poster" :alt="item.title">
        </div>
        <span class="rate">{{ item.rate }}</span>
        <p>{{item.title}}</p>
      </div>
    </router-link>
    
  </div>
</template>
  
<script lang='ts'>
import { ComponentInternalInstance, defineComponent, PropType, reactive } from 'vue';
import { MovieListItem } from '../../store/modules/recommend';
export default defineComponent({
  props: {
    list: {
      required: true,
      type: Array as PropType<MovieListItem[]>
    }
  },
  name: 'ColumnList',
  setup() {
    return {};
  }
});
</script>

<style lang='scss' scope>
.wrap {
  display: flex;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  /* grid-row-gap: 10px;
  grid-column-gap: 10px; */
  .item {
    position: relative;
    padding: 2px;
    .rate {
      position: absolute;
      right: 10px;
      bottom: 30px;
      color: $color-golden;
      font-size: $font-size-large;
      font-style: italic;
    }
    .img-wrap {
      width: 100%;
      height: 140px;
      margin-bottom: 10px;
    }
    img {
      width: 100%;
      height: 100%;
    }
    p {
      @include text-ellipsis();
      color: $color-theme;
      padding: 2px 0;
    }
  }
}
</style>