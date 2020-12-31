<!--
 * @Author: liudong
 * @Date: 2020-12-30 16:56:01
 * @Description: 文件描述
 * @FilePath: \movie-app\client-vue3\src\components\common\MovieItem.vue
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-31 15:59:00
-->
<template>
  <div class="wrap">
    <router-link :to="`/movie/${item.id}`" class="item" v-for="item in list" :key="item.id">
      <div class="movie-wrap">
        <div class="img-wrap">
          <img :src="item.poster" :alt="item.title">
        </div>
        <div class="con">
          <p class="title">{{item.title}}</p>
          <span class="rate">豆瓣评分： <span>{{ item.rate }}</span></span>
          <p class="type">类型：{{item.movieTypes.map(v => v.name).join('/') }}</p>
        </div>
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
  name: 'MovieList',
  setup() {
    return {};
  }
});
</script>

<style lang='scss' scope>
.wrap {
  padding: 0 10px;
  .movie-wrap {
    color: $color-text-primary;
    @include layout-flex(normal, space-between);
    margin-bottom: 10px;
    .img-wrap {
      width: 30%;
      padding-right: 20px;
      img {
        width: 100%;
      }
    }
    .con {
      flex: 1;
      .title {
        padding: 6px;
      }
      .rate {
        padding: 6px;
        span {
          color: $color-golden;
          font-weight: 700;
        }
      }
      .type {
        padding: 6px;
      }
    }
  }
}
</style>