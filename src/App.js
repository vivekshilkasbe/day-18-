export default function App() {
  let list = [1, 1, 1, 1, 1];

  return (
    <div className="container-fluid">
      <Header />

      <div className="row">
        {list.map(() => (
          <div className="col-sm-12 col-md-4 mb-2">
            <Mycard />
          </div>
        ))}
      </div>
    </div>
  );
}
function Header() {
  return (
    <div className="row bg-dark text-light p-3 ">
      <div className="col h3">Sound Of Soul</div>
    </div>
  );
}
function Mycard() {
  let cardTitle = "card Title";
  return (
    <div className="card p-2">
      <div className="card-header">{cardTitle}</div>
      <div classname="card-body">
        {/* <img src="https://picsum.photos/450/300"></img> */}
        <div>
          NPM is short for node package manager, an online directory that
          contains the various already registered open-source packages. NPM
          modules consume the various functions as a third-party package when
          installed into an app using the NPM command npm install .
        </div>

        <div>
          <input
            className="btn btn-sm btn-outline-primary w-50 mt-2"
            type="button"
            value="Buy Now"
          />
          <input
            className="btn btn-sm btn-outline-primary w-50 mt-2"
            type="button"
            value="Add To Cart"
          />
        </div>
      </div>
    </div>
  );
}
