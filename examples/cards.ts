import { a, div, h5, p } from "@chaff/fui/html";

const card = (title: string, text: string) =>
  div.attr("class", "col-sm-6").add(
    div.attr("class", "card").add(
      div.attr("class", "card-body")
        .add(h5.attr("class", "card-title").text(title))
        .add(p.attr("class", "card-text").text(text))
        .add(a.attr("class", "btn btn-primary").attr("href", "#"))
    )
  );

export =
  div.attr("class", "row")
    .add(card("Title 1", "Text 1"))
    .add(card("Title 2", "Text 2"));
