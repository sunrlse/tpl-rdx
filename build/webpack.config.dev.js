const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const { resolve } = require("./bundle")
const webpackBaseFn = require("./webpack.config.base");

module.exports = function(env) {
  const baseConfig = webpackBaseFn(env)
  return webpackMerge(baseConfig, {
    mode: "development",
    devServer: {
      contentBase: resolve("dist"),
      host: "0.0.0.0",
      // useLocalIp: true,
      overlay: {
        errors: true,
        warnings: true
      },
      // open: true,
      hot: true,
      historyApiFallback: true,
      inline: true,
      disableHostCheck: true,
      stats: {
        colors: true,
        // assets: false,
        chunks: false,
        chunkGroups: false,
        chunkModules: false,
        chunkOrigins: false,
        modules: false,
        moduleTrace: false,
        source: false,
        builtAt: false,
        children: false,
        hash: false,
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.API_ENV': '"dev"'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
