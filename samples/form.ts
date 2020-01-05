import { button, div, form, input, label, small } from "@emphori/fui-html";

const formEmail =
  div.attr("class", "form-group")
    .add(label.attr("for", "email").text("Email address"))
    .add(input.attr("class", "form-control").attr("id", "email").attr("type", "email").attr("placeholder", "Email"))
    .add(small.attr("class", "form-text text-muted").text("We'll never share your email with anyone else."));

const formPassword =
  div.attr("class", "form-group")
    .add(label.attr("for", "password").text("Password"))
    .add(input.attr("class", "form-control").attr("id", "password").attr("type", "password").attr("placeholder", "Password"));

const formButton =
  button.attr("class", "btn btn-primary").attr("type", "submit").text("Submit");

export =
  form
    .add(formEmail)
    .add(formPassword)
    .add(formButton);
