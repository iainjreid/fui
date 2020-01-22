import { div } from "../main/fui-html";

describe("fui-html", () => {
  test("ensure nodes are correct (1)", () => {
    expect(div().isEqualNode(stringToDOM("<div></div>"))).toBeTruthy();
  });

  test("ensure nodes are correct (2)", () => {
    expect(div.attr("class", "foo")().isEqualNode(stringToDOM("<div class=\"foo\"></div>"))).toBeTruthy();
  });

  test("ensure nodes are correct (3)", () => {
    expect(div.text("foo")().isEqualNode(stringToDOM("<div>foo</div>"))).toBeTruthy();
  });

  test("ensure nodes are correct (4)", () => {
    expect(div.lift<string>(str => div.text(str))("foo").isEqualNode(stringToDOM("<div><div>foo</div></div>"))).toBeTruthy();
  });
});

function stringToDOM(str: string): ChildNode | null {
  return (new DOMParser()).parseFromString(str.replace(/\s{2,}/g, ""), "text/html").body.firstChild;
}
