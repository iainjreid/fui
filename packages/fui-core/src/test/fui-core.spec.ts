import { a, p, div, span, FuiElement } from "../main/fui-core";

const gridWrapper = div.attrs({ class: "grid-wrapper" });
const gridSection = div.attrs({ class: "grid-section" });

const defaultDivBlock = div(gridWrapper(gridSection("Static text")))

const promotedDivBlock = div.promote((text: string) =>
  gridWrapper(gridSection(text))
)

const basicUsage: Array<[string, string]>  = [
  [defaultDivBlock, "<div><divclass='grid-wrapper'><divclass='grid-section'>Static text</div></div></div>"],
  [promotedDivBlock("Dynamic text"), "<divclass='grid-wrapper'><divclass='grid-section'>Dynamic text</div></div>"]
]

describe("Basic usage", () => {
  test.each(basicUsage)("ensure rendered HTML is correct (%#)", (block, html) => {
    expect(block).toBe(html);
  })
});
