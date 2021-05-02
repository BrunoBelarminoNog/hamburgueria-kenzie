import { Component } from "react";
import Product from "../Product";

import "./style.scss";

class MenuContainer extends Component {
  render() {
    const {
      products,
      filteredProducts,
      filterProductBy,
      funcHandleFilters,
      funcShowProducts,
      funcHandleClick,
    } = this.props;

    return (
      <div id="menu-container">
        {filteredProducts.length > 0 ? (
          
          <section className="filtered-menu">
             <h3>
                Buscando produtos por <span>"{filterProductBy}"</span>
                <span
                  onClick={async (e) => {
                    await funcHandleFilters("");
                    funcShowProducts(e);
                  }}
                >
                  Voltar
                </span>
              </h3>
            <div className="container">
             
              {filteredProducts.map((product, index) => {
                return (
                  <Product
                    key={index}
                    id={product.id}
                    name={product.name}
                    category={product.category}
                    price={product.price}
                    img={product.img}
                    funcHandleClick={funcHandleClick}
                    shoppingCart={false}
                  />
                );
              })}
            </div>
          </section>
        ) : (
          <section className="all-menu">
            <div className="container">
              {products.map((product, index) => {
                return (
                  <Product
                    key={index}
                    id={product.id}
                    name={product.name}
                    category={product.category}
                    price={product.price}
                    img={product.img}
                    funcHandleClick={funcHandleClick}
                    shoppingCart={false}
                  />
                );
              })}
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default MenuContainer;
