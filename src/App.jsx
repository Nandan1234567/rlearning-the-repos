import "./App.css";

import ProductsListing from "./assets/components/ProductsListing";
import products from "./assets/data/productsData";
import Navbar from "./assets/components/Navbar";
import DetailedProduct from "./assets/components/DetailedProduct";

function App() {
  return (
    <>
      <Navbar />
      <ProductsListing />
      {/* <DetailedProduct /> */}
    </>
  );
}

export default App;
