/*
 * @Author: liudong
 * @Date: 2020-12-07 09:01:42
 * @Description: recommend.ts
 * @FilePath: \movie-app\client-vue3\src\store\modules\recommend.ts
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-31 15:41:36
 */
import { ActionContext } from 'vuex';
import request from '/@/utils/request';
export interface CastType {
  avatar: string;
  name: string;
}
export interface MovieType {
  id: number;
  name: string;
}
export interface MovieListItem {
  author: string;
  casts: CastType[];
  cover: string;
  duration: string;
  id: number;
  isPlay: "0" | "1";
  movieTypes: MovieType[];
  poster: string;
  pubdate: string;
  rate: string;
  summary: string;
  title: string;
  video: string;
  viewCount: null | number;
}
export interface MovieObjType {
  count: number;
  movies: MovieListItem[];
}
export interface StateType {
  playing: MovieListItem[];
  comming: MovieListItem[];
}

export interface HotModel {
  comming: MovieObjType;
  playing: MovieObjType
};
export default {
  namespaced: true,
  state: {
    playing : {
      count: 0,
      movies: []
    },
    comming: {
      count: 0,
      movies: []
    }
  },
  mutations: {
    SET_HOT_LIST: (state: HotModel, data: MovieObjType) => {
      state.playing = data;
    },
    SET_COMING_SOON_LIST: (state: HotModel, data: MovieObjType) => {
      state.comming = data;
    }
  },
  actions: {
    // 获取热映电影列表
    async requestHostList({ commit }: ActionContext<StateType, unknown>) {
      const res: HotModel = await request.get('/movie/hot');
      commit('SET_HOT_LIST', res.playing);
      commit('SET_COMING_SOON_LIST', res.comming);
    },

  },
};
