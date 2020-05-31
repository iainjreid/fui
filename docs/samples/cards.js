// @ts-check

import html from "../../lib/shared/html.js";

const { a, div, h5, p } = html

const card = (title, text) =>
  div.attr("class", "col-sm-6").add(
    div.attr("class", "card").add(
      div.attr("class", "card-body")
        .add(h5.attr("class", "card-title").text(title))
        .add(p.attr("class", "card-text").text(text))
        .add(a.attr("class", "btn btn-primary").attr("href", "#"))
    )
  );

export default
  div.attr("class", "row")
    .add(card("Title 1", "Text 1"))
    .add(card("Title 2", "Text 2"));
