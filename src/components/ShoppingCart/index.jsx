import { Component } from "react";
import Product from "../Product";

import "./index.scss"

class ShoppingCart extends Component {

  render() {
    const { currentSale, funcRemoveProductCart } = this.props;

    return (
      <div className="shop-cart">
        <section className="quantity-items">
          {
            currentSale.saleDetails.length === 0 ? (
              <p className="cart-empty">O carrinho está vazio!</p>
            ) : (
              <p className="cart-subtotal">Subtotal - R$ {currentSale.total}</p> 
            )

          }
        </section>
        <section id="shopping-cart">
          {currentSale.saleDetails.map((product, index) => {
            return (
              <Product
                key={index}
                id={product.id}
                name={product.name}
                img={product.img}
                category={product.category}
                price={product.price}
                funcRemoveProductCart={funcRemoveProductCart}
                shoppingCart={true}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default ShoppingCart;
