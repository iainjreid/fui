const { div, section } = require("../main/fui-core");

const block =
	section.lift((config) => div.attr("class", config.name))

const basicUsage = [
  [block({ name: "foo" }), ((section) => (
		section.appendChild(((div) => (
			div.setAttribute("class", "foo"), div
		))(document.createElement("div"))), section
	))(document.createElement("section"))],
]

describe("Basic usage", () => {
  test.each(basicUsage)("ensure rendered HTML is correct (%#)", (block, html) => {
    expect(block).toEqual(html);
  })
});
