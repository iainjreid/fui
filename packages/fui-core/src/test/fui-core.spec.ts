import { core } from "@chaff/fui-globals";

core();

const cards = require("../../../../examples/cards");

describe("fui-core", () => {
  test("ensure rendered HTML is correct (1)", () => {
    expect(cards().isEqualNode(stringToDOM(`
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
    `))).toBeTruthy();
  });
});

function stringToDOM(str: string): ChildNode | null {
  return (new DOMParser()).parseFromString(str.replace(/\s{2,}/g, ""), "text/html").body.firstChild;
}
