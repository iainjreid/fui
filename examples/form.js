"use strict";

const { button, div, form, input, label, small } = require("@chaff/fui-core")

const formEmail =
  div.attr("class", "form-group")
    .add(label.attr("for", "email").of("Email address"))
    .add(input.attr("class", "form-control").attr("id", "email").attr("type", "email").attr("placeholder", "Email"))
    .add(small.attr("class", "form-text text-muted").of("We'll never share your email with anyone else."))

const formPassword =
  div.attr("class", "form-group")
    .add(label.attr("for", "password").of("Password"))
    .add(input.attr("class", "form-control").attr("id", "password").attr("type", "password").attr("placeholder", "Password"))

const formButton =
  button.attr("class", "btn btn-primary").attr("type", "submit").of("Submit")

module.exports =
  form
    .add(formEmail)
    .add(formPassword)
    .add(formButton)
