'use strict';
var unary = require('fn-unary')
exports = module.exports = function use(server, middlewares) {
  if ('string' === typeof middlewares) {
    try {
      use(server, require(middlewares));
    } catch (e) {
      console.error(e.stack);
    }
  } else if (Array.isArray(middlewares)) {
    middlewares.forEach(unary(use.bind(null, server)));
  } else {
    try {
      server.use(middlewares);
    } catch (e) {
      console.error(e.stack)
    }
  }
}
