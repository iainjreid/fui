import fui from "../lib/fui.js";

const { foo, bar, baz } = fui({
  build(name) {
    return { name, children: [] }
  },
  append(a, b) {
    return a.children.push(b)
  }
}, (tap) => ({
  data(val) {
    return tap((_, fx) => fx.data = val)
  }
}));

const checks = [
  [foo(), {
    name: "foo",
    children: []
  }],

  [foo.add(bar)(), {
    name: "foo",
    children: [{
      name: "bar",
      children: []
    }]
  }],

  [foo.add(bar.add(baz))(), {
    name: "foo",
    children: [{
      name: "bar",
      children: [{
        name: "baz",
        children: []
      }]
    }]
  }],

  [foo.lift((data) => bar.data(data))("data"), {
    name: "foo",
    children: [{
      name: "bar",
      data: "data",
      children: []
    }]
  }],

  [foo.lift((data) => bar.data(data).lift((data) => baz.data(data)))("data"), {
    name: "foo",
    children: [{
      name: "bar",
      data: "data",
      children: [{
        name: "baz",
        data: "data",
        children: []
      }]
    }]
  }],

  [foo.lift((data) => bar.data(data).lift((data) => baz.data(data)).scope(([scope]) => scope))(["data", "data"]), {
    name: "foo",
    children: [{
      name: "bar",
      data: [
        "data",
        "data",
      ],
      children: [{
        name: "baz",
        data: "data",
        children: []
      }]
    }]
  }],

  [foo.lift((data) => bar.data(data).lift((data) => baz.data(data)).scope((scope) => [scope, scope]))("data"), {
    name: "foo",
    children: [{
      name: "bar",
      data: "data",
      children: [{
        name: "baz",
        data: [
          "data",
          "data",
        ],
        children: []
      }]
    }]
  }]
]

describe("Fui", () => {
  checks.forEach((check, i) => {
    it(`should return the expected tree (${i})`, () => {
      return check[0].should.deepEqual(check[1])
    })
  })
});
