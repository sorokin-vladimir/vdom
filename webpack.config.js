const path = require('path');

module.exports = {
  //*
  mode: 'development',
  /*/
  mode: 'production',
  //*/
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js",
    chunkFilename: '[name].chunk.js',
    publicPath: '/assets/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    host: '0.0.0.0',
    port: 8080,
  }
};
