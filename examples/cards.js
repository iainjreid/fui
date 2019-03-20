"use strict";

const card = (title, text) =>
  div.attr("class", "col-sm-6").add(
    div.attr("class", "card").add(
      div.attr("class", "card-body")
        .add(h5.attr("class", "card-title").of(title))
        .add(p.attr("class", "card-text").of(text))
        .add(a.attr("class", "btn btn-primary").attr("href", "#"))
    )
  )

module.exports =
  div.attr("class", "row")
    .add(card("Title 1", "Text 1"))
    .add(card("Title 2", "Text 2"))
