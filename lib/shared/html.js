// @ts-check

'use strict';

import fui from '../fui.js';

let uid = 10

const styleElem = document.createElement('style');

// Append <style> element to <head>
document.head.appendChild(styleElem);

// Grab style element's sheet
const styleSheet = styleElem.sheet;
const styleIndex = {};

/**
 * The HTML Fui engine.
 *
 * @template Scope
 *
 * @type {import ('../fui').FuiEngine<keyof HTMLElementTagNameMap, HTMLElement, Scope>}
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
   * @type {import ('../fui').FuiMethod<HTMLElement, Scope>}
   *
   * @param {string} x The text to assign to the `innerHTML`
   */
  text: (x) => tap((_, fx) => fx.innerHTML = x),

  /**
   *
   * @type {import ('../fui').FuiMethod<HTMLElement, Scope>}
   *
   * @param {string} k
   * @param {any} v
   */
  attr: (k, v) => tap((_, fx) => fx.setAttribute(k, v)),

  /**
   *
   * @type {import ('../fui').FuiMethod<HTMLElement, Scope>}
   *
   * @param {string} k
   * @param {any} v
   */
  prop: (k, v) => tap((_, fx) => fx[k] = v),
  /**
   *
   */
  styles: (stylesObj) => {
    let classStr = (uid++).toString(32)

    for (const [name, rule] of Object.entries(process(stylesObj, '', {}))) {
      if (rule in styleIndex) {
        styleSheet.cssRules[styleIndex[rule]].selectorText += `, .${classStr}${name}`
      } else {
        styleIndex[rule] = styleSheet.cssRules.length
        styleSheet.insertRule(`.${classStr}${name} {${rule}}`, styleSheet.cssRules.length)
      }
    }

    return tap((_, elem) => elem.classList.add(classStr))
  },
}));

/**
 *
 * @param {*} stylesObj
 * @param {*} stylesBlock
 * @param {*} stylesProcessed
 */
function process(stylesObj, stylesBlock, stylesProcessed) {
  if (!stylesProcessed[stylesBlock]) {
    stylesProcessed[stylesBlock] = ''
  }

  for (const [name, value] of Object.entries(stylesObj)) {
    if (value instanceof Object) {
      process(stylesObj[name], stylesBlock + name, stylesProcessed)
    } else {
      stylesProcessed[stylesBlock] += `${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:${value};`
    }
  }

  return stylesProcessed
}
