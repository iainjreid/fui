declare const Fui: Record<keyof HTMLElementTagNameMap, Fui.FuiElement>;

declare namespace Fui {
  interface FuiElement {
    attr: (key: string, value: string) => FuiElement;
    prop: (key: string, value: string) => FuiElement;

    add: (element: FuiElement) => FuiElement;

    lift: <T>(fn: (scope: T) => FuiElement) => FuiElement;

    scope: <T>(fn: (scope: any) => T) => FuiElement;
  }
}

export = Fui;
