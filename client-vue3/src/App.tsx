import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import Loading from '/@/components/common/Loading.vue';
export default defineComponent({
  name: 'App',
  components: {
    Loading
  },
  setup() {
    return () => (
      <>
        <div id="nav">
          <RouterLink to="/">{ () => '首页' }</RouterLink>|
          <RouterLink to="/about">{ () => '关于我们' }</RouterLink>
          <Loading />
        </div>
        <RouterView />
      </>
    );
  }
});
