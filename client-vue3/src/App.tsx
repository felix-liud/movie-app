import { defineComponent } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import './style/main.less'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div id="nav">
          asdfasdf
          <RouterLink to="/">首页</RouterLink>|
          <RouterLink to="/about">关于我们</RouterLink>
        </div>
        <RouterView/>
      </>
    );
  }
});
