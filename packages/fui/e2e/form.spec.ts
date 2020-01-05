const form = require("../../../samples/form");

describe("form", () => {
  test("ensure rendered HTML is correct", () => {
    expect(form().isEqualNode(stringToDOM(`
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
    `))).toBeTruthy();
  });

  function stringToDOM(str: string): ChildNode | null {
    return (new DOMParser()).parseFromString(str.replace(/\s{2,}/g, ""), "text/html").body.firstChild;
  }
});
