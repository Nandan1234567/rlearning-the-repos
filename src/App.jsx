import DetailedProduct from "./assets/components/DetailedProduct";
import Navbar from "./assets/components/Navbar";
import ProductsListing from "./assets/components/ProductsListing";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { useState } from "react";
import Cart from "./assets/components/Cart";
import NotFound from "./assets/components/NotFound";
import CartContext from "./assets/context/CartContext";

const App = () => {
  const [cartData, updateCartData] = useState([]);

  const addCartItems = (data) => {
    updateCartData((prev) => [...prev, data]);
  };

  const removeCartItems = (id) => {
    updateCartData((prev) => {
      const updatedCart = prev.filter((item) => item.id != id);
      return updatedCart;
    });
  };

  return (
    <Router>
      <CartContext.Provider
        value={{
          cartData: cartData,
          addCartItems: addCartItems,
          removeCartItems: removeCartItems,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" Component={ProductsListing} />
          <Route path="/product/:id" Component={DetailedProduct} />
          <Route path="/cart" Component={Cart} />
          <Route path="/not-found" Component={NotFound} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </CartContext.Provider>
    </Router>
  );
};

export default App;
