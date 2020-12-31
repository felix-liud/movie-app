<!--
 * @Author: liudong
 * @Date: 2020-12-31 11:37:13
 * @Description: 文件描述
 * @FilePath: \movie-app\client-vue3\src\components\common\DPlayer.vue
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-31 14:54:06
-->
<template>
  <div ref="player" class="player">
    
  </div>
</template>
  
<script lang='ts'>
import { defineComponent, onMounted, reactive, ref } from 'vue';
import DPlayer from 'dplayer';
import 'vue-dplayer/dist/vue-dplayer.css';


const getOptions = (container: HTMLElement, { url, pic }) => ({
  container,
  autoplay: false,
  theme: '#FADFA3',
  loop: false,
  lang: 'zh-cn',
  screenshot: true,
  hotkey: true,
  preload: 'auto',
  // logo: 'logo.png',
  volume: 0.7,
  mutex: true,
  video: {
    url,
    pic, // 视频封面
    thumbnails: 'thumbnails.jpg',// 视频缩略图
    type: 'auto',
  }
});
const hiddenClassName = 'dplayer-hide-controller';
export default defineComponent({
  name: 'DPlayer',
  props: {
    url: {
      required: true,
      type: String
    },
    pic: {
      type: String
    }
  },
  setup({ url, pic }, { emit }) {
    const player = ref<HTMLElement>();
    const controlsIsHidden = () => {
      if (player.value) {
        return player.value.classList.toString().includes(hiddenClassName);
      }
      return false;
    };

    const showControls = () => {
      if (player.value && controlsIsHidden()) {
        (player.value.querySelector('.dplayer-video-wrap .dplayer-video') as HTMLElement).click();
      }
    }
    const hiddenControls = () => {
      if (player.value && !controlsIsHidden()) {
        (player.value.querySelector('.dplayer-video-wrap .dplayer-video') as HTMLElement).click();
      }
    }

    onMounted(() => {
      const options = getOptions(player.value, {url, pic})
      const dp = new DPlayer(options);
      dp.on('play', (e) => {
        setTimeout(() => {
          hiddenControls();
        }, 3000);
      });
      dp.on('ended', (e) => {
        showControls();
      });
    });
    return {
      player
    };
  }
});
</script>

<style lang='scss' scope>
.player {
  width: 100%;
  height: 100%;
}
</style>