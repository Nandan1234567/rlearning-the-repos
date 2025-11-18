import React from "react";
import ProductCard from "./ProductCard";

const ProductsListing = (props) => {
  let { products } = props;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          All Products
        </h2>
        <div className="mt-6 flex flex-row flex-wrap justify-around items-center">
          {products.map((product, index) => {
            return <ProductCard {...product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;
