import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/productsData";

const DetailedProduct = () => {
  const idNo = 3;

  const item = products[idNo];
  const similarProducts = products
    .filter(
      (product) =>
        (product.category === item.category) & (product.id !== item.id)
    )
    .slice(0, 3);

  return (
    <div className="bg-white w-screen min-h-screen flex flex-col items-center  p-5 mt-5">
      <div className="flex  justify-around items-center  flex-wrap shadow-lg max-w-5xl w-5/6">
        <div className="  flex justify-center w-90">
          <img src={item.image} alt="image" className="h-80 w-90" />
        </div>
        <div className="   flex flex-col justify-around p-5 w-90">
          <h1 className="text-2xl text-black font-bold">{item.title}</h1>

          <p>{item.description}</p>
          <div className="flex justify-between items-center w-full  mt-5">
            <div className="flex flex-col mr-5">
              <span className="text-base font-semibold">Price</span>
              <span className="text-lg font-bold mt-2">$ {item.price}</span>
            </div>
            <div className="flex flex-col ">
              <span className="text-base font-semibold">Overal Rating</span>
              <div className="mt-2">
                <span className="text-lg font-bold  text-white bg-green-700 p-1 w-9 text-center  mr-2">
                  {item.rating.rate}
                </span>
                <span className="text-xs font-normal ">
                  Based on {item.rating.count} reviews
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full  mt-5">
            <div className="flex  flex-col justify-center items-start">
              <span className="text-base font-semibold text-left mb-2">
                Quantity
              </span>
              <div>
                <button className=" mr-2 bg-gray-200 text-black w-9 rounded-full font-bold hover:cursor-pointer">
                  +
                </button>
                <span>0</span>
                <button className=" ml-2 bg-gray-200 text-black w-9 rounded-full font-bold hover:cursor-pointer">
                  -
                </button>
              </div>
            </div>
            <button className=" p-3 rounded-lg  font-bold bg-cyan-500 hover:bg-cyan-500/90 hover:cursor-pointer text-white">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-5/6 mt-5">
        <h1 className="text-2xl text-black font-bold">Similar Products</h1>
        <div className="flex justify-center items-center flex-wrap">
          {similarProducts.map((product) => {
            return <ProductCard {...product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
