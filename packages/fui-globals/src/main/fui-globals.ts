"use strict";

import * as _html from "@emphori/fui-html";

const elements: (keyof HTMLElementTagNameMap)[] = [
  "a", "abbr", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdo", "blockquote",
  "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details",
  "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer",
  "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "i", "iframe",
  "img", "input", "ins", "kbd", "label", "legend", "li", "link", "map", "mark", "marquee", "menu", "meta", "meter",
  "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q",
  "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub",
  "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u",
  "ul", "var", "video", "wbr"
];

export function html(target: any = window) {
  for (const element of elements) {
    target[element] = _html[element];
  }
}
