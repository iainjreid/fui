import { FuiEngine, FuiMethods } from "@chaff/fui-core";

declare interface FuiHTMLMethods {
  text(str: string): this
  attr(key: string, val: string): this
  prop(key: string, val: string): this
}

declare const FuiHTMLEngine: FuiEngine<HTMLElement, keyof HTMLElementTagNameMap, FuiHTMLMethods>;

export = FuiHTMLEngine;
