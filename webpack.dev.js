const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: './dist',
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['./src/styles/common.scss', './src/styles/_mixins.scss'],
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // неправильно вставил для тестов?
//   loaders: [
//     { exclude: ['node_modules'], loader: 'babel', test: /\.jsx?$/ },
//     { loader: 'style-loader!css-loader', test: /\.css$/ },
//     { loader: 'url-loader', test: /\.gif$/ },
//     { loader: 'file-loader', test: /\.(ttf|eot|svg)$/ },
//   ],
// },
//   resolve: {
//   alias: {
//     config$: './configs/app-config.js',
//     react: './vendor/react-master',
//   },
//   extensions: ['', 'js', 'jsx'],
//   modules: [
//     'node_modules',
//     'bower_components',
//     'shared',
//     '/shared/vendor/modules',
//   ],
});
