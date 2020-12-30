import { state, State } from './state';
import { createStore, Store, Module} from 'vuex';
import recommend from './modules/recommend';
import { InjectionKey } from 'vue';
export type StoreStateType = typeof state
const common: Module<string, string> = {
  recommend
}
export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({
  state,
  mutations: {},
  actions: {},
  modules: common,
});

// 覆盖原有 useStore 函数中, 泛型默认值类型
declare module "vuex" {
  type StoreStateType = typeof state;
  type ModulesType = {
    common: typeof common;
  }
  export function useStore<S = StoreStateType & ModulesType>(): Store<S>;
}

export default store;