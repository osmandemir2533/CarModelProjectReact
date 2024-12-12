const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://carjsondata.onrender.com',
      changeOrigin: true,
    })
  );
};
