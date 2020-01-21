import { core, FuiElement } from '@emphori/fui-core';

interface SVGMethods {
  attr(key: string, val: string): FuiElement<SVGElement, unknown, SVGMethods>
  prop(key: string, val: string): FuiElement<SVGElement, unknown, SVGMethods>
}

export = core<SVGElement, keyof SVGElementTagNameMap, SVGMethods>({
  build(prop) {
    return document.createElementNS('http://www.w3.org/2000/svg', prop)
  },

  append(a, b) {
    a.appendChild(b)
  },
}, (tap) => ({
  attr: (k, v) => tap((_, fx) => fx.setAttribute(k, v)),
  prop: (k, v) => tap((_, fx) => (fx as any)[k] = v),
}));
