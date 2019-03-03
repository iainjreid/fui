declare const Fui: Record<keyof HTMLElementTagNameMap, Fui.FuiElement>;

declare namespace Fui {
  interface FuiElement {
    (innerHtml?: string): string;

    promote<T>(fn: (scope: T) => string): (scope: T) => string;

    attrs: any;
    props: any;
  }
}

export = Fui;
