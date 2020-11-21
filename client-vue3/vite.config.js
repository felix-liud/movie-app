import path from 'path';

export default {
  cssPreprocessOptions: {
    less: {
      modifyVars: {
        'preprocess-custom-color': '#3ac0d5'
      }
    }
  },
  // 导入别名
  alias: {
    '/@/': path.resolve(__dirname, './src'),
    '/@view/': path.resolve(__dirname, './src/views'),
    '/@components/': path.resolve(__dirname, './src/components'),
    '/@utils/': path.resolve(__dirname, './src/utils'),
  },
  proxy: {
    // string shorthand
    '/foo': 'http://localhost:4567/foo',
    // with options
    '/api': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }

}
