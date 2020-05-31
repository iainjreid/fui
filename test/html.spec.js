import html from "../lib/shared/html.js";

describe("Fui HTML", () => {
  it("should return the expected node tree (1)", () => {
    html.div().isEqualNode(stringToDOM("<div></div>")).should.be.true();
  });

  it("should return the expected node tree (2)", () => {
    html.div.attr("class", "foo")().isEqualNode(stringToDOM("<div class=\"foo\"></div>")).should.be.true();
  });

  it("should return the expected node tree (3)", () => {
    html.div.text("foo")().isEqualNode(stringToDOM("<div>foo</div>")).should.be.true();
  });

  it("should return the expected node tree (4)", () => {
    html.div.lift(str => html.div.text(str))("foo").isEqualNode(stringToDOM("<div><div>foo</div></div>")).should.be.true();
  });
});

function stringToDOM(str) {
  return (new DOMParser()).parseFromString(str.replace(/\s{2,}/g, ""), "text/html").body.firstChild;
}
