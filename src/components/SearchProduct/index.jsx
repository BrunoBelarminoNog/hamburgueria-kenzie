import { Component } from "react";
import { BiSearchAlt } from "react-icons/bi";

import "./index.scss";

class SearchProduct extends Component {
  render() {
    const {
      funcHandleFilters,
      funcShowProducts,
      valueInputFilter,
    } = this.props;

    return (
      <div class="search-products">
        <div>
          <input
            type="text"
            value={valueInputFilter}
            onChange={(e) => funcHandleFilters(e.target.value)}
            placeholder="Pesquisar produto"
          />
          <button type="submit" onClick={(e) => funcShowProducts(e)}>
            <BiSearchAlt />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchProduct;
