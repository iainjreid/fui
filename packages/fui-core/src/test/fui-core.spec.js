const { div, section } = require("../main/fui-core");

const sdf = text => () => document.createTextNode(text)

const block =
	div.attr("class", "foo").wrap(div.lift(sdf))

const block2 =
	section.add(block)

// const block2 =
// 	Reader.of(document.createElement("section"))
// 		.map(add(block))

const basicUsage = [
  [block2("foo"), "<div><divclass='grid-wrapper'><divclass='grid-section'>Static text</div></div></div>"],
]

describe("Basic usage", () => {
  test.each(basicUsage)("ensure rendered HTML is correct (%#)", (block, html) => {
    expect(block).toBe(html);
  })
});

