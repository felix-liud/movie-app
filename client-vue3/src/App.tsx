import { defineComponent } from 'vue';
import {RouterLink, RouterView} from 'vue-router';
import './style/main.less'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div id="nav">
          asdfasdf
          <RouterLink to="/">Home</RouterLink> |
          <RouterLink to="/about">About</RouterLink>
        </div>
        <RouterView/>
      </>
    );
  }
});
