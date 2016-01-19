/**
 * Build configuration.
 *
 * This will build the app with the result in the dist/ folder
 * Javascript dependencies are built to a separate file as are css
 * and the main html file.
 *
 * The main entry point for the application is src/index.jsx
 */

var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    main: './index.js',
    vendor: ['react', 'react-dom', 'd3', 'lodash']
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'keyword_in_context.js',
    libraryTarget: 'umd'
  },
  // externals: {
  //   'react': 'react',
  //   'react-dom': 'react-dom',
  //   'd3': 'd3',
  //   'lodash': 'lodash'
  // },
  debug: false,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'keyword_in_context.deps.js')
  ]
};
