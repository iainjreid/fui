# Fui

## What’s this all about?

Fui is a fresh take on the traditional frontend framework, it’s simple to use, has a tiny footprint, and is blazingly fast!

Under the hood, Fui is built using functional concepts, elements you build are referentially transparent, so wherever or however you create them they'll always be the same.

### Features

At its center, Fui is a templating engine; a respectably lightweight one, written in highly compressible and optimised code, weighing in at just 329 bytes.

Elements are composed using simple JavaScript functions, so there's no need for JSX, or even HTML for that matter. It's simple a case of importing an element, and then invoking it.

```javascript
import { div } from "@chaff/fui-core"

// A possible wrapper element
export const myDiv = div.attr("class", "wrapper")
```
