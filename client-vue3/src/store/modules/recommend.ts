import { createStore, Store, StoreOptions } from 'vuex';
import request from '/@/utils/request.ts';

export interface MovieListItem {
  name: String;
  cover: String;


}
interface StateType {
  hotList: MovieListItem[],
  comingSoonList: MovieListItem[]
}


export default {
  state: {
    hotList : [],
    comingSoonList: []
  },
  mutations: {
    SET_HOT_LIST: (state: StateType, data: MovieListItem[]) => {
      state.hotList = data;
    },
    SET_COMING_SOON_LIST: (state: StateType, data: MovieListItem[]) => {
      state.comingSoonList = data;
    }
  },
  actions: {
    // 获取热映电影列表
    async requestHostList({ commit }) {
      console.log('requestHostList: ', 111);
      const res = await request({
        url: '/movie/hot'
      });
      console.log(res);
      commit('SET_HOT_LIST', [])
    },

  },
};
