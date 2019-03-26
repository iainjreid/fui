import * as core from "../main/fui-core";

class TestTarget {
  constructor(public name: string, public children: TestTarget[] = []) { }
}

const target = core<TestTarget, "foo">({
  build(name: string) {
    return new TestTarget(name)
  },
  append(a: TestTarget, b: TestTarget) {
    return a.children.push(b)
  }
});

describe("fui-core", () => {
  test("ensure tree is correct (1)", () => {
    expect(target.foo()).toEqual(new TestTarget("foo"));
  });
});
