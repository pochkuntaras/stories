require('@babel/register');

var fse = require('fs-extra');
var webpack = require('webpack');
var config = require('./production.js');

webpack(config, function(error, stats) {
  if (error) {
    console.log('Error: ', error);
  }

  var manifest = stats.toJson().assetsByChunkName;

  fse.writeFile('webpack-manifest.json', JSON.stringify(manifest));
});
