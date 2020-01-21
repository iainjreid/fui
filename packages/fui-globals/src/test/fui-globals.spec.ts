import * as html from "@emphori/fui-html";
import * as svg from "@emphori/fui-svg";
import * as globals from "../..";

describe("fui-globals", () => {
  describe("html", () => {
    const target = {};

    beforeAll(() => {
      globals.html();
      globals.html(target);
    });

    test.each(globals.htmlElementNames)("ensure window object contains \"%s\"", (element) => {
      expect((window as any)[element].toString()).toBe(html[element].toString());
    });

    test.each(globals.htmlElementNames)("ensure target object contains \"%s\"", (element) => {
      expect((target as any)[element].toString()).toBe(html[element].toString());
    });
  });

  describe("svg", () => {
    const target = {};

    beforeAll(() => {
      globals.svg();
      globals.svg(target);
    });

    test.each(globals.svgElementNames)("ensure window object contains \"%s\"", (element) => {
      expect((window as any)[element].toString()).toBe(svg[element].toString());
    });

    test.each(globals.svgElementNames)("ensure target object contains \"%s\"", (element) => {
      expect((target as any)[element].toString()).toBe(svg[element].toString());
    });
  });
});
