const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    externals: {
      vue: 'Vue'
    },
    plugins: [new BundleAnalyzerPlugin()]
  },
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(90000000)
      .maxAssetSize(90000000)
  }
}
