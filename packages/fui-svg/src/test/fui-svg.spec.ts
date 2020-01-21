import { svg } from "../..";

describe("fui-svg", () => {
  test("ensure nodes are correct (1)", () => {
    expect(svg().isEqualNode(stringToDOM("<svg></svg>"))).toBeTruthy();
  });
});

function stringToDOM(str: string): ChildNode | null {
  return (new DOMParser()).parseFromString(str.replace(/\s{2,}/g, ""), "text/html").body.firstChild;
}
