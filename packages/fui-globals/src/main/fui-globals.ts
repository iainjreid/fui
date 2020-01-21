import * as _html from "@emphori/fui-html";
import * as _svg from "@emphori/fui-svg";

export const htmlElementNames: (keyof HTMLElementTagNameMap)[] = [
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

export const svgElementNames: (keyof SVGElementTagNameMap)[] = [
  "a", "circle", "clipPath", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer",
  "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA",
  "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset",
  "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g",
  "image", "line", "linearGradient", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline",
  "radialGradient", "rect", "script", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tspan",
  "use", "view"
];

export function html(target: any = window) {
  for (const htmlElementName of htmlElementNames) {
    target[htmlElementName] = _html[htmlElementName];
  }
}

export function svg(target: any = window) {
  for (const svgElementName of svgElementNames) {
    target[svgElementName] = _svg[svgElementName];
  }
}
