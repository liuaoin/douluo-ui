const { chainWebpackConfig } =  require('./utils')

module.exports = {
  publicPath: '/douluo-ui',
  outputDir: 'dist',
  productionSourceMap: false,

  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'mifei',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  configureWebpack: {
  },

  css: {
    sourceMap: true
  },

  chainWebpack: (config) => {
    // 设置babel转义
    config.module
      .rule('js')
      .include.add(/examples/).end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => options);
    // 公共config
    chainWebpackConfig(config)
  }
};
