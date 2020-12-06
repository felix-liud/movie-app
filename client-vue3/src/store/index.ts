import { state } from './state';
import { createStore } from 'vuex';
import recommend from './modules/recommend';
export default createStore({
  state,
  mutations: {},
  actions: {},
  modules: {
    recommend
  },
});
