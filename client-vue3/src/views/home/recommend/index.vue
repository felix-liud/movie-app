<!--
 * @Author: liudong
 * @Date: 2020-12-04 14:24:05
 * @Description: 头部组件
 * @FilePath: \movie-app\client-vue3\src\views\home\recommend\index.vue
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-06 18:10:04
-->
<template>
  <div class="main">
    推荐
  </div>
</template>
<script lang="ts">
import request from '/@/utils/request.ts';
import { defineComponent, onMounted, reactive } from 'vue';
import { mapActions, useStore } from 'vuex';
type ActionType = 'requestHostList';

export default defineComponent({
  name: 'Recommend',
  methods: {
    ...mapActions({
      requestHostList: 'requestHostList'
    })
  },
  created() {
    // this.requestHostList();
  },
  setup() {
    const { dispatch } = useStore();
    onMounted(() => {
      dispatch('requestHostList');
      
    })
    return {
      
    };
  }
});
</script>

<style lang="scss">

</style>
