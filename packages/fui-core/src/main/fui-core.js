"use strict";

module.exports = new Proxy(() => undefined, {
  get(obj, prop) {
    return element(prop, {});
  }
});

function element(tag, attrs) {
  return Object.assign((content) => `<${tag}${attrs.length ? " " : ""}${Object.entries(attrs).map(([name, value]) => `${name}='${value}'`).join(" ")}>${content || ""}</${tag}>`, {
    attrs(attrs) {
      return element(tag, attrs);
    },

    promote(fn) {
      return (scope) => fn(scope);
    }
  });
};
