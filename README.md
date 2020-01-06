<p align="center">
  <a href="#">
    <img src="https://cdn.jsdelivr.net/gh/emphori/fui@master/.github/logo-67x122@2x.png" width="67px" />
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@emphori/fui">
    <img src="https://img.shields.io/npm/v/@emphori/fui.svg?style=flat-square" />
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/workflow/status/Emphori/fui/Build.svg?style=flat-square" />
  </a>
  <a href="https://coveralls.io/github/Emphori/fui">
    <img src="https://img.shields.io/coveralls/github/Emphori/fui.svg?style=flat-square" />
  </a>
  <a href="https://lgtm.com/projects/g/Emphori/fui">
    <img src="https://img.shields.io/lgtm/grade/javascript/github/Emphori/fui.svg?style=flat-square">
  </a>
</p>

## What’s this all about?

Fui is a fresh take on the traditional frontend framework, it’s simple to use,
has a tiny footprint, and is blazingly fast!

Under the hood, Fui is built using functional concepts, elements you build are
referentially transparent, so wherever or however you create them they'll always
be the same.

Checkout [this repository](https://git.io/fjvBY) for a demo!

### Features

At its center, Fui plays host to a simple AST engine; a respectably lightweight
one, written in highly compressible and optimised code, weighing in at just 396
bytes.

Elements are composed using simple JavaScript functions, so there's no need for
JSX, or even HTML for that matter. Using elements is simply a case of importing
the composition, and then invoking it.

```javascript
const { div } = require("@emphori/fui/html");

// A possible component
const myWrapper = div.attr("class", "wrapper");

// Generate the DOM element
const elem = myWrapper();

// Append the element
document.body.appendChild(elem);
```

## License

This project is released under the [MIT License](./LICENSE). Enjoy responsibly
✌️
