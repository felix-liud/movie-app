/*
 * @Author: liudong
 * @Date: 2020-11-23 09:31:10
 * @version: vite配置文件
 * @Description: 文件描述
 * @FilePath: \movie-app\client-vue3\vite.config.ts
 * @LastEditors: liudong
 * @LastEditTime: 2020-12-31 15:23:47
 */
const path = require('path');
const rf = require("fs");
// scss变量
const scssVariable = rf.readFileSync(path.resolve(__dirname, './src/assets/style/variable.scss'), "utf-8");

export default {
  cssPreprocessOptions: {
    scss: {
      additionalData: `${scssVariable}`, // 此处的值会被加入到scss文件头部
    }

  },
  // 引入第三方的配置
  optimizeDeps: {
    include: ["axios"]
  },

  // outputDir: 在npm run build 或 yarn build 时 ，生成文件的目录名称（要和baseUrl的生产环境路径一致）
  outputDir: "dist",
  //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: "static",
  // 压缩
  minify: 'esbuild',
  // 是否自动在浏览器打开
  open: false,
  // 是否开启 https
  https: false,
  // 此方式无效
  alias: {
    '/@/': path.resolve(__dirname, './src'),
  },
  // ssr: false,
  proxy: {
    // string shorthand
    '/foo': 'http://localhost:4567/foo',
    // with options
    '/api': {
      target: 'http://47.110.74.37:7001/',
      changeOrigin: true,
    }
  }

}
