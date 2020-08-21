import webpackAsset from './webpackAsset';

export default (request, response) => {
  response.status(200),
  response.render('index', { webpackAsset })
};
