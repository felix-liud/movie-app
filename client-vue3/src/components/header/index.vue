<!--
 * @Author: liudong
 * @Date: 2020-12-04 14:24:05
 * @Description: 头部组件
 * @FilePath: \movie-app\client-vue3\src\components\header\index.vue
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-04 16:40:29
-->
<template>
  <div class="header">
    <div class="icon-wrap">
      <img src="/@/assets/images/movie.png" alt="icon" class="icon">
    </div>
    <div class="right-wrap">
      <nav>
        <router-link :to="item.link" v-for="item in navs" :key="item.link">
          {{ item.name }}
        </router-link>
      </nav>
      <div class="avatar">
        <!-- 登录用户 -->
        <router-link to="/login" class="iconfont icon-user"></router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
type NavItem = {
  name: string;
  link: string;
}
type StateType = {
  navs: NavItem[];
  count?: number;
}
const NavList: NavItem[] = [
  {
    name: '首页',
    link: '/recommend'
  },
  {
    name: '分类',
    link: 'category'
  },
  {
    name: '榜单',
    link: 'rank'
  },
  {
    name: '搜索',
    link: 'search'
  },
];
export default defineComponent({
  name: 'App',
  setup() {
    const state = reactive<StateType>({
      count: 0,
      navs: NavList
    });
    const test = (index: number) => {
      return () => {
        state.count += index;
      }
    }
    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss">
.header {
  background-color: $color-theme;
  color: $color-white;
  height: 60px;
  @include layout-flex(center, space-between);
  .icon-wrap {
    margin: 0 20px;
  }
  .icon {
    width: 30px;
    height: 30px;
  }
  .right-wrap {
    @include layout-flex();
    flex-direction: flex-end;
    nav {
      @include layout-flex(center, normal);
      a {
        width: 50px;
        font-size: 16px;
        color: $color-white;
        position: relative;
        text-align: center;
        &.router-link-active {
          color: $color-blue;
        }
        &.router-link-active::after {
          content: '';
          display: block;
          position: absolute;
          height: 2px;
          background-color: $color-blue;
          bottom: -20px;
          width: 100%;
        }
      }
    }
    .avatar {
      width: 50px;
      text-align: center;
      a {
        font-size: 16px;
        color: $color-white;
      }
    }
  }
  
}
</style>
