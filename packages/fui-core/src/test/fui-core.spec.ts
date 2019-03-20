import * as core from "../main/fui-core";

describe("fui-core", () => {
  test("ensure elements are valid (1)", () => {
    expect(core.div().isEqualNode(document.createElement("div"))).toBeTruthy();
  });
});
