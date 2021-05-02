import { Component } from "react";
import "./global.scss";
import MenuContainer from "./components/MenuContainer";
import SearchProduct from "./components/SearchProduct";
import ShoppingCart from "./components/ShoppingCart";

class App extends Component {
  state = {
    products: [
      { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99, img:"https://i.ibb.co/cwhRprH/burguer.png" },
      { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99, img: "https://i.ibb.co/xXR5wH2/xburguer.png" },
      { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99, img: "https://i.ibb.co/jhV2SBJ/xsalada.png" },
      { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99, img: "https://i.ibb.co/0hvHGpL/bigkenzie.png" },
      { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99, img: "https://i.ibb.co/TLyVrhy/guarana.png" },
      { id: 6, name: "Coca-Cola", category: "Bebidas", price: 4.99, img: "https://i.ibb.co/6N4NCy6/coca.png" },
      { id: 7, name: "Fanta", category: "Bebidas", price: 4.99, img: "https://i.ibb.co/bvVk7MD/fanta.png" },
    ],
    filteredProducts: [],
    currentSale: { total: 0, saleDetails: [] },
    filterProductBy: "",
    valueInputFilter: "",
  };

  showProducts = (e) => {
    e.preventDefault();

    const { filterProductBy, products } = this.state;

    if (filterProductBy === "") {
      this.setState({ filteredProducts: [] });
      return;
    }

    const arrFiltered = products.filter((product) => {
      const name = product.name.toLowerCase();

      return (name.includes(filterProductBy.toLowerCase())) && product
    });

    this.setState({
      filteredProducts: arrFiltered,
      valueInputFilter: "",
    });
  };

  handleFilters = (searchProduct) => {
    this.setState({
      filterProductBy: searchProduct,
      valueInputFilter: searchProduct,
    });
  };

  handleClick = (productId) => {
    const { products, currentSale } = this.state;

    const productInShopCart = currentSale.saleDetails.find(
      (product) => product.id === productId
    );

    if (productInShopCart) {
      return;
    } else {
      const product = products.find((product) => product.id === productId);
      const arrProducts = [...currentSale.saleDetails, product]
      const total = this.totalSale(arrProducts)

       this.setState({
        currentSale: {
          total: total,
          saleDetails: arrProducts
        },
      });
    }
  };

  removeProductCart = (productId) => {
    const { currentSale } = this.state;

    const productInShopCart = currentSale.saleDetails.find(
      (product) => product.id === productId
    );

    if (productInShopCart) {
      const productsInShopCartFiltered = currentSale.saleDetails.filter(
        (product) => {
          return product.id !== productId;
        }
      );
      const total = this.totalSale(productsInShopCartFiltered)
      

      this.setState({
        currentSale: {
          total: total,
          saleDetails: [...productsInShopCartFiltered],
        },
      });

    }
  };

  totalSale = (products) => {
    if(products.length === 0) {
      return 0
    }

    const total = products
      .map((product) => product.price)
      .reduce((acc, currentValue) => {
        return acc + currentValue;
      });

      return total
  };

  render() {
    const {
      products,
      filteredProducts,
      currentSale,
      filterProductBy,
      valueInputFilter,
    } = this.state;

    return (
      <main className="App">
        <SearchProduct
          valueInputFilter={valueInputFilter}
          funcHandleFilters={this.handleFilters}
          funcShowProducts={this.showProducts}
        />
        
        <MenuContainer
          products={products}
          filteredProducts={filteredProducts}
          filterProductBy={filterProductBy}
          funcHandleFilters={this.handleFilters}
          funcShowProducts={this.showProducts}
          funcHandleClick={this.handleClick}
        />
        <ShoppingCart
          currentSale={currentSale}
          funcRemoveProductCart={this.removeProductCart}
        />
      </main>
    );
  }
}

export default App;
