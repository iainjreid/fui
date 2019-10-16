import { table, tbody, td, th, thead, tr } from "@emphori/fui-html";

const tableHead =
  thead.add(tr
    .add(th.attr("scope", "col").text("#"))
    .add(th.attr("scope", "col").text("First"))
    .add(th.attr("scope", "col").text("Last"))
    .add(th.attr("scope", "col").text("Handle"))
  );

const tableRow = (index: number, first: string, last: string, handle: string) =>
  tr
    .add(th.attr("scope", "row").text(index.toString()))
    .add(td.text(first))
    .add(td.text(last))
    .add(td.text(handle));

const tableBody =
  tbody
    .add(tableRow(1, "Mark", "Otto", "@mdo"))
    .add(tableRow(2, "Jacob", "Thornton", "@fat"))
    .add(tableRow(3, "Larry", "the Bird", "@twitter"));

export =
  table.attr("class", "table")
    .add(tableHead)
    .add(tableBody);
