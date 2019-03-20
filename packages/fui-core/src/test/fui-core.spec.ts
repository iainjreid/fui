import * as core from "../main/fui-core";

describe("fui-core", () => {
  test("ensure nodes are correct (1)", () => {
    expect(core.div().isEqualNode(stringToDOM("<div></div>"))).toBeTruthy();
  });

  test("ensure nodes are correct (2)", () => {
    expect(core.div.attr("class", "foo")().isEqualNode(stringToDOM("<div class=\"foo\"></div>"))).toBeTruthy();
  });

  test("ensure nodes are correct (3)", () => {
    expect(core.div.of("foo")().isEqualNode(stringToDOM("<div>foo</div>"))).toBeTruthy();
  });

  test("ensure nodes are correct (4)", () => {
    expect(core.div.lift<string>(str => core.div.of(str))("foo").isEqualNode(stringToDOM("<div><div>foo</div></div>"))).toBeTruthy();
  });
});

function stringToDOM(str: string): ChildNode | null {
  return (new DOMParser()).parseFromString(str.replace(/\s{2,}/g, ""), "text/html").body.firstChild;
}
