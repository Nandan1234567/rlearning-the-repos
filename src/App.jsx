import "./App.css";

import ProductsListing from "./assets/components/ProductsListing";
import products from "./assets/data/productsData";
import Navbar from "./assets/components/Navbar";
import DetailedProduct from "./assets/components/DetailedProduct";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Cart from "./assets/components/Cart";
import NotFound from "./assets/components/NotFound";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={ProductsListing} />
          <Route path="/product/:id" Component={DetailedProduct} />
          <Route path="/cart" Component={Cart} />
          <Route path="/not-found" Component={NotFound} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
