import React from "react";

const ProductCard = (props) => {
  let { title, image, price, rating } = props;
  return (
    <div>
      <div className=" flex justify-between flex-col  shadow-lg hover:cursor-pointer p-3 rounded-md h-100 w-70 mt-5 mr-3">
        <img
          src={image}
          alt="Front of men's Basic Tee in dark gray"
          className="aspect-square w-full rounded-md "
        />
        <div className="mt-4 flex flex-col justify-between ">
          <h3 className="text-sm text-gray-800">{title}</h3>
          <div className="flex justify-between mt-2 items-center">
            <p className="text-sm font-medium text-gray-900">$ {price}</p>
            <p className="mt-1 text-sm text-white bg-green-700 p-1 w-7 text-center">
              {" "}
              {rating.rate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
