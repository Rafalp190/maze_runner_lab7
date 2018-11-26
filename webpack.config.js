const config = {
  mode: 'development',
  output: {
    publicPath: '/dist',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      use: ['url-loader'],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
}
module.exports = config
