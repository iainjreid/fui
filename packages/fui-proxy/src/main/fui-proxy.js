"use strict";

module.exports = (target, methods) => {
  const _methods = methods(target);

  return new Proxy(target, {
    get(obj, prop) {
      if (prop in _methods) {
        return (...args) => proxy(_methods[prop](...args), methods);
      } else {
        return obj[prop];
      }
    }
  });
}
