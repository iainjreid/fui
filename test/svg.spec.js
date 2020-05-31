import svg from "../lib/shared/svg.js";

describe("Fui SVG", () => {
  it("should return the expected node tree (1)", () => {
    svg.svg().isEqualNode(stringToDOM("<svg></svg>")).should.be.true();
  });
});

function stringToDOM(str) {
  return (new DOMParser()).parseFromString(str.replace(/\s{2,}/g, ""), "text/html").body.firstChild;
}
