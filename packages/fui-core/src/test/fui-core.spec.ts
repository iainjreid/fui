import { div, section } from "../main/fui-core";

const block = section.lift<{name: string}>((config) => div.attr("class", config.name))

const basicUsage = [
  [block({ name: "foo" }), "<section><div class=\"foo\"></div></section>"],
]

describe("Basic usage", () => {
  test.each(basicUsage)("ensure rendered HTML is correct (%#)", (block, html) => {
    expect(block.outerHTML).toBe(html);
  })
});
