import { defineComponent, reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import Loading from '/@/components/common/Loading.vue';
export default defineComponent({
  name: 'App',
  components: {
    Loading
  },
  setup() {
    const state = reactive({
      count: 0
    });
    const test = (index: number) => {
      return () => {
        state.count += index;
      }
    }
    return () => (
      <>
        <div id="nav">
          <button onClick={test(10)}>点击{ state.count }</button>
          <RouterLink to="/">{ ()=> '首页' }</RouterLink>|
          <RouterLink to="/about">{ () => '关于我们' }</RouterLink>
          <Loading />
        </div>
        <RouterView />
      </>
    );
  }
});
