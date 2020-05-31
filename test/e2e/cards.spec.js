import cards from "../../docs/samples/cards.js";

describe("cards", () => {
  it("should render the correct HTML", () => {
    cards().isEqualNode(stringToDOM(`
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Title 1</h5>
              <p class="card-text">Text 1</p>
              <a class="btn btn-primary" href="#"></a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Title 2</h5>
              <p class="card-text">Text 2</p>
              <a class="btn btn-primary" href="#"></a>
            </div>
          </div>
        </div>
      </div>
    `)).should.be.true();
  });

  function stringToDOM(str) {
    return (new DOMParser()).parseFromString(str.replace(/\s{2,}/g, ""), "text/html").body.firstChild;
  }
});
