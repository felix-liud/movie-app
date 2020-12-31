<!--
 * @Author: liudong
 * @Date: 2020-12-04 14:24:05
 * @Description: 推荐/首页
 * @FilePath: \movie-app\client-vue3\src\views\home\recommend\index.vue
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-31 08:57:18
-->
<template>
  <div class="main">
    <div class="title">
      <h3>正在热映（{{ playing.count }}）</h3>
      <router-link to="/search" class="iconfont icon-xiangyou more"></router-link>
    </div>
    <ColumnList :list="playing.movies"/>
    <div class="title">
      <h3>即将热映（{{ comming.count }}）</h3>
      <router-link to="/search" class="iconfont icon-xiangyou"></router-link>
    </div>
    <ColumnList :list="comming.movies"/>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs, watch, watchEffect } from 'vue';
import { mapActions, useStore } from 'vuex';
import { StateType } from '/@/utils/store/modules/recommend';
import { MovieObjType } from '../../../store/modules/recommend';
import ColumnList from '/@/components/common/ColumnList.vue';
type ActionType = 'recommend/requestHostList';

export default defineComponent({
  name: 'Recommend',
  components: {
    ColumnList
  },
  setup() {
    const { dispatch, state } = useStore();
    let playing = computed<MovieObjType>(() => state.recommend.playing);
    let comming = computed(() => state.recommend.comming);
    onMounted(async () => {
      await dispatch('recommend/requestHostList');
    });
    return {
      playing,
      comming
    };
  }
});
</script>

<style lang="scss">
.title {
  display: flex;
  justify-content: space-between;
  padding: 6px 2px;
  font-size: 18px;
  font-weight: bold;
  color: $color-theme;
  .more {
    width: 20px;
    font-weight: bold;
  }
}
</style>
