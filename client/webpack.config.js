var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    // vendor: ['./assets/vendor/jquery/jquery.js', './assets/vendor/vue.js'],
    // custom: ['./assets/js/custom/custom.js']
    // // bootstrap: ['bootstrap-sass!./bs-sass.config.js'],
    // // login: './assets/js/member/login.js'
  },
  output: {
    path: 'dist/js',
    publicPath: 'js',
    filename: '[name].js'
    // chunkFilename: '[chunkhash].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Vue: 'vue'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['vendor']
    })
  ],
  module: {
    loaders: [
      //{ test: /\.vue$/, loader: 'vue' }

      // { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
      // { test: /\.scss$/, loader: "style!css!sass?outputStyle=expanded" },
      // { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      // { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&minetype=application/font-woff" },
      // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
    ]
  }
};
