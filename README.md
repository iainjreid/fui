<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/emphori/.github@master/assets/fui-logo.png" width="460px" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@emphori/fui">
    <img src="https://img.shields.io/npm/v/@emphori/fui.svg?style=flat-square" />
  </a>
  <a href="https://travis-ci.org/Emphori/fui">
    <img src="https://img.shields.io/travis/Emphori/fui/master.svg?style=flat-square" />
  </a>
  <a href="https://codecov.io/gh/Emphori/fui">
    <img src="https://img.shields.io/codecov/c/github/Emphori/fui.svg?style=flat-square" />
  </a>
  <a href="https://lgtm.com/projects/g/Emphori/fui">
    <img src="https://img.shields.io/lgtm/grade/javascript/github/Emphori/fui.svg?style=flat-square">
  </a>

  <img src="https://img.shields.io/depfu/Emphori/fui.svg?style=flat-square" />
</p>

## What’s this all about?

Fui is a fresh take on the traditional frontend framework, it’s simple to use, has a tiny footprint, and is blazingly fast!

Under the hood, Fui is built using functional concepts, elements you build are referentially transparent, so wherever or however you create them they'll always be the same.

Checkout [this repository](https://git.io/fjvBY) for a demo!

### Features

At its center, Fui plays host to a simple AST engine; a respectably lightweight one, written in highly compressible and optimised code, weighing in at just 257 bytes.

Elements are composed using simple JavaScript functions, so there's no need for JSX, or even HTML for that matter. It's simple a case of importing an element, and then invoking it.

```javascript
import { div } from "@emphori/fui/html";

// A possible wrapper element
export const myDiv = div.attr("class", "wrapper");
```

## License

This project is released under the [MIT License](./LICENSE). Enjoy responsibly ✌️
