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
  },
  pwa: {
    name: 'Clucknest',
    themeColor: '#2a1b3d',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
 
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
    }
  }
}
