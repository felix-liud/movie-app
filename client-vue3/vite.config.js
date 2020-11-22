// 导入别名
const pathAliasMap = {
  '@/': '/src/',
}

export default {
  cssPreprocessOptions: {
    less: {
      modifyVars: {
        'preprocess-custom-color': '#3ac0d5'
      }
    }
  },
  // 此方式无效
  // alias: {
  //   '@/': path.resolve(__dirname, './src'),
  // },
  resolvers: [
    {
      alias(path) {
        for (const [slug, res] of Object.entries(pathAliasMap)) {
          if (path.startsWith(slug)) {
            return path.replace(slug, res)
          }
        }
      },
    },
  ],

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
