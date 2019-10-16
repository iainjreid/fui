import * as html from "@emphori/fui-html";
import * as globals from "../main/fui-globals";

const elements: (keyof HTMLElementTagNameMap)[] = [
  "a", "button", "div", "footer", "form", "h1", "h2", "h3", "header", "input", "li", "nav", "p", "table", "ul"
];

describe("fui-globals", () => {
  describe("core", () => {
    const target = {};

    beforeAll(() => {
      globals.html();
      globals.html(target);
    });

    test.each(elements)("ensure window object contains \"%s\"", (element) => {
      expect((window as any)[element].toString()).toBe(html[element].toString());
    });

    test.each(elements)("ensure target object contains \"%s\"", (element) => {
      expect((target as any)[element].toString()).toBe(html[element].toString());
    });
  });
});
