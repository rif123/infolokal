const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    welcome: path.join(__dirname, '/public/src/welcome/index.jsx'),
    vendor: ['react', 'react-dom'],
  },
  output: {
    // Make sure to use [name] or [id] in output.filename
    //  when using multiple entry points
    path: path.join(__dirname, '/public/module'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: Infinity,
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 }),
  ],
};
