import { Component } from "react";
import {BiX} from 'react-icons/bi'

import "./index.scss"

class Product extends Component {
  render() {
    const {
      id,
      name,
      category,
      price,
      img,
      funcHandleClick,
      shoppingCart,
      funcRemoveProductCart
    } = this.props;

    return (
      <div className="product">
        <img src={img} alt="" className={category}/>
        <h2>{name}</h2>
        <h3>{category}</h3>
        <span>R$ {price}</span>
        {shoppingCart ? (
          <button type="button" onClick={() => funcRemoveProductCart(id)}>
            <BiX/>
          </button>
        ) : (
          <button type="button" onClick={() => funcHandleClick(id)}>
            Adicionar
          </button>
        )}
      </div>
    );
  }
}

export default Product;
