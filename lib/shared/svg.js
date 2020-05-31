// @ts-check

'use strict';

import fui from "../fui.js";

export default fui({
  build(prop) {
    return document.createElementNS('http://www.w3.org/2000/svg', prop);
  },

  append(a, b) {
    a.appendChild(b);
  },
}, (tap) => ({
  attr: (k, v) => tap((_, fx) => fx.setAttribute(k, v)),
  prop: (k, v) => tap((_, fx) => fx[k] = v),
}));
