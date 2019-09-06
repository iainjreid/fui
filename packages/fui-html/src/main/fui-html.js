'use strict';

const core = require('@chaff/fui-core');

module.exports = core({
  build(prop) {
    return document.createElement(prop)
  },

  append(a, b) {
    a.appendChild(b)
  },

}, (tap) => ({
  text: (x) => tap((_, fx) => fx.innerHTML = x),
  attr: (k, v) => tap((_, fx) => fx.setAttribute(k, v)),
  prop: (k, v) => tap((_, fx) => fx[k] = v),
}));
