<!--
 * @Author: liudong
 * @Date: 2020-11-23 14:22:32
 * @version: 模块版本
 * @Description: loading加载组件
 * @FilePath: \movie-app\client-vue3\src\views\movie-detail\index.vue
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-31 16:00:37
-->
<template>
  <div class="detail-wrap" v-if="!loading">
    <d-player :url="movie.video" :pic="movie.cover"/>
    <div class="movie">
      <div class="top">
        <h3 class="title">{{ movie.title }}</h3>
        <span>简介</span>
      </div>
      <p>{{movie.rate}}·{{ movie.movieTypes.map(v => v.name).join('/') }}·{{ movie.duration }}</p>
    </div>
    <h2 class="reactive-title">相关推荐</h2>
    <movie-item :list="relativeMovies"/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from 'vue';
import { useRoute } from "vue-router";
import DPlayer from "../../components/common/DPlayer.vue";
import { MovieListItem } from "../../store/modules/recommend";
import { useRequest } from '../../utils/request';
import MovieItem from '../../components/common/MovieItem.vue';
interface MovieDetail {
  movie: MovieListItem;
  relativeMovies: MovieListItem[]
};
export default defineComponent({
  name: "MovieDetail",
  components: {
    DPlayer,
    MovieItem
  },
  setup() {
    const route = useRoute();
    const { id } = route.params;
    const details = ref({
      author: '',
      casts: [],
      cover: '',
      duration: '',
      id: 0,
      isPlay: "0",
      movieTypes: [],
      poster: '',
      pubdate: '',
      rate: '',
      summary: '',
      title: '',
      video: '',
      viewCount: 0,
    });
    const { loading, error, data } = useRequest<MovieDetail>({
      url: `movie/${id}`
    });
    
    return {
      loading,
      movie: computed(() => data.value?.movie),
      relativeMovies: computed(() => data.value?.relativeMovies)
    }
  }
});
</script>
<style lang="scss" scoped>
.movie {
  padding: 10px;
  font-size: 14px;
  margin-bottom: 10px;
  .top {
    @include layout-flex(normal, space-between);
    margin-bottom: 10px;
  }
  p {
    color: $color-text-regular;
  }
}
.reactive-title {
  padding: 10px;
  margin-bottom: 10px;
  color: $color-text-primary;
  font-size: 16px;
  font-weight: bold;
}
</style>
