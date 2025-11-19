import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductsListing = (props) => {
  let { products } = props;

  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filterBy, setFilter] = useState("ALL");
  const [sortBy, setSorting] = useState("None");

  const handleSorting = (e) => {
    setSorting(e.target.value);
  };

  const handleFilter = (e) => {
    let value = e.target.value;

    let list = products;
    if (value !== "all") {
      list = products.filter((items) => {
        return items.category === value;
      });
    }

    setFilter(value);
    setFilteredProducts(list);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className=" flex justify-center items-center sm:flex-row  sm:justify-around  flex-col flex-wrap m-3">
          <div>
            <div className="w-70 mb-3">
              <label htmlFor="filterBy" className="mt-3">
                Filter By :
              </label>
              <select
                name="filter"
                id="filterBy"
                className="w-50 outline-none"
                onChange={handleFilter}
              >
                <option value="all">ALL</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="jewelery">Jewelery</option>
                <option value="electronics">Electronics</option>
                <option value="women's clothing">Women's clothing</option>
              </select>
            </div>
            <div className="w-70 mb-3">
              <label htmlFor="sortBy" className="mr-3">
                Sort By :
              </label>
              <select
                name="sort"
                id="sortBy"
                className="w-50 outline-none"
                onChange={handleSorting}
              >
                <option value="none">None</option>
                <option value="priceHL">Price High to Low</option>
                <option value="priceLH">Price Low to High</option>
                <option value="name">Name</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          <input
            type="search"
            placeholder="Search"
            className="bg-gray-200 p-3 w-70 outline-none"
            value={searchValue}
            onChange={handleSearch}
          />
          <button className="rounded-sm p-2 mt-3 sm:mt-0 hover:cursor-pointer hover:bg-sky-500/100 bg-blue-500 text-white font-medium">
            Clear Filters
          </button>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          All Products
        </h2>
        <div className="mt-6 flex flex-row flex-wrap justify-around items-center">
          {console.log(filteredProducts)}
          {filteredProducts.map((product, index) => {
            return <ProductCard {...product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;
