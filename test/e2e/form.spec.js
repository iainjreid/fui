import form from "../../docs/samples/form.js";

describe("form", () => {
  it("should render the correct HTML", () => {
    form().isEqualNode(stringToDOM(`
      <form>
        <div class="form-group">
          <label for="email">Email address</label>
          <input class="form-control" id="email" type="email" placeholder="Email">
          <small class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input class="form-control" id="password" type="password" placeholder="Password">
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    `)).should.be.true();
  });

  function stringToDOM(str) {
    return (new DOMParser()).parseFromString(str.replace(/\s{2,}/g, ""), "text/html").body.firstChild;
  }
});
