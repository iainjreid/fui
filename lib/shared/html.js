// @ts-check

'use strict';

import fui from '../fui.js';

/**
 * @name a
 * @memberof fui/html
 *
 * @type {import ('../fui').FuiElement<HTMLAnchorElement>}
 */

/**
 * The HTML Fui engine.
 *
 * @module fui/html
 *
 * @type {import ('../fui').FuiEngine<keyof HTMLElementTagNameMap, HTMLElement>}
 */
export default fui({
  build(prop) {
    return document.createElement(prop);
  },

  append(a, b) {
    a.appendChild(b);
  },
}, (tap) => ({
  /**
   * Write a string to the current `HTMLElement`.
   *
   * @type {import ('../fui').FuiMethod<HTMLElement>}
   *
   * @param {string} x The text to assign to the `innerHTML`
   */
  text: (x) => tap((_, fx) => fx.innerHTML = x),

  /**
   *
   * @type {import ('../fui').FuiMethod<HTMLElement>}
   *
   * @param {string} k
   * @param {any} v
   */
  attr: (k, v) => tap((_, fx) => fx.setAttribute(k, v)),

  /**
   *
   * @type {import ('../fui').FuiMethod<HTMLElement>}
   *
   * @param {string} k
   * @param {any} v
   */
  prop: (k, v) => tap((_, fx) => fx[k] = v),
}));
