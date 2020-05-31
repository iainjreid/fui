import table from "../../docs/samples/table.js";

describe("table", () => {
  it("should render the correct HTML", () => {
    table().isEqualNode(stringToDOM(`
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    `)).should.be.true();
  });

  function stringToDOM(str) {
    return (new DOMParser()).parseFromString(str.replace(/\s{2,}/g, ""), "text/html").body.firstChild;
  }
});
