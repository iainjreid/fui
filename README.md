<h1 align="center">
  Fui
</h1>

<p align="center">
  A functional UI framework
</p>

<p align="center">
  <a href="https://npmjs.org/package/@chaff/fui">
    <img src="https://img.shields.io/npm/v/@chaff/fui.svg?style=flat-square" />
  </a>
  <a href="https://travis-ci.org/iainreid820/fui">
    <img src="https://img.shields.io/travis/iainreid820/fui/master.svg?style=flat-square" />
  </a>
  <a href="https://codecov.io/gh/iainreid820/fui">
    <img src="https://img.shields.io/codecov/c/github/iainreid820/fui/master.svg?style=flat-square" />
  </a>

  <img src="https://img.shields.io/depfu/iainreid820/fui.svg?style=flat-square" />
</p>

## What’s this all about?

Fui is a fresh take on the traditional frontend framework, it’s simple to use, has a tiny footprint, and is blazingly fast!

Under the hood, Fui is built using functional concepts, elements you build are referentially transparent, so wherever or however you create them they'll always be the same.

Checkout [this repository](https://git.io/fjvBY) for a demo!

### Features

At its center, Fui plays host to a simple AST engine; a respectably lightweight one, written in highly compressible and optimised code, weighing in at just 257 bytes.

Elements are composed using simple JavaScript functions, so there's no need for JSX, or even HTML for that matter. It's simple a case of importing an element, and then invoking it.

```javascript
import { div } from "@chaff/fui/html"

// A possible wrapper element
export const myDiv = div.attr("class", "wrapper")
```

