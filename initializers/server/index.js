const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('../../webpack.config.js');
const host = 'localhost';
const port = 3005;

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(port, host, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Listening at host: ${host}, port: ${port}`);
  }
});
