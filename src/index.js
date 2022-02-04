import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css"
function SearchBar(props) {
  const [searchVal, setSearchVal] = React.useState('');

  const handleInput = (e) => {
    setSearchVal(e.target.value);
  }

  const handleClearBtn = () => {
    setSearchVal('');
  }

  const filteredProducts = props.products.filter((product) => {
    return product.includes(searchVal);
  });

  return (
    <div className="container">
      <div className='input-wrap'>
        <i className="fas fa-search"></i>
        <label
          for="product-search"
          id="input-label"
        >
          Search
        </label>
        <input
          onChange={handleInput}
          value={searchVal}
          type="text"
          name="product-search"
          id="product-search"
          placeholder="Search Documents"
        />
        <i
          onClick={handleClearBtn}
          className="fas fa-times"
        ></i>
      </div>
      <div className="cat">
        <h5>Categories:</h5>
      </div>
      <div className="results-wrap">
        <ul>
          {
            filteredProducts.map(
              (product) => {
                return <li key={product} className='list-item'><a href='#'>{product}</a></li>
              }
            )
          }
        </ul>
      </div>
    </div>
  );
}

function App() {
  let products = [
    'Document Name', 'Application', 'React', 'Form 1', 'Form 2',
  ];

  return (
    <div>
      <SearchBar products={products} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));