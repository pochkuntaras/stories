import { isArray, find } from 'lodash';

let webpackAsset;

const findAssetInManifest = (manifest, asset, extension) => {
  if (isArray(manifest[asset])) {
    return find(manifest[asset], (e) => (e.endsWith(extension)))
  } else {
    return manifest[asset];
  }
}

if (__DEVELOPMENT__) {
  webpackAsset = (asset, extension) => (
    `${asset}.${extension}`
  )
} else {
  const fs = require('fs');
  const path = require('path');

  const manifestPath = path.join(process.cwd(), 'webpack-manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  webpackAsset = (asset, extension) => (
    `${findAssetInManifest(manifest, asset, extension)}`
  )
}

export default webpackAsset;
