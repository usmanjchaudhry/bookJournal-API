module.exports = function (fn) {
  return function (a) {
    return fn.call(this, a);
  }
};
