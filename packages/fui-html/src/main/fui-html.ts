import { core, FuiElement } from '@emphori/fui-core';

interface HTMLMethods {
  text(str: string): FuiElement<HTMLElement, unknown, HTMLMethods>
  attr(key: string, val: string): FuiElement<HTMLElement, unknown, HTMLMethods>
  prop(key: string, val: string): FuiElement<HTMLElement, unknown, HTMLMethods>
}

export = core<HTMLElement, keyof HTMLElementTagNameMap, HTMLMethods>({
  build(prop) {
    return document.createElement(prop)
  },
  append(a, b) {
    a.appendChild(b)
  },
}, (tap) => ({
  text: (x) => tap((_, fx) => fx.innerHTML = x),
  attr: (k, v) => tap((_, fx) => fx.setAttribute(k, v)),
  prop: (k, v) => tap((_, fx) => (fx as any)[k] = v),
}));
