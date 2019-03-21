import * as core from "@chaff/fui-core";
import * as globals from "../main/fui-globals";

const elements = [
  "a", "button", "div", "footer", "form", "h1", "h2", "h3", "header", "input", "li", "nav", "p", "table", "ul"
];

describe("fui-globals", () => {
  describe("core", () => {
    const target = {};

    beforeAll(() => {
      globals.core();
      globals.core(target);
    });

    test.each(elements)("ensure window object contains \"%s\"", (element) => {
      expect((window as any)[element].toString()).toBe(core[element].toString());
    });

    test.each(elements)("ensure target object contains \"%s\"", (element) => {
      expect((target as any)[element].toString()).toBe(core[element].toString());
    });
  });
});
