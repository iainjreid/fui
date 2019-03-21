"use strict";

const { table, tbody, td, th, thead, tr } = require("@chaff/fui-core")

const tableHead =
  thead.add(tr
    .add(th.attr("scope", "col").of("#"))
    .add(th.attr("scope", "col").of("First"))
    .add(th.attr("scope", "col").of("Last"))
    .add(th.attr("scope", "col").of("Handle"))
  )

const tableRow = (index, first, last, handle) =>
  tr
    .add(th.attr("scope", "row").of(index))
    .add(td.of(first))
    .add(td.of(last))
    .add(td.of(handle))

const tableBody =
  tbody
    .add(tableRow(1, "Mark", "Otto", "@mdo"))
    .add(tableRow(2, "Jacob", "Thornton", "@fat"))
    .add(tableRow(3, "Larry", "the Bird", "@twitter"))

module.exports =
  table.attr("class", "table")
    .add(tableHead)
    .add(tableBody)
